from django.urls import path
from .views import CVListCreateAPIView

urlpatterns = [
    path('cvs/', CVListCreateAPIView.as_view(), name='cv_list_create'),
]
