# Generated by Django 2.0.7 on 2018-11-08 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('centres', '0006_auto_20180721_1356'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalOwner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('year', models.IntegerField()),
                ('price', models.IntegerField(blank=True, null=True)),
                ('currency', models.CharField(blank=True, max_length=10, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='centre',
            name='ownership_history',
            field=models.ManyToManyField(blank=True, to='centres.HistoricalOwner'),
        ),
    ]
