from django.db import models

class Dog(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    age = models.IntegerField()
    owner = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class HealthRecord(models.Model):
    dog = models.ForeignKey(Dog, on_delete=models.CASCADE)
    heart_rate = models.IntegerField()
    temperature = models.FloatField()
    activity_level = models.CharField(max_length=50)
    recorded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.dog.name} - {self.recorded_at}"


class Alert(models.Model):
    dog = models.ForeignKey(Dog, on_delete=models.CASCADE)
    alert_type = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.alert_type