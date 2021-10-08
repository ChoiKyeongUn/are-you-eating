<p align="center">
  <img src="/uploads/0939f201c905dfd20ac4f5376477e330/eatrice_logo.jpg" alt="text" width="400" height="400"/>
  
</p>

# 🥘 맛집 추천 서비스 🍖

## ✨ 기술 스택

⭐ **Front-end** : <img src="https://https://img.shields.io/badge/React-3-61DAFB?style=flat-square&logo=React&logoColor=skyblue"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>

⭐ **Back-end** : <img src="https://img.shields.io/badge/Java-8-007396?style=flat-square&logo=Java&logoColor=white"/> <img src="https://img.shields.io/badge/Spring-2.4.5-6DB33F?style=flat-square&logo=Spring&logoColor=white"/> <img src="https://img.shields.io/badge/Gradle-7.1.1-green?style=flat-square&logo=Gradle&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-8.0.22-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/Swagger-3.0.0-85EA2D?style=flat-square&logo=Swagger&logoColor=black"/> <img src="https://img.shields.io/badge/Django-3-61DAFB?style=flat-square&logo=Django&logoColor=black"/>

⭐ **CI / CD** : <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/GitLab-FCA121?style=flat-square&logo=GitLab&logoColor=black"/> <img src="https://img.shields.io/badge/NGINX-269539?style=flat-square&logo=NGINX&logoColor=black"/> <img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white"/>

## 🙆‍♂️ 팀원 역할 🙆‍♀️

| 팀원   | 역할 | 비고                                                     |
| ------ | ---- | -------------------------------------------------------- |
| 최경운 | 팀장 | Backend Leader, Data-processing Leader, QA(Jira관리)     |
| 왕호진 | 팀원 | Backend Developer, Data-processing Developer, Git Master |
| 변대웅 | 팀원 | Frontend Leader, UX/UI Design                            |
| 박미현 | 팀원 | Frontend Developer, Logo Design                          |

<br/>

## 💻 개발 기간

- 2021.08.30 ~ 2021.10.08 (6주)

<br/>

## 🎨 프로젝트 구조

![서비스_구조](/uploads/3ff6b0ed048d1a214cea016f389c9e68/서비스_구조.png)

<br/>

## 🎨 배포 구조

![배포_구조](/uploads/f33e5f8c34f0875995ae26073a0fd5a3/배포_구조.png)

<br/>

## 📑 주요 기능

- **선호 음식 선택 기능**
  <br/>
  ![선호음식선택](/uploads/717caf3ec65f2441dba3a08f50585075/선호음식선택.gif)

- **음식점 검색 기능**
  <br/>
  ![음식검색](/uploads/a3c2425ad68d47bcff6f4be4bf83f6de/음식검색.gif)

- **리뷰 작성 기능**
  <br/>
  ![리뷰작성](/uploads/20a4db11a090c61057e6d5d9198e3ba6/리뷰작성.gif)

- **연관 음식점 추천 및 랭킹 기능**
  <br/>
  ![연관음식및랭킹](/uploads/8c81f778165eaeae8f8ef556136ed39f/연관음식및랭킹.gif)

# 통일해야할것 및 코딩규칙

## **✔️ 프로젝트 기여방법**

### **1. Custom git flow**

- 기존의 git flow 방식에서 우리의 프로젝트에 맞게 변경하였다.
- release를 삭제하고, fix라는 브랜치를 추가하였다.

1. **master**: 배포되었거나 배포될 소스가 저장되는 브랜치
2. **develop**: 다음 배포를 위해서 개발을 진행하는 브랜치, 개발 최신 상태를 항상 유지하도록 한다.
3. **hotfix**: 배포버전(master)에 생긴 문제로 긴급한 troubleshooting이 필요할 때 개발이 진행되는 브랜치
4. **feature**: 기능 단위 개발이 진행되는 브랜치
5. **fix**: 기능 개발이 끝난 후, 일어나는 이슈에 대한 처리가 진행되는 브랜치
6. **docs**: README나 .gitignore 같은 문서의 작성/수정이 이루어지는 브랜치

- feature와 fix는 이슈별로 depth를 타고 내려간다.
- 즉, feature와 fix branch를 만들 때는, **/** 뒤에 처리하는 이슈 번호를 붙이도록 한다.ex) feature/#0 , fix/#0
- feature 와 fix branch에서 개발이 완료되면 parent인 develop branch로 merge된다.
- **_master branch에는 직접적으로 접근할 수 없다._**

### **2. Git convention**

### **2-1. Commit Message Format**

- 모든 커밋 메시지는 다음과 같은 형식을 **반드시** 따르도록 한다.

`<type>: <message> (#<issue number>)`

```sql
feat: Add user login api (#S05P21B303-93)
fix: Fix bug to can't login using google login (#S05P21B303-93)
docs: Update README.m
```

### **2-2. Type**

[제목 없음](https://www.notion.so/5e3d055e22444c76b1e953570d0ca763)

### **2-3. Message**

- 커밋 메시지는 명령문으로 작성한다.
- 첫 글자는 대문자가 되도록 한다.

### **2-4. Issue number**

- 커밋과 관련된 이슈는 커밋 메시지 마지막에 **반드시** 연결하도록 한다.
- 지라에 등록된 이슈와 연동되도록 한다.

## **✔️** 코딩규칙

### 1. if문

- 한줄 일 때, Block 처리하기
- else if / else /중괄호는 조건문 바로 옆에 붙이기

```java
if(condition){
 statement;
} else if(condition2){
statement2;
} else{
statement3;
}
```

### 2. for

- 단순 반복문은 iterator를 i,j,k,...,z순으로 명명하기

### 3. 주석 규칙

- 유지 보수 차원에서 기능에 대한 주석은 `꼭 달아주기!`
- 주석 상대방이 이해할 수 있도록 달기 : 주석은 함수(메서드) 단위로 달기
- `/* */` : 설명 여러줄 필요할 때 코드 위에 작성
- `//` : 간단한 주석 코드 옆에 작성

[4. 폴더](https://www.notion.so/10d5112be3fd45fa93be9126b40e336a)

## **✔️** 지라 이슈 규칙

- 에픽의 단위 : 요구사항 정의서의 범주
- 스토리의 단위 : 요구사항 정의서의 요구사항 명
- 부작업의 단위 : 요구사항 정의서의 부작업
- 이슈 이름은 다음의 형식을 지킨다.

> 💡 (type) issue name

```
ex) (backend) 회원 정보 수정,
		(frontend) 회원 가입 페이지
		...
```
