from django.db import models

# Create your models here.
class Store(models.Model):
    user_id = models.IntegerField(primary_key=True)
    id = models.CharField(max_length=30)
    password = models.CharField(max_length=250)
    nickname = models.CharField(max_length=50)
    gender = models.CharField(max_length=5)
    birth = models.DateField()
    address = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    is_loggedin = models.BooleanField()