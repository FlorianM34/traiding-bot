from .base import *


print("DEV DEV DEV")
print("DEV DEV DEV")
print("DEV DEV DEV")
print("DEV DEV DEV")
print("DEV DEV DEV")

DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get(
            "DATABASE_URL",
            "postgres://user:password@localhost:5432/test_db"
        ),
        conn_max_age=0,
    )
}