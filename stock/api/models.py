from django.db import models
from django.contrib.auth.models import User

class whatchlist(models.Model):
    User=models.ForeignKey(User,on_delete=models.CASCADE)
    symbol=models.CharField(max_length=10)

    def __str__(self):
        return self.symbol

# Create your models here.
