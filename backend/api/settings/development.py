from .base import *


DATABASE_URL = os.environ.get("DATABASE_URL")
DATABASES = {
    'default': dj_database_url.config(
        default=DATABASE_URL
    )
}