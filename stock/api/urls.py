from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import WatchlistViewSet, UserCreate,get_stocks
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'watchlists', WatchlistViewSet, basename='watchlist')

urlpatterns = [
    path('register/', UserCreate.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('all_stocks/',get_stocks,name="get_stocks"),
    path('', include(router.urls)),
]