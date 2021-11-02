const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  //1-Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  //-Note que o parâmetro da função já está sendo passado na chamada da função.
  const pessoaDelivery = order.order.delivery.deliveryPerson;
  const clienteFinal = order.name;
  const telefoneClienteFinal = order.phoneNumber;
  const enderecoRuaCliente = order.address.street;
  const enderecoNumeroCliente = order.address.number;
  const enderecoApCliente = order.address.apartment;
  console.log(`Olá ${pessoaDelivery}, entrega para: ${clienteFinal}, Telefone: ${telefoneClienteFinal}, R. ${enderecoRuaCliente}, Nº: ${enderecoNumeroCliente}, AP: ${enderecoApCliente}.`)
}
customerInfo(order);

const orderModifier = (order) => {
  //2-Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  //-Modifique o nome da pessoa compradora.
  //-Modifique o valor total da compra para R$ 50,00.
  order.name = 'Luiz Silva';
  const clienteFinal = order.name;
  order.payment = 50;
  const pedidosPizza = Object.keys(order.order.pizza);
  const pedidosPizzaForaDoVetor = pedidosPizza.join(", ");
  const pedidosBebida = order.order.drinks.coke.type;
  const pagamento = order.payment;
  console.log(`Olá ${clienteFinal}, o total do seu pedido de ${pedidosPizzaForaDoVetor} e ${pedidosBebida} é R$ ${pagamento},00`)
}

orderModifier(order);