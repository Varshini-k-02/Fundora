from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('login.html',views.login,name='login'),
    path('Fundoramain.html',views.home,name='home'),
    ]