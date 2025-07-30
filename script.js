const dias =['segunda', 'terça', 'quarta', 'quinta', 'sexta']
function salvarMatérias() {
    dias.forEach(dia =>{
        const valor = document.getElementById(dia).value;
        localStorage.setItem(dia, valor)
    })
}
function carregarMaterias() {
  dias.forEach(dia => {
    const valorSalvo = localStorage.getItem(dia);
    if (valorSalvo) {
      document.getElementById(dia).value = valorSalvo;
    }
  });
}
window.onload = carregarMaterias;
<button onclick="salvarMaterias()">Salvar</button>
