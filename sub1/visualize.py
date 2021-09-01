import itertools
from collections import Counter

from numpy.core.fromnumeric import sort
from analyze import get_most_reviewed_stores, sort_stores_by_score, get_most_active_users
from parse import load_dataframes
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import numpy as np


def set_config():
    # 폰트, 그래프 색상 설정
    font_list = fm.findSystemFonts(fontpaths=None, fontext="ttf")
    if any(["notosanscjk" in font.lower() for font in font_list]):
        plt.rcParams["font.family"] = "Noto Sans CJK JP"
    else:
        if not any(["malgun" in font.lower() for font in font_list]):
            raise Exception(
                "Font missing, please install Noto Sans CJK or Malgun Gothic. If you're using ubuntu, try `sudo apt install fonts-noto-cjk`"
            )

        plt.rcParams["font.family"] = "Malgun Gothic"

    sns.set_palette(sns.color_palette("Spectral"))
    plt.rc("xtick", labelsize=6)


def show_store_categories_graph(dataframes, n=100):
    """
    Tutorial: 전체 음식점의 상위 `n`개 카테고리 분포를 그래프로 나타냅니다.
    """

    stores = dataframes["stores"]

    # 모든 카테고리를 1차원 리스트에 저장합니다
    categories = stores.category.apply(lambda c: c.split("|"))
    categories = itertools.chain.from_iterable(categories)

    # 카테고리가 없는 경우 / 상위 카테고리를 추출합니다
    categories = filter(lambda c: c != "", categories)
    categories_count = Counter(list(categories))
    best_categories = categories_count.most_common(n=n)
    df = pd.DataFrame(best_categories, columns=["category", "count"]).sort_values(
        by=["count"], ascending=False
    )

    # 그래프로 나타냅니다
    chart = sns.barplot(x="category", y="count", data=df)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점 카테고리 분포")
    plt.show()


def show_store_review_distribution_graph(dataframes):
    """
    Req. 1-3-1 전체 음식점의 리뷰 개수 분포를 그래프로 나타냅니다. 
    """
    def get_ranges(intervals):
        result = list(map(lambda interval: get_range(interval), intervals))
        return result
    def get_range(interval):
        left = interval.left + 1
        right = interval.right
        return f'{left} ~ {right}'
    
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    scores_group = stores_reviews.groupby(["store", "store_name"])['id_x'].agg([('review_count', 'count')])
    max_review_count = scores_group['review_count'].max()
    grouped = scores_group.groupby(pd.cut(scores_group['review_count'], np.arange(-1, max_review_count + 10, 10)))['review_count'].agg([('count', 'count')])
    grouped['range'] = get_ranges(grouped.index)

    fig, ax = plt.subplots()

    bar_height = list(grouped['count'])
    bar_tick_label = list(grouped['range'])
    bar_label = list(grouped['count'])
    bar_x = [i + 1 for i in range(len(bar_height))]

    bar_plot = plt.bar(bar_x,bar_height,tick_label=bar_tick_label)

    def autolabel(rects):
        for idx,rect in enumerate(bar_plot):
            height = rect.get_height()
            ax.text(rect.get_x() + rect.get_width()/2., 1.05*height,
                    bar_label[idx],
                    ha='center', va='bottom', rotation=0)

    autolabel(bar_plot)

    plt.title('전체 음식점의 리뷰 개수 분포')
    plt.xlabel("리뷰 수")
    plt.ylabel("음식점 수")
    plt.xticks(fontsize=8)

    plt.show()


def show_store_average_ratings_graph(dataframes, n=100, min_reviews=30):
    """
    Req. 1-3-2 각 음식점의 평균 평점을 그래프로 나타냅니다.
    """
    df = sort_stores_by_score(dataframes, n, min_reviews)
    
    # 그래프로 나타냅니다
    chart = sns.barplot(x="store_name", y="score", data=df)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점의 평균 평점")
    plt.show()


def show_user_review_distribution_graph(dataframes):
    """
    Req. 1-3-3 전체 유저의 리뷰 개수 분포를 그래프로 나타냅니다.
    """

    def get_ranges(intervals):
        result = list(map(lambda interval: get_range(interval), intervals))
        return result
    def get_range(interval):
        left = interval.left + 1
        right = interval.right
        return f'{left} ~ {right}'
    
    reviews = dataframes["reviews"]
    user_review_count = reviews.groupby("user")['id'].agg([('review_count', 'count')])
    max_review_count = user_review_count['review_count'].max()
    
    grouped = user_review_count.groupby(pd.cut(user_review_count['review_count'], np.arange(-1, max_review_count + 40, 40)))['review_count'].agg([('count', 'count')])
    grouped['range'] = get_ranges(grouped.index)

    fig, ax = plt.subplots()

    bar_height = list(grouped['count'])
    bar_tick_label = list(grouped['range'])
    bar_label = list(grouped['count'])
    bar_x = [i + 1 for i in range(len(bar_height))]

    bar_plot = plt.bar(bar_x,bar_height,tick_label=bar_tick_label)

    def autolabel(rects):
        for idx,rect in enumerate(bar_plot):
            height = rect.get_height()
            ax.text(rect.get_x() + rect.get_width()/2., 1.05*height,
                    bar_label[idx],
                    ha='center', va='bottom', rotation=0)

    autolabel(bar_plot)

    plt.title('전체 유저의 리뷰 개수 분포')
    plt.xlabel("리뷰 수")
    plt.ylabel("유저 수")
    plt.xticks(fontsize=8)

    plt.show()


def show_user_age_gender_distribution_graph(dataframes, n=100):
    """
    Req. 1-3-4 전체 유저의 성별/나이대 분포를 그래프로 나타냅니다.
    """

    print()


def show_stores_distribution_graph(dataframes, n=100):
    """
    Req. 1-3-5 각 음식점의 위치 분포를 지도에 나타냅니다.
    """
    raise NotImplementedError


def main():
    set_config()
    data = load_dataframes()
    # show_store_categories_graph(data)
    # show_store_review_distribution_graph(data)
    # show_store_average_ratings_graph(data, 50, 20)
    show_user_review_distribution_graph(data)
    # show_user_age_gender_distribution_graph(data)



if __name__ == "__main__":
    main()
