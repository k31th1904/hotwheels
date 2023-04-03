from django.db import models

# Create your models here.

class Cars(models.Model):
    car_id = models.AutoField(primary_key=True)
    model = models.CharField(max_length=45, blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    brand = models.CharField(max_length=45, blank=True, null=True)
    type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cars'

