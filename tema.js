document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de alternar tema e o ícone
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Verifica o estado do tema preferido do usuário
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Adiciona a classe `dark-mode` ao body se o tema preferido do usuário for escuro
    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Adiciona um listener para o botão de alternar tema
    themeToggleBtn.addEventListener('click', function() {
        // Alterna a classe `dark-mode` no body
        document.body.classList.toggle('dark-mode');
        
        // Atualiza o ícone com base no estado atual do tema
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
});
