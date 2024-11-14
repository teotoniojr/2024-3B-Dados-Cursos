const url = 'https://raw.githubusercontent.com/teotoniojr/2024-API-3B-CURSOS/refs/heads/main/cursos_superiores_brasil.json'

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados =  await res.json()

    const cursos = Object.keys(dados)
    const votos = Object.values(dados)
    const cursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    const data = [
        {
            x:cursos,
            y:votos,
            type: 'bar',
        }
    ]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')
    
    paragrafo.innerHTML = ` Nessa pesquisa, buscou-se compreender qual o curso de graduação mais procurado pelos jovens brasileiros que acabaram de sair do Ensino Médio. O ${cursoMaisVotado} foi o curso mais votado entre todos, com um total de ${quantidadeDeVoto} votos, em uma pesquisa que teve um total de um milhão de participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    let grafico = document.createElement('div')
    grafico.className ='grafico'
    caixa.appendChild(grafico)
    Plotly.newPlot(grafico, data)


}

vizualizaInfo()