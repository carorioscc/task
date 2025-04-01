from django.urls import path, include
from rest_framework.documentation import include_docs_urls
#va a generar todas las urls
from rest_framework import routers
from tasks import  views
#api
router = routers.DefaultRouter()
router.register('tasks', views.TaskView, 'tasks')
urlpatterns =  [ 
    path("api/v1/", include(router.urls)),
    #ruta para documentar
    path('docs/', include_docs_urls(title='Tasks API')),
]

