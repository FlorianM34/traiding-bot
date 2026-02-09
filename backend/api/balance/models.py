from django.db import models


class Balance(models.Model):
    balance_name = models.CharField(max_length=30)
    # buying_power = models.FloatField()
    cash = models.FloatField()
    daily_change = models.FloatField()

    