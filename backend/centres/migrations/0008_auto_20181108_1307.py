# Generated by Django 2.0.7 on 2018-11-08 13:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('centres', '0007_auto_20181108_1243'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='centre',
            name='ownership_history',
        ),
        migrations.AddField(
            model_name='centre',
            name='ownership_history',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='centres', to='centres.HistoricalOwner'),
        ),
    ]
