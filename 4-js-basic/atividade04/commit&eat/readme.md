# **Landing Page Atividade 04 - Commit & Eat**

## **Descrição do Projeto**
Este projeto é uma landing page moderna desenvolvida para a **Commit & Eat**, uma hamburgueria fictícia. A página apresenta uma interface minimalista, interativa e responsiva, utilizando tecnologias como **HTML**, **CSS**, **JavaScript** e bibliotecas externas.

A página inclui:  
- Slider interativo para destacar produtos.  
- Seções como "Serviços" e "Testemunhos", com a última carregando dados de uma API externa.  
- Formulário funcional integrado a um serviço de email.  
- Design responsivo para dispositivos móveis e desktops.

---

## **Tecnologias e Ferramentas Utilizadas**

### **Linguagens**
- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização com design responsivo e animações.
- **JavaScript:** Interatividade e consumo de APIs.

### **Bibliotecas e Frameworks**
- **Swiper.js:** Slider/carrossel interativo no banner principal.
- **AOS.js:** Animações ao rolar a página, criando transições suaves para os elementos.
- **Bootstrap:** Design responsivo e componentes pré-configurados.
- **EmailJS:** Integração do formulário de contato para envio de mensagens via email.

---

## **Seções da Página**

1. **Header:**  
   - Logo e menu de navegação para as seções.
   - Botão de chamada para ação (CTA) "Entre em Contato".

2. **Banner Principal:**  
   - Slider com imagens dos principais produtos e botões para navegação.
   - Implementado com **Swiper.js**.

3. **Seção Sobre:**  
   - Apresentação da marca com texto e imagem.

4. **Seção Serviços:**  
   - Lista estática de serviços descritos em cards.

5. **Seção Testemunhos:**  
   - Depoimentos de clientes exibidos dinamicamente a partir da API [Random User Generator](https://randomuser.me/).
   - Animações aplicadas com **AOS.js**.

6. **Seção Contato:**  
   - Formulário funcional com validação em JavaScript.
   - Integração com **EmailJS** para envio de mensagens.

7. **Footer:**  
   - Links para redes sociais e informações sobre política de privacidade e termos de uso.

---

## **Visualize o Projeto Online**

O projeto foi implantado na plataforma **Vercel** e pode ser acessado pelo link abaixo:  
🔗 [Commit & Eat - Landing Page](https://atv04-commiteeat.vercel.app/)

---

## **Instalação e Execução Local**

### **Pré-requisitos**
- Navegador atualizado (Google Chrome, Firefox, Edge, etc.).
- Editor de texto (VSCode ou outro) para visualizar ou editar o código.
- Conexão com a internet (para carregar bibliotecas e consumir APIs).

### **Passos para Visualização Local**
1. Clone o repositório:

   ```bash
   git clone https://github.com/camargojp/MaisPrati.git
2. Navegue até a pasta do projeto:

   ```bash
    cd 4-js-basic/atividade04/commit&eat
3. Abra o arquivo index.html no navegador.

## **API Utilizada**

### **Testemunhos**

- Random User Generator:
Descrição: API que retorna dados fictícios de usuários, utilizados para preencher a seção de depoimentos com nomes, fotos e descrições.

## **Como Funciona o Formulário de Contato**

1. Validação com JavaScript:
    - Os campos obrigatórios (nome, email, telefone e mensagem) são validados antes do envio.
2. Envio via EmailJS:
    - Os dados do formulário são enviados diretamente para um email configurado usando o serviço EmailJS.

## **Bibliotecas e Justificativa de Uso**

1. Swiper.js:

- Implementação do slider no banner principal com transições fluidas e interatividade.

2. AOS.js:

- Aplicação de animações ao rolar a página, aumentando o dinamismo e a atratividade visual.

3. Bootstrap:

- Auxílio na criação de um design responsivo com grid flexível e componentes pré-configurados.

4. EmailJS:

- Envio de mensagens do formulário de contato sem necessidade de backend.

## **Autor**

Desenvolvido por João Paulo, como atividade 4 da Turma Full Stack 2 (+praTi e Codifica) - 2024/2.

Sinta-se à vontade para fazer sugestões, entre em contato via:

jpcruzcamargo@gmail.com.

https://www.linkedin.com/in/joaop-camargo
