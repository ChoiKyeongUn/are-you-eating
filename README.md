# SSAFY Bigdata project

## 진행사항

> 11 / 12

**2021-08-30**

- 파이썬 설치, vs코드 세팅, 프로젝트 세팅

**2021-08-31**

- Req 1-1 pandas를 사용하여 menu, user 테이블 추가
- Req 2-1 음식점 평점 순 정렬 (sort_values 함수 사용)

**2021-09-01**

- Req 2-2 filter 사용해서 리뷰 개수가 min_reviews 이하인 음식점 제외
- Req 2-3 groupby, sort_values 사용해서 리뷰 개수 기준 음식점 정렬
- Req 2-4 groupby, sort_values 사용해서 리뷰 개수 기준 유저 정렬
- Req 3-1 리뷰 수 10개 단위로 음식점 수 출력
- Req 3-2 각 음식점의 평균 평점 min_reviews 이하인 음식점 제외
- Req 3-3 리뷰 수 40개 단위로 유저 수 출력
- Req 3-4 유저 나이대, 성별 분포 구하기 0살부터 100살까지 10살단위

**2021-09-02**

- Req 3-5 제주도 음식점중 랜덤한 1000개만 지도에 표시 (index.html)
- Req 4-1 analyze.py에 get_user_store_score_matrix함수로 구현

## How to Run

### Sub1

```sh
cd sub1
pip install -r requirements.txt
python parse.py
python analyze.py
python visualize.py
```

### Sub 2

**Backend**

```sh
cd sub2/backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py initialize
python manage.py runserver
```

**Frontend**

```sh
cd sub2/frontend
npm install
npm run serve
```

### data file

- 기본 제공 데이터: 맛집 데이터
  - 스켈레톤 폴더 내 포함
- 추가 제공 데이터: 카드사 데이터
  - 다운로드 링크: https://lab.ssafy.com/s05-bigdata-rec/card-data/-/blob/master/card-data.zip
- ** SSAFY에서 제공하는 기업 데이터는 다른 목적으로 사용할 수 없으며, 데이터 원본의 외부 반출을 금합니다.**
