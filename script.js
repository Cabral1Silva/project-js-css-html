const panels = document.querySelectorAll('.panel')// selecionar todos os elementos 

panels.forEach((panel)=>{        // arrow funtion, passar aque o que vai acontencer em cada interação

    panel.addEventListener('click', () =>{

        removeactiveClasses() // criada uma função para remover o active de todas os demais e assim espandir apenas o que tiver.
        panel.classList.add('active') // foi selecionado o seletor painel, e toda vez que clicado vai receber as propriedades active definido no css3(expandir)



    }) // para cada "painel" vai passar um evento click, quando click acontecer vai executa a função



})

function removeactiveClasses(){

    panels.forEach(panel  => { // o forEach para percorrer todos os panel

        panel.classList.remove('active') // lista todos os objetos que queremos chamar de remover



    })
}