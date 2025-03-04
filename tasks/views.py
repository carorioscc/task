#from django.shortcuts import render

from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
#puede saber que datos hay
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


