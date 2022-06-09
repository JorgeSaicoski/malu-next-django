from rest_framework.serializers import ModelSerializer
from .models import Project
from .models import Images
from .models import Messages

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ImageSerializer(ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'

class MessageSerializer(ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'
