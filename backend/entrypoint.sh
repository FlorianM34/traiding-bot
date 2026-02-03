#!/bin/sh
# entrypoint.sh

python manage.py migrate

exec "$@"