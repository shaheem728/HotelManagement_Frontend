#!/bin/bash
echo "Building the project..."
python3.12 pip install -r requirements.txt

echo "Make Migrations..."
python3.12 manage.py makemigrations --noinput
python3.12 manage.py migrate --noinput

echo "Collect Static..."
python3.12 manage.py collectstatic --noinput --clear