function verificar() {
    var data =  new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 4 && idade <=10){
                img.setAttribute('src', 'img/foto-criança-homem.png');
                //criança
            }
            else if(idade >= 11 && idade <=17){
                img.setAttribute('src', 'img/foto-adolescente-homem.png');
                //adolescente
            }
            else if(idade >= 18 && idade <= 49){
                img.setAttribute('src', 'img/foto-adulto-homem.png');
                //adulto
            }
            else if(idade >= 50 && idade <= 100){
                img.setAttribute('src', 'img/foto-idoso-homem.png');
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 4 && idade <=10){
                img.setAttribute('src', 'img/foto-criança-mulher.png');
                //criança
            }
            else if(idade >= 11 && idade <=17){
                img.setAttribute('src', 'img/foto-adolescente-mulher.png');
                //adolescente
            }
            else if(idade >= 18 && idade <= 49){
                img.setAttribute('src', 'img/foto-adulto-mulher.png');
                //adulto
            }
            else if(idade >= 50 && idade <= 100){
                img.setAttribute('src', 'img/foto-idoso-mulher.png');
                //idoso
            }
        }
       res.innerHTML = `Detectamos ${genero} com idade: ${idade} anos.`;
       res.appendChild(img);
    }
}