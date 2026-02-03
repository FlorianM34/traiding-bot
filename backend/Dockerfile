FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN groupadd -r appgroup && useradd -r -g appgroup appuser

RUN apt-get update && apt-get install -y libpq-dev gcc && rm -rf /var/lib/apt/lists/*


COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY --chown=appuser:appgroup . .

RUN chmod +x /app/entrypoint.sh

USER appuser

# DEV
FROM base AS development
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# PROD
FROM base AS production
# Installation gunicorn ici (ou dans requirements.txt)
RUN pip install gunicorn 
# Collect static doit idéalement se faire au build, ou au runtime si volume partagé
RUN python manage.py collectstatic --noinput

# Correction du nom du module (api)
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "api.wsgi:application"]