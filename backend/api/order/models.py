from django.db import models
from django.utils import timezone



"""
This models represents an order from the trading bot,
the LLM will generate the orders in json format and will be parsed to order objects 
"""
class Order(models.Model):
    
    ORDER_TYPE = [
        ("MARKET", "Market"),
        ("LIMIT", "Limit"),
        ("STOP_ORDERS", "Stop_orders")
    ]
    
    
    symbol = models.CharField(max_length=30)
    order_type = models.CharField(max_length=20, choices = ORDER_TYPE)
    order_date = models.DateField(default= timezone.now())
    is_executed = models.BooleanField(default = False)
    quantity = models.IntegerField()
    unit_price = models.FloatField()
    total_value = models.FloatField()

    class Meta:
        ordering = ['-order_date']
