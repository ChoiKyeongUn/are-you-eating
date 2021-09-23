from django.utils import timezone
from django.db import models


class Store(models.Model):
    id = models.IntegerField(primary_key=True)
    store_name = models.CharField(max_length=50)
    branch = models.CharField(max_length=20, null=True)
    area = models.CharField(max_length=50, null=True)
    tel = models.CharField(max_length=20, null=True)
    address = models.CharField(max_length=200, null=True)
    latitude = models.FloatField(max_length=10, null=True)
    longitude = models.FloatField(max_length=10, null=True)
    category = models.CharField(max_length=200, null=True)

    @property
    def category_list(self):
        return self.category.split("|") if self.category else []

class Review(models.Model):
    id = models.IntegerField(primary_key=True)
    store = models.IntegerField(null=False)
    user = models.IntegerField(null=False)
    score = models.IntegerField(null=False)
    content = models.CharField(max_length=200, null=True)
    reg_time = models.TimeField(null=False)
    
class Menu(models.Model):
    id = models.IntegerField(primary_key=True)
    store = models.IntegerField(null=False)
    menu_name = models.CharField(max_length=300, null=False)
    price = models.IntegerField(null = False)

class User(models.Model):
    id = models.IntegerField(primary_key=True)
    gender = models.CharField(max_length=4, null=False)
    age = models.IntegerField(null=False)