from django.contrib import admin

# Register your models here.
from .models import User, Petition, Signature , Notice, Tag

# Register your models here.
admin.site.register(User)
admin.site.register(Petition)
admin.site.register(Signature)
admin.site.register(Notice)
admin.site.register(Tag)