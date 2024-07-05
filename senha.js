document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Email:', email);
    console.log('Senha:', password);
    
    alert('Formulário de login enviado com sucesso (mas não realmente)!');
});
