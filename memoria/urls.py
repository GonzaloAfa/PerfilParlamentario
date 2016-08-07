from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

admin.autodiscover()

urlpatterns = patterns('',

	url(r'^$', 'visualizacion.views.home', name='home'),
	url(r'^about$', 'visualizacion.views.about', name='about'),

	url(r'^diputado/perfil/(?P<parid>\w+)$', 'visualizacion.views.perfilDiputado', name='perfilDiputado'),
	url(r'^senador/perfil/(?P<parid>\w+)$', 'visualizacion.views.perfilSenador', name='perfilSenador'),
	url(r'^resultados/(?P<idComuna>\w+)$', 'visualizacion.views.resultadosParlamentarios', name='resultadosParlamentarios'),
	url(r'^assistance/$', 'visualizacion.views.assistance', name='assistance'),

	url(r'^busqueda/avanzada/$', 'visualizacion.views.busquedaAvanzada', name='busquedaAvanzada'),


    url(r'^admin/', include(admin.site.urls)),
    url(r'^media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.MEDIA_ROOT}),

   )+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
