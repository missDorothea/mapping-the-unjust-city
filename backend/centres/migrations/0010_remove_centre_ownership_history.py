# Generated by Django 2.0.7 on 2018-11-08 13:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('centres', '0009_historicalowner_centre'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='centre',
            name='ownership_history',
        ),
    ]
