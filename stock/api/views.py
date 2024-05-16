from django.http import JsonResponse
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from .models import whatchlist
from .serializer import UserSerializer, watchlistSerializer
from django.contrib.auth.models import User
import requests

class WatchlistViewSet(viewsets.ModelViewSet):
    serializer_class = watchlistSerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        return whatchlist.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def get_stocks(request):
    try:
        url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=GVHKV8BXMFFYKWB1'
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors

        data = response.json()
        
        # Extract relevant data from the response
        most_actively_traded = data.get('most_actively_traded', [])

        # Format the data as needed
        formatted_data = [{'ticker': stock.get('ticker', ''), 'price': stock.get('price', ''), 'change_amount': stock.get('change_amount', ''), 'change_percentage': stock.get('change_percentage', ''), 'volume': stock.get('volume', '')} for stock in most_actively_traded]

        return JsonResponse({'stocks': formatted_data})

    except requests.exceptions.RequestException as e:
        return JsonResponse({'error': 'An error occurred while fetching stock data.'}, status=500)
