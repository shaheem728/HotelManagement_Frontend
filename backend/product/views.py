from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveAPIView
from . import models
from . import serializers
# Create your views here.

class ProdcutListviews(ListAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductsSerializer
class ProdcutDetailviews(RetrieveAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductsSerializer