# SSAFY Bigdata project

## TIL

**2021-08-30**

- 파이썬 설치, vs코드 세팅, 프로젝트 세팅

**2021-08-31**

- Req 1-1 pandas를 사용하여 menu, user 테이블 추가

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
