# backend/api/order/management/commands/seed_orders.py
from django.core.management.base import BaseCommand
from faker import Faker
from api.order.models import Order
import random

class Command(BaseCommand):
    help = "Génère des ordres de trading factices"

    def handle(self, *args, **kwargs):
        fake = Faker()
        self.stdout.write("Génération de 20 ordres...")

        for _ in range(20):
            qty = random.randint(1, 10)
            price = round(random.uniform(100, 50000), 2)
            
            Order.objects.create(
                symbol=random.choice(["BTC/USDT", "ETH/USDT", "SOL/USDT"]),
                order_type=random.choice(["MARKET", "LIMIT"]),
                quantity=qty,
                unit_price=price,
                total_value=qty * price # LOGIQUE COHÉRENTE
)

        self.stdout.write(self.style.SUCCESS("Terminé !"))