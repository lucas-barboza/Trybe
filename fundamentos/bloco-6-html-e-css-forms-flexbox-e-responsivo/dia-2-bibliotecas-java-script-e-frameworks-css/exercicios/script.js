let fieldset = document.getElementById("fieldset");
let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará","Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
let estado = document.getElementById("Estados");

for(let i = 0; i < estados.length; i += 1){
  let estd = document.createElement("option")
  estado.appendChild(estd);
  estd.innerText = estados[i];
}


function verificaData(){
  document.getElementById("data").DatePickerX.init({format: 'dd/mm/yyyy'});
}
verificaData();

new JustValidate('#body', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    endereco: {
      required: true,
      maxLength: 200,
    },
    cidade: {
      required: true,
      maxLength: 28,
    },
    estados: {
      required: true
    },
    resumoCurriculo: {
      required: true,
      maxLength: 1000,
    },
    cargo: {
      required: true,
      maxLength: 40,
    },
    descricaoCargo: {
      required: true,
      maxLength: 500,
    },
    data: {
      required: true
    },
  }
});
