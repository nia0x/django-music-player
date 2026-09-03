from django.db import models

class Music(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    audio = models.FileField(upload_to="music/audio/")
    cover = models.ImageField(upload_to="music/covers/")

    def __str__(self):
        return super().__str__()