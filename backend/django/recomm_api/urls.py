from django.urls import path
from .views import helloAPI

urlpatterns = [
    path("hello/", helloAPI),
]