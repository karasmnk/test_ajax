
function consultaCep(){
    $(".cep").hide();
    $(".progress-bar").css("width","0%");
    $(".barra_prog").show();
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep+ "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){   
            //console.log(response);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("cidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            $("#titulo_cep").html("CEP&nbsp" + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".progress-bar").css("width","100%");
            $(".barra_prog").delay("slow").fadeOut();
            $(".cep").delay("slow").fadeIn();           
        }
    })
}

$(function (){
    $(".cep").hide();
    $(".barra_prog").hide();
})
