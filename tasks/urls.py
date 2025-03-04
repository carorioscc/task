from django.urls import path, include
#va a generar todas las urls
from rest_framework import routers
from tasks import  views
#api
router = routers.DefaultRouter()
router.register('tasks', views.Task, 'tasks')
urlpatterns =  [ path("api/v1", include(routers.url))]
