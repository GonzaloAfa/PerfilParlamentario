# -.- coding: utf-8 -.-
import os, sys
from memoria import settings

path = settings.PATH
if path not in sys.path:
    sys.path.append(path)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "memoria.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
