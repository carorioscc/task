#permite seleccionar los campos
from rest_framework import serializers
#desde el modelo 
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        models = 'tasks'
        #fields = (id, title, description, done)
        fields = '__all__'
