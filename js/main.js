    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('contato-form');
      const successMsg = document.getElementById('form-success');
      const toast = document.getElementById('toast-success');
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = 'https://formspree.io/f/mjkekkrk';
        try {
          const res = await fetch(action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
          });
          if (res.ok) {
            form.reset();
            successMsg.style.display = 'block';
            // Toast notification
            toast.style.display = 'block';
            setTimeout(() => { toast.style.opacity = 1; }, 10);
            setTimeout(() => {
              toast.style.opacity = 0;
              setTimeout(() => { toast.style.display = 'none'; }, 400);
            }, 3500);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            alert('Erro ao enviar. Tente novamente.');
          }
        } catch {
          alert('Erro ao enviar. Tente novamente.');
        }
      });
    });