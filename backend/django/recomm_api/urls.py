from django.urls import path
from .views import recommAPI

urlpatterns = [
    path("<int:user_id>/", recommAPI)
]