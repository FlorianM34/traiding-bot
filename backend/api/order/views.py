from rest_framework import viewsets
from .models import Order
from .serializers import OrderCreateSerializer, OrderReadSerializer
from drf_spectacular.utils import extend_schema

@extend_schema(tags=["Orders"])
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.action == 'create': # Avec ViewSet, on utilise 'action'
            return OrderCreateSerializer
        return OrderReadSerializer

    @extend_schema(summary="Get all orders")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @extend_schema(summary="Create an order")
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
        
    @extend_schema(summary="Get a specific order")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)