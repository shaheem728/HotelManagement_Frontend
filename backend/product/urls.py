from django.urls import path
from . import views
urlpatterns=[
    path('products/',views.ProdcutListviews.as_view()),
    path('products/<str:uuid>',views.ProdcutDetailviews.as_view())
]