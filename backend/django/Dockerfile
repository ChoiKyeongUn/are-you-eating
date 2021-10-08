FROM python:3.8.8
RUN pip3 install django
RUN mkdir django
WORKDIR /django
ADD requirements.txt /django
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ADD . /django/
CMD ["python", "manage.py", "runserver", "0:8000"]