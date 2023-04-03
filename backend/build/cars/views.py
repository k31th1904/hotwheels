from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from hotwheels.settings import LoadBalance

import socket

# Create your views here.

# Load configurations from environment or config file


@api_view(['GET'])
def gethost(request,format=None):
    if request.method == 'GET':

        if LoadBalance is True:
            hostname = socket.gethostname()
            return JsonResponse({'hostname':hostname+" instance is serving you!"})
        else:
            return JsonResponse({'hostname':''})


@api_view(['GET','POST'])
def cars_list(request,format=None):
    try:
        carslist = Cars.objects.all()
    except Cars.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CarsSerializer(carslist, many=True,)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view (['GET','PUT','DELETE'])
def car(request, id, format=None):
    try:
        car = Cars.objects.get(pk=id)
    except Cars.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CarsSerializer(car)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CarsSerializer(car, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        car.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)