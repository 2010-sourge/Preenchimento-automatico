const cep = document.getElementById("cep");

cep.addEventListener("keyup", () => {

    let valor = cep.value.replace(/\D/g,'');

    valor = valor.replace(/^(\d{5})(\d)/,"$1-$2");

    cep.value = valor;

});

async function buscarCEP(){

    const valor = cep.value.replace("-","");

    if(valor.length != 8){

        alert("CEP inválido");

        return;

    }

    const dados = await fetch(`https://viacep.com.br/ws/${valor}/json/`);

    const endereco = await dados.json();

    if(endereco.erro){

        alert("CEP não encontrado");

        return;

    }

    document.getElementById("estado").value = endereco.uf;

    document.getElementById("cidade").value = endereco.localidade;

    document.getElementById("bairro").value = endereco.bairro;

    document.getElementById("logradouro").value = endereco.logradouro;

}