from . import models
from rest_framework import serializers

from rest_framework import serializers
from .models import Products

class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    style = serializers.CharField(source='style.name', read_only=True)

    class Meta:
        model = Products
        fields = ['id','name','description','price','stock','rating','image','category','style','category','style',
        ]
