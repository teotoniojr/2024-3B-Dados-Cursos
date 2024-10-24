const url = 'https://raw.githubusercontent.com/teotoniojr/2024-API-3B-CURSOS/refs/heads/main/cursos_superiores_brasil.json'

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados =  await res.json()

    const cursos = Object.keys(dados)
    const cursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    console.log(cursoMaisVotado)
    console.log(quantidadeDeVoto)
}

vizualizaInfo()