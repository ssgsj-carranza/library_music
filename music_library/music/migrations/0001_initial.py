# Generated by Django 3.1.7 on 2021-04-15 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('artist', models.CharField(max_length=50)),
                ('albumn', models.CharField(max_length=50)),
                ('release_date', models.DateTimeField()),
            ],
        ),
    ]
