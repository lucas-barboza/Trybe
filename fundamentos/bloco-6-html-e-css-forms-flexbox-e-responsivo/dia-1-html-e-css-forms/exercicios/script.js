let fieldset = document.getElementById("fieldset");
let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará","Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
let estado = document.getElementById("Estados");

for(let i = 0; i < estados.length; i += 1){
  let estd = document.createElement("option")
  estado.appendChild(estd);
  estd.innerText = estados[i];
}

function verificaData(){
  let inputdata = document.getElementById("data");
  inputdata.addEventListener("change", dataFuntion);
  function dataFuntion(event){
    let valueData = event.target.value;
    function condicoesData(){
      let novadata = valueData.replaceAll('\/', '');
      let dia = novadata.substr(0,2);
      let mes = novadata.substr(2,2);
      let ano = novadata.substr(4,5);
      if(dia < 1 || dia > 31){
        alert("Dia inválido");
      }
      else if(mes < 1 || mes > 12){
        alert("Mês inválido");
      }
      else if(ano < 0){
        alert("Ano inválido");
      }
      let contagemBarras = valueData.split('\/').length - 1;
      if(contagemBarras !== 2){
        alert("Data inválida");
      }
    }
    condicoesData();
  }
}
verificaData();

function verificaInput(){
  let botao = document.createElement("button");
  let paiButao = document.getElementById("fieldset2");
  paiButao.appendChild(botao);
  botao.innerText = "Enviar";
  botao.type = "submit";
  botao.id = "botao";
  botao.addEventListener("click", informacoes);
  function informacoes(event){
    event.preventDefault();
    let required = document.querySelectorAll(".required");
    let contador = 0;
    for(let i = 0; i < required.length; i += 1){
      if(required[i].value !== '' && required[i].value !== null){
        contador += 1;
      }
    }
    if(contador === 11){
      let div = document.createElement("div");
    let pai = document.getElementById("body");
    pai.appendChild(div);
    div.id = "div";
    //Nome
    let divpai = document.getElementById("div");
    let pNome = document.createElement("p");
    divpai.appendChild(pNome);
    let nome = document.getElementById("nome");
    pNome.innerText = "Nome: " + nome.value;
    //Email
    let pEmail = document.createElement("p")
    divpai.appendChild(pEmail);
    let email = document.getElementById("email");
    pEmail.innerText = "E-mail: " + email.value;
    //CPF
    let pCPF = document.createElement("p");
    divpai.appendChild(pCPF);
    let cpf = document.getElementById("cpf");
    pCPF.innerText = "CPF: " + cpf.value;
    //Endereco
    let pEndereco = document.createElement("p");
    divpai.appendChild(pEndereco);
    let endereco = document.getElementById("endereco");
    pEndereco.innerText = "Endereço: " + endereco.value;
    //Cidade
    let pCidade = document.createElement("p");
    divpai.appendChild(pCidade);
    let cidade = document.getElementById("cidade");
    pCidade.innerText = "Cidade: " + cidade.value;
    //Estado
    let pEstado = document.createElement("p");
    divpai.appendChild(pEstado);
    let estado = document.getElementById("Estados");
    pEstado.innerText = "Estado: " + estado.value;
    //Casa
    let pCasa = document.createElement("p");
    divpai.appendChild(pCasa);
    let casa = document.getElementById("casa");
    if(casa.checked === true){
      pCasa.innerText = "Mora em casa: Sim"
    }
    //Apartamento
    let pApartamento = document.createElement("p");
    divpai.appendChild(pApartamento);
    let apartamento = document.getElementById("apartamento");
    if(apartamento.checked === true){
      pApartamento.innerText = "Mora em apartamento: Sim"
    }
    //Resumo Curriculo
    let pResumoCurriculo = document.createElement("p");
    divpai.appendChild(pResumoCurriculo);
    let resumoCurriculo = document.getElementById("resumoCurriculo");
    pResumoCurriculo.innerText = "Resumo curriculo: " + resumoCurriculo.value;
    //Cargo
    let pCargo = document.createElement("p");
    divpai.appendChild(pCargo);
    let cargo = document.getElementById("cargo");
    pCargo.innerText = "Cargo: " + cargo.value;
    //Descricao cargo
    let pDescricaoCargo = document.createElement("p");
    divpai.appendChild(pDescricaoCargo);
    let descricaoCargo = document.getElementById("descricaoCargo");
    pDescricaoCargo.innerText = "Descrição do cargo: " + descricaoCargo.value;
    //Data
    let pData = document.createElement("p");
    divpai.appendChild(pData);
    let data = document.getElementById("data");
    pData.innerText = "Data de ínicio: " + data.value;
    }else{
      alert("Preencha todo o formulario");
    }
  }
}
verificaInput();

function botaoResetar(){
  let pai = document.getElementById("fieldset2");
  let botaoLimpar = document.createElement("input");
  pai.appendChild(botaoLimpar);
  botaoLimpar.type = "reset";
  botaoLimpar.innerText = "Limpar";
  botaoLimpar.id = "botaoLimpar";
  botaoLimpar.addEventListener("click", removerDiv);
  function removerDiv(){
    let node = document.getElementById("div");
    if(node.parentNode){
      node.parentNode.removeChild(node);
    }
  }
}
botaoResetar();
