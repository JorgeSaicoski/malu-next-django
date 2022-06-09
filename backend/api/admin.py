from django.contrib import admin
from .models import Project, Images, Messages

# Register your models here.

admin.site.register(Project)
admin.site.register(Images)
admin.site.register(Messages)