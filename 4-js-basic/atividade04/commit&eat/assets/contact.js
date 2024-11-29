emailjs.init("g6kUXzvFE6HVjIcTo");

let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    
    if (!name || !email || !phone || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }
    
    let phonePattern = /^\(?\d{2}\)?\s?\d{5}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert("Por favor, insira um telefone válido no formato: (99) 99999-9999 ou 99999-9999.");
        return;
    }
    
    let templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };
    
    emailjs.send("service_qt517xc", "template_z92a0ld", templateParams)
        .then(function (response) {
            alert("Mensagem enviada com sucesso!");
            contactForm.reset();
        })
        .catch(function (error) {
            alert("Erro ao enviar mensagem. Tente novamente.");
            console.error("Erro:", error);
        });
});
