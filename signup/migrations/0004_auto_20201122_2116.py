# Generated by Django 3.1.3 on 2020-11-22 15:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0003_auto_20201122_2111'),
    ]

    operations = [
        migrations.RenameField(
            model_name='influencerlist',
            old_name='linkddin_followers',
            new_name='linkedin_followers',
        ),
    ]
