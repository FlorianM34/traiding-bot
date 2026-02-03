from rest_framework import serializers
from .models import Order

class OrderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['symbol', 'order_type', 'quantity', 'unit_price'] 

    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("Quantity must be positive.")
        return value
    
    def validate_unit_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("Unit price must be positive.")
        return value
    
    def validate_total_value(self, value):
        if value <= 0:
            raise serializers.ValidationError("Total value must be positive.")
        return value
    
    def create(self, validate_data):
        quantity = validate_data['quantity']
        unit_price = validate_data['unit_price']
        total_value = quantity * unit_price
        validate_data['total_value'] = total_value
        return super().create(validate_data)



class OrderReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
