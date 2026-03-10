from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DogViewSet, HealthRecordViewSet, AlertViewSet

router = DefaultRouter()
router.register(r'dogs', DogViewSet)
router.register(r'health', HealthRecordViewSet)
router.register(r'alerts', AlertViewSet)

urlpatterns = [
    path('', include(router.urls)),
]