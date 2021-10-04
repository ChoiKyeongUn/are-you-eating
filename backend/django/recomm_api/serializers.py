from rest_framework import serializers
from .models import Store

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ('user_id', 'id', 'password', 'nickname', 'gender', 'birth', 'address', 'latitude', 'longitude', 'is_loggedin')