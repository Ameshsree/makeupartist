from django.conf.urls import url
from . import views

app_name = 'signup'

urlpatterns = [
    url(r'^create/', views.signup, name='signup'),
    url(r'^login/', views.login_func, name='login'),
    url(r'^makeup_regis/', views.makeup_regis, name='makeup_regis')

]
