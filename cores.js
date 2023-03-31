var cor_txt = document.getElementById('cor_txt')


function clicar() {
    const cores = ['green', 'red', 'blue', 'yellow', 'orange', 'pink', 'gray', 'purple', 'brown'] // Cores disponíveis
    var cor_bottom = document.getElementById('cor_botao') // Cor do botão "clique em mim" 
    var cor = document.getElementById('body') // Cor do fundo
    
    var cor_escolhida = cores[Math.floor(Math.random() * cores.length)] // Selecionar a cor aleatoriamente
    var cor = cor.style.backgroundColor = cor_escolhida // Mudar a cor de fundo aleatoriamente
    var cor_bottom = cor_bottom.style.backgroundColor = cor_escolhida // Mudar a cor do botão para a mesma cor escolhida
    cor_txt.innerHTML = `Cor escolhida: ${cor_escolhida}`
    // window.prompt(cor_escolhida)
    
}
