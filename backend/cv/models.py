from django.db import models

# Create your models here.



from django.db import models

class CV(models.Model):
    name = models.CharField(max_length=100)  # Kullanıcının adı
    email = models.EmailField()             # Kullanıcının e-posta adresi
    cv_file = models.FileField(upload_to='cvs/')  # CV dosyası
    created_at = models.DateTimeField(auto_now_add=True)  # Oluşturulma tarihi

    def __str__(self):
        return self.name
