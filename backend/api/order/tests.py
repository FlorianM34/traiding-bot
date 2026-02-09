import pytest
from rest_framework import status
from api.order.models import Order

# On utilise le décorateur @pytest.mark.django_db pour autoriser l'accès à la base de test
@pytest.mark.django_db
class TestOrdersAPI:
    
    def test_create_order(self, client):
        """Vérifie qu'on peut créer un ordre et que le total est bien calculé"""
        url = "/api/orders/"
        data = {
            "symbol": "BTC/USDT",
            "order_type": "MARKET",
            "quantity": 2,
            "unit_price": 50000.0
        }
        
        response = client.post(url, data, format='json')
        
        print(response.data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data["total_value"] == 100000.0
        assert Order.objects.count() == 1

    def test_list_orders(self, client):
        """Vérifie la récupération de la liste"""
        # On crée un faux ordre manuellement en base
        Order.objects.create(
            symbol="ETH/USDT", 
            order_type="LIMIT", 
            quantity=1, 
            unit_price=2000, 
            total_value=2000
        )
        
        url = "/api/orders/"
        response = client.get(url)
        
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data) == 1