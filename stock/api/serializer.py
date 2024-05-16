from rest_framework import serializers

from .models import whatchlist
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password']
        extra_kwaargs={'password':{'write_only':True}}

    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        return user
    
class watchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model=whatchlist
        fields=['id','user','symbol']
