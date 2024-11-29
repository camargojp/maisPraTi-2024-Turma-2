function loadTestimonials() {
  fetch('https://randomuser.me/api/?results=6')  
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta da API');
      }
      return response.json();
    })
    .then(data => {
      const testimonialsContainer = document.getElementById('testimonials-container');
      const users = data.results;

      testimonialsContainer.innerHTML = '';
      
      const messages = [
        "O melhor hambúrguer que já provei! Atendimento incrível e o sabor é incomparável!",
        "A experiência foi fantástica! Ambiente agradável e os hambúrgueres são divinos.",
        "Nunca imaginei que pudesse ter uma combinação tão perfeita de sabores. Recomendo a todos!",
        "Cada hambúrguer é uma obra de arte! Adoro as opções criativas que eles oferecem.",
        "Eu simplesmente amo o sabor dos hambúrgueres daqui. A qualidade é imbatível!",
        "Uma experiência gastronômica maravilhosa. Sempre volto para provar novos sabores!"
      ];
      
      users.forEach((user, index) => {
        const testimonialHTML = `
          <div class="col-md-4 mb-4" data-aos="fade-up">
            <div class="card shadow-sm hover-effect" id="test-item">
              <img src="${user.picture.large}" class="card-img-top rounded-circle" alt="Cliente" style="width: 100px; height: 100px; object-fit: cover; margin: 20px auto;">
              <div class="card-body text-center">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p class="card-text"><i class="fa fa-quote-left fa-2x mb-3 mr-1"></i> ${messages[index]}</p>
              </div>
            </div>
          </div>
        `;

        testimonialsContainer.innerHTML += testimonialHTML; 
      });

      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.classList.add('hover-effect'); 
      });
    })
    .catch(error => {
      console.error('Erro ao carregar os testemunhos:', error);
      const testimonialsContainer = document.getElementById('testimonials-container');
      testimonialsContainer.innerHTML = `<p class="text-danger">Erro ao carregar os testemunhos. Tente novamente mais tarde.</p>`;
    });
}

window.onload = loadTestimonials;