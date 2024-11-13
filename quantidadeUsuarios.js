import { getCSS, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Falha na requisição');
        const dados = await res.json();
        const nomeDasRedes = Object.keys(dados);
        const quantidadeDeUsuarios = Object.values(dados);

        const data = [
            {
                x: nomeDasRedes,
                y: quantidadeDeUsuarios,
                type: 'bar',
                marker: {
                    color: getCSS('--primary-color')
                }
            }
        ];

        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            title: {
                text: 'Redes sociais com mais usuários no mundo',
                x: 0,
                font: {
                    color: getCSS('--primary-color'),
                    family: getCSS('--font'),
                    size: 30
                }
            },
            xaxis: {
                tickfont: tickConfig,
                title: {
                    text: 'Nome das redes sociais',
                    font: {
                        color: getCSS('--secondary-color')
                    }
                }
            },
            yaxis: {
                tickfont: tickConfig,
                title: {
                    text: 'Bilhões de usuários ativos',
                    font: {
                        color: getCSS('--secondary-color')
                    }
                }
            }
        };

        criarGrafico(data, layout);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

quantidadeUsuariosPorRede();
