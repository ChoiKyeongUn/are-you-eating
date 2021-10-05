from rest_framework.response import Response
from rest_framework.decorators import api_view
import numpy as np
import pandas as pd
from pandas.core.indexes import category
import pymysql
import random
from haversine import haversine
from sklearn.metrics.pairwise import cosine_similarity as cosi

# Create your views here.

@api_view(['GET'])
def recommAPI(request, user_id):
    category_map = {0: '한식', 1: '분식', 2: '아시안/중국집', 3: '치킨', 4: '피자', 5: '양식', 6: '일식', 7: '고기', 8: '패스트푸드', 9: '카페/디저트', 10: '술집'}

    conn = pymysql.connect(host="54.180.160.233", user="root", password="eatrice", db="eatrice", charset="utf8mb4")
    cur = conn.cursor()
    # 유저 현재 위치 구해옴
    location_sql = """select latitude, longitude from user where user_id = %s"""
    cur.execute(location_sql, user_id)
    location = cur.fetchone()
    # print(res)

    # 현재 위치 기반 주변 음식점 및 카테고리 모두 구해옴
    all_store_category_sql = """select * from store s join store_category c on s.store_id = c.store_id where s.latitude between %s and %s and s.longitude between %s and %s order by s.store_id"""
    cur.execute(all_store_category_sql, (location[0] - 0.01, location[0] + 0.01, location[1] - 0.01 , location[1] + 0.01))

    store_info = cur.fetchall()
    # print(res)
    all_store = set()
    all_store_info = dict()
    # print(all_store_info.get(0)) # None
    for r in store_info:
        if all_store_info.get(r[0]) == None:
            all_store_info[r[0]] = [0] * 16
        all_store_info[r[0]][r[10]-1] = 1
        # name
        all_store_info[r[0]][11] = r[1]
        # tel
        all_store_info[r[0]][12] = r[4]
        # address
        all_store_info[r[0]][13] = r[5]
        # latitude
        all_store_info[r[0]][14] = float(r[6])
        # longitude
        all_store_info[r[0]][15] = float(r[7])

    # store_id 정렬해서 저장하는곳
    all_store_id = list(all_store_info.keys())
    all_store_id.sort()

    # store_id 순으로 카테고리 행렬 저장하는곳
    items = []
    for store_id in all_store_id:
        items.append(all_store_info[store_id][:11])

    # store_id 순으로 평점을 저장하는곳
    all_store_review_sql = """select s.store_id, ifnull(avg(score), 0) from store s left outer join review r on s.store_id = r.store_id where s.latitude between %s and %s and s.longitude between %s and %s group by s.store_id order by s.store_id"""
    cur.execute(all_store_review_sql, (location[0] - 0.01, location[0] + 0.01, location[1] - 0.01 , location[1] + 0.01))
    res = cur.fetchall()
    # print(type(res[0][1]))
    all_store_score_dict = dict()
    for r in res:
        all_store_score_dict[r[0]] = float(r[1])

    # user의 선호 카테고리 저장하는곳
    prefer_sql = """select category_id from user_category where user_id = %s"""
    cur.execute(prefer_sql, user_id)
    user_category = cur.fetchall()
    user_category_list = [[0] * 11]
    for uc in user_category:
        user_category_list[0][uc[0] - 1] = 1

    cosine_similarity = pd.DataFrame(cosi(user_category_list, items), columns=all_store_id)

    cosine_similarity = cosine_similarity.transpose().sort_values(by=0, ascending=False)
    cosine_similarity_list = list(cosine_similarity.index)
    filtered_cosine_similarity = cosine_similarity[cosine_similarity[0] >= 0.5]
    filtered_cosine_similarity_list = list(filtered_cosine_similarity.index)
    high_score_filtered_cosine_similarity_list = list(filter(lambda x: all_store_score_dict[x] >= 3.5, filtered_cosine_similarity_list))

    response_store_id = random.sample(filtered_cosine_similarity_list, min(3, len(filtered_cosine_similarity_list)))
    if len(response_store_id) < 3:
        # TODO 평점 상관없이 채우기
        # 현재 선택된것들 filtered_cosine_similarity_list(평점 상관 x, 유사도 0.5 이상인 것) 에서 지우기
        for sid in response_store_id:
            filtered_cosine_similarity_list.remove(sid)
        # filtered_cosine_similarity_list에서 3 - len(response_store_id)개 만큼 뽑기
        temp = random.sample(filtered_cosine_similarity_list, min(3- len(response_store_id), len(filtered_cosine_similarity_list)))
        response_store_id += temp

        if len(response_store_id) < 3:
            # TODO 카테고리 상관없이 채우기
            # 현재 선택된것들 cosine_similarity_list(평점/유사도 상관 x 인 것) 에서 지우기
            for sid in response_store_id:
                cosine_similarity_list.remove(sid)
            # cosine_similarity_list에서 3 - len(response_store_id)개 만큼 뽑기
            temp = random.sample(cosine_similarity_list, min(3 - len(response_store_id), len(cosine_similarity_list)))
            response_store_id += temp


    # print(response_store_id)
    response = []
    for store in response_store_id:
        temp = dict()
        temp['store_id'] = store
        temp['name'] = all_store_info[store][11]
        temp['tel'] = all_store_info[store][12]
        temp['address'] = all_store_info[store][13]
        temp['category'] = []
        for idx, value in enumerate(all_store_info[store][:11]):
            if value == 1:
                temp['category'].append(category_map[idx])
        temp['score'] = all_store_score_dict[store]
        temp['distance'] = haversine((float(location[0]), float(location[1])), (all_store_info[store][14], all_store_info[store][15]), unit='m')
        response.append(temp)

    return Response(response)