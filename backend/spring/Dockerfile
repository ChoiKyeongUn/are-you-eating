# FROM: 어떤 이미지를 기반으로 할지 설정합니다. Docker 이미지는 기존에 만들어진 이미지를 기반으로 생성합니다. 
# FROM <이미지 이름>:<태그> 형식으로 설정합니다.
FROM openjdk:8-jdk-alpine
# build 시점에만 사용되는 변수
ARG JAR_FILE=build/libs/*.jar
# COPY는 파일을 이미지에 추가합니다. ADD와는 달리 COPY는 압축 파일을 추가할 때 압축을 해제하지 않고, 파일 URL도 사용할 수 없습니다.
COPY ${JAR_FILE} app.jar
# ENTRYPOINT는 컨테이너가 시작되었을 때 스크립트 혹은 명령을 실행합니다
# 셀 없이 바로 실행하기  ENTRYPOINT ["<실행 파일>", "<매개 변수1>", "<매개 변수2>"] 
ENTRYPOINT [ "java", "-jar", "/app.jar" ]

