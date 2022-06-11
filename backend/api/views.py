from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project, Images, Messages
from .serializer import ProjectSerializer, ImageSerializer, MessageSerializer


# Create your views here.

#Get projects
@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer)
#Get image from specific project
@api_view(['GET'])
def getImages(request, pk):
    images = Images.objects.get(project=pk)
    serializer = ImageSerializer(images, many=True)
    return Response(serializer)

#Create a new message
@api_view(['POST'])
def createMessage(request):
    data = request.data
    message = Messages.objects.create(
        name = data['name'],
        email = data['email'],
        body = data['body']
    )
    serializer = MessageSerializer(message, many=False)
    return Response(serializer.data)
