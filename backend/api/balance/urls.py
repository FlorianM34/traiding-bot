from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BalanceViewSet

router = DefaultRouter()
router.register(r'', BalanceViewSet, basename='balance') # On laisse vide ici

urlpatterns = [
    path('', include(router.urls)),
]