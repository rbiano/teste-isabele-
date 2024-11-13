const getCSS = (variavel) => {
    const valor = getComputedStyle(document.body).getPropertyValue(variavel);
    return valor || '#222831'; // Caso a variável não exista, retornamos um valor padrão
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    const container = document.getElementById('graficos-container');
    if (!container) {
        console.error("Elemento #graficos-container não encontrado!");
        return;
    }
    container.appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    };
    Plotly.newPlot(grafico, data, layout, config);
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container');
    if (!container) {
        console.error("Elemento #graficos-container não encontrado!");
        return;
    }
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = texto;
    container.appendChild(paragrafo);
}

export { getCSS, tickConfig, criarGrafico, incluirTexto };
