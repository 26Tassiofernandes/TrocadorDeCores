var cor_txt = document.getElementById('cor_txt')


function clicar() {
    const cores = ['green', 'red', 'blue', 'yellow', 'orange', 'pink', 'gray', 'purple', 'brown']
    var cor_bottom = document.getElementById('cor_botao')
    var cor = document.getElementById('body')
    
    var cor_escolhida = cores[Math.floor(Math.random() * cores.length)] // Selecionar a cor aleatoriamente
    var cor = cor.style.backgroundColor = cor_escolhida
    var cor_bottom = cor_bottom.style.backgroundColor = cor_escolhida
    cor_txt.innerHTML = `Cor escolhida: ${cor_escolhida}`
    // window.prompt(cor_escolhida)
    
}
