from rest_framework import serializers
from .models import Balance

class BalanceCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Balance
        fields = ["balance_name","cash"]

class BalanceReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Balance
        fields = ["balance_name", "cash", "daily_change"]