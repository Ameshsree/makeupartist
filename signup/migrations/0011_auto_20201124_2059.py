# Generated by Django 3.1.2 on 2020-11-24 15:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0010_auto_20201124_2019'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='makeuplist',
            name='influencer_choice',
        ),
        migrations.RemoveField(
            model_name='makeuplist',
            name='mdi_old_age',
        ),
        migrations.RemoveField(
            model_name='makeuplist',
            name='mdi_young_age',
        ),
    ]
