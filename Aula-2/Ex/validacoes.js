function valida_nome(){

    if(document.getElementsByName("nome").value.length < 3){
    alert('Por favor, preencha o campo nome');
    document.getElementById("nome").focus();
    return false
    }
}

function valida_RA(){

    if(document.getElementsByName("RA").value.length < 0){
    alert('Por favor, preencha o campo nome');
    document.getElementsByName("RA").focus();
    return false
    }
}

function valida_ma1(){

    if(document.getElementsByName("ma1").value.length < 0){
    alert('Por favor, preencha o campo nome');
    document.getElementsByName("MA1").focus();
    return false
    }
}

function valida_P1(){

    if(document.getElementsByName("P1").value.length < 0){
    alert('Por favor, preencha o campo nome');
    document.getElementsByName("P1").focus();
    return false
    }
}

function valida_P2(){

    if(document.getElementsByName("P2").value.length < 0){
    alert('Por favor, preencha o campo nome');
    document.getElementsByName("P2").focus();
    return false
    }
}

function valida_ma2(){

    if(document.getElementsByName("ma2").value.length < 0){
    alert('Por favor, preencha o campo nome');
    document.getElementById("ma2").focus();
    return false
    }
}

function valida_mb2(){

    if(document.getElementsByName("mb2").value.length < 0){
    alert('Por favor, preencha o campo nome');
    document.getElementById("mb2").focus();
    return false
    }
}
