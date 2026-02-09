from rest_framework import viewsets
from .models import Balance
from .serializers import BalanceCreateSerializer, BalanceReadSerializer
from drf_spectacular.utils import extend_schema

@extend_schema(tags=["Balances"])
class BalanceViewSet(viewsets.ModelViewSet):
    queryset = Balance.objects.all()

    def get_serializer_class(self):
        if self.action == 'create': 
            return BalanceCreateSerializer
        return BalanceReadSerializer
