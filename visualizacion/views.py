import urllib, json

from django.shortcuts import render, render_to_response, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext

from django.core import serializers
from django.core.urlresolvers import reverse

from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required

from memoria import settings

host_url = settings.API_URL


def getCommunes():

	url = host_url+'/getComunas'
	connection = urllib.urlopen(url)

	if(connection.code == 200):
		return json.loads(connection.read())
	else:
		return json.loads({})


def home(request):

	return render_to_response('perfilparlamentario/home.html',
		{"lista_comunas"	: getCommunes() },
		context_instance=RequestContext(request))


def about(request):

	return render_to_response('perfilparlamentario/about.html',
		{"lista_comunas"	: getCommunes()},
		context_instance=RequestContext(request))


def perfilDiputado(request ,parid ):

	url = host_url+'/getDiputado/'+parid
	diputado = json.loads(urllib.urlopen(url).read())

	data = {
		"data" 			: diputado,
		"lista_comunas"	: getCommunes()
	}

	return render_to_response('perfil/diputado.html', data , context_instance=RequestContext(request))


def resultadosParlamentarios(request, idComuna):

	url 			= host_url+'/getParlamentarios/'+idComuna
	parlamentarios 	= json.loads(urllib.urlopen(url).read())

	url_comuna 		= host_url+'/getComuna/'+idComuna
	comuna 			= json.loads(urllib.urlopen(url_comuna).read())

	data = {
		"parlamentarios" : parlamentarios,
		"lista_comunas"	: getCommunes(),
		"comuna"		: comuna
	}
	return render_to_response('perfil/resultados.html', data , context_instance=RequestContext(request))


def perfilSenador(request,parid):

	url = host_url+'/getSenador/'+parid
	data = json.loads(urllib.urlopen(url).read())

	data = {
		"data" 			: data,
		"lista_comunas"	: getCommunes()
	}
	return render_to_response('perfil/senador.html', data , context_instance=RequestContext(request))


def assistance(request):

	url = host_url+'/getAssistance'
	asistencias = json.loads((urllib.urlopen(url)).read())

	data = {
		"asistencias" 	: asistencias,
		"lista_comunas"	: getCommunes()
	}
	return render_to_response('perfilparlamentario/assistance.html', data , context_instance=RequestContext(request))


def busquedaAvanzada(request):
	return render_to_response('perfil/buscadorAvanzado.html', {} , context_instance=RequestContext(request))
