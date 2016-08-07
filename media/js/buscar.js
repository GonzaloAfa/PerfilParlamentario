    $('#paciente').on('change',get_especialidades);

    $('#especializacion').on('change', get_profesionales);


    jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });

    function get_especialidades(){
        var id =$(this).val();
        
        $('#resto-form').show();
        $('#especializacion').empty();
        $('#especializacion').append('<option>---</option');


        $.ajax({
            data    : {'id': id},
            url     : '/buscar/especialidad',
            type    : 'get',
            success : function(data){

                
                for (var i = 0; i<data.length; i++){
                    $('#especializacion').append('<option value="'+data[i].pk+'">' + data[i].fields.nombre + '</option>');

                }
           
             }
        })
    }

    function get_profesionales(){

        var id= $(this).val();
        
        $.ajax({
            data    : {'id': id},
            url     : '/buscar/profesional',
            type    : 'get',
            success : function(data){

                var html = '<h2>Resultados:</h2><br/>'
                html    += '<table class="table table-striped">'


                for (var i = 0; i<data.length; i++){

                    html    += '<tr><td><img src="/media/'+data[i].fields.avatar+'" height="42" width="42"/></td>'

                    html    +='<td><div class="media-body"><h4 class="media-heading"><b>'+data[i].fields.nombre+' '+data[i].fields.apellido+'</b></h4>'

                    html    +=data[i].fields.profesion+' - '+data[i].fields.institucion+'</div></td>'

                    html    +='<td><a class="btn btn-success" href="/perfil/'+data[i].pk+'"><i class="glyphicon glyphicon-eye-open"></i> Ver agenda</a></td></tr>' }

                html+= '</table>'

                $('#resultado').html(html);
            }
        });
    }

