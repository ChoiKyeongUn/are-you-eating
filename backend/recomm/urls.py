from django.urls import path, include
from .views import recommAPI

urlpatterns = [
    path("<int:user_id>/", recommAPI)
]