# Generated by Django 2.0.7 on 2018-07-13 20:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('centres', '0002_auto_20180713_2028'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='centres.Company'),
        ),
        migrations.AddField(
            model_name='image',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='centres.Company'),
        ),
    ]
