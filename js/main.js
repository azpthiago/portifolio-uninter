    /*
      main.js
      Script principal para interatividade do portfólio.
      Responsável pelo envio do formulário de contato via AJAX (Formspree),
      exibição de mensagens de sucesso e rolagem suave ao topo.
    */

    // Aguarda o carregamento do DOM para iniciar os scripts
    document.addEventListener('DOMContentLoaded', function () {
      // Seletores dos elementos do formulário e mensagens
      const form = document.getElementById('contato-form');
      const successMsg = document.getElementById('form-success');
      const toast = document.getElementById('toast-success');

      // Evento de submit do formulário de contato
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = 'https://formspree.io/f/mjkekkrk'; // Endpoint do Formspree
        try {
          // Envia os dados do formulário via fetch (AJAX)
          const res = await fetch(action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
          });
          if (res.ok) {
            form.reset();
            successMsg.style.display = 'block';
            // Exibe toast de sucesso
            toast.style.display = 'block';
            setTimeout(() => { toast.style.opacity = 1; }, 10);
            setTimeout(() => {
              toast.style.opacity = 0;
              setTimeout(() => { toast.style.display = 'none'; }, 400);
            }, 3500);
            // Rola suavemente para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            alert('Erro ao enviar. Tente novamente.');
          }
        } catch {
          alert('Erro ao enviar. Tente novamente.');
        }
      });
    });