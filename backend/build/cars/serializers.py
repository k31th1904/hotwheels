from rest_framework import serializers
from .models import *

class CarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cars
        fields = ['car_id','model','year','brand','type']

