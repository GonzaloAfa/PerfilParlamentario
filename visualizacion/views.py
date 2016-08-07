import urllib, json

from django.shortcuts import render
from django.shortcuts import render_to_response, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext

from django.core import serializers
from django.core.urlresolvers import reverse

from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required

from memoria import settings

host_url = settings.API_URL




def home(request):

	data = {
		"lista_comunas"	: json.loads(urllib.urlopen(host_url+'/getComunas').read()),
		"host_url": host_url
	}
	return render_to_response('perfilparlamentario/home.html', data , context_instance=RequestContext(request))


def about(request):
	data = {
		"lista_comunas"	: json.loads(urllib.urlopen(host_url+'/getComunas').read()),
		"host_url": host_url
		}

	return render_to_response('perfilparlamentario/about.html', data, context_instance=RequestContext(request))


def perfilDiputado(request ,parid ):

	response 	= urllib.urlopen(host_url+'/getDiputado/'+parid)
	diputado 	= json.loads(response.read())

	data = {
		"data" 			: diputado,
		"lista_comunas"	: json.loads(urllib.urlopen(host_url+'/getComunas').read())
	}

	return render_to_response('perfil/diputado.html', data , context_instance=RequestContext(request))


def resultadosParlamentarios(request, idComuna):

	url 			= host_url+'/getParlamentarios/'+idComuna
	response 		= urllib.urlopen(url)
	parlamentarios 	= json.loads(response.read())

	url_comuna 		= host_url+'/getComuna/'+idComuna
	comuna 			= json.loads(urllib.urlopen(url_comuna).read())


	data = {
		"parlamentarios" : parlamentarios,
		"lista_comunas"	: json.loads(urllib.urlopen(host_url+'/getComunas').read()),
		"comuna"		: comuna,
	}

	return render_to_response('perfil/resultados.html', data , context_instance=RequestContext(request))


def perfilSenador(request,parid):

	data = {
		"data" 			: json.loads((urllib.urlopen(host_url+'/getSenador/'+parid)).read()),
		"lista_comunas"	: json.loads(urllib.urlopen(host_url+'/getComunas').read())
	}

	return render_to_response('perfil/senador.html', data , context_instance=RequestContext(request))


def assistance(request):

	data = {
		"asistencias" 	: json.loads((urllib.urlopen(host_url+'/getAssistance')).read()),
		"lista_comunas"	: json.loads(urllib.urlopen(host_url+'/getComunas').read())
	}

	return render_to_response('perfilparlamentario/assistance.html', data , context_instance=RequestContext(request))


def busquedaAvanzada(request):
	return render_to_response('perfil/buscadorAvanzado.html', {} , context_instance=RequestContext(request))
