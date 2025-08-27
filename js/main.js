const select = document.getElementById('meio-contato');
const label = document.getElementById('label-contato');
const input = document.getElementById('contato');

select.addEventListener('change', () => {
  const valor = select.value;

  if (valor === 'whatsapp') {
    label.textContent = 'Insira seu WhatsApp';
    input.placeholder = '(xx) xxxxx-xxxx';
  } else if (valor === 'email') {
    label.textContent = 'Insira seu E-mail';
    input.placeholder = 'seu@email.com';
  } else if (valor === 'telefone') {
    label.textContent = 'Insira seu número de telefone';
    input.placeholder = '(xx) xxxx-xxxx';
  }
});
