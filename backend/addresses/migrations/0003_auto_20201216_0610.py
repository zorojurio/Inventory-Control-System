# Generated by Django 3.1.4 on 2020-12-16 00:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('addresses', '0002_auto_20201216_0602'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='address_line1',
            new_name='address',
        ),
        migrations.RemoveField(
            model_name='address',
            name='address_line2',
        ),
        migrations.RemoveField(
            model_name='address',
            name='city',
        ),
    ]