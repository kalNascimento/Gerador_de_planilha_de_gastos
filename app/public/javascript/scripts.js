const ganhoFixoMensal = document.getElementById('ganho-fixo-mensal');
const rendaExtraMensal = document.getElementById('renda-extra-mensal');
const totalMensal = document.getElementById('total-mensal');


function NovoGasto(id) {
    const containerGastos = document.getElementById(id);
    const newGasto = document.createElement("input");
    let nameID = containerGastos.childElementCount

    newGasto.name = `inputGastosVariaveis${nameID}`
    containerGastos.appendChild(newGasto)

    console.log(containerGastos)
}

function NovoCirculo() {
    const containerGastos = document.getElementById('circle');
    const newSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    newSVG.setAttribute('id', 'cut-circ')
    newSVG.setAttribute('viewBox', '0 0 100 100')

    newCircle.setAttribute('cx', '50')
    newCircle.setAttribute('cy', '50')
    newCircle.setAttribute('r', '23')
    newCircle.setAttribute('stroke', 'red')
    newCircle.setAttribute('fill', 'gray')

    newSVG.appendChild(newCircle)
    containerGastos.appendChild(newSVG)
    console.log(containerGastos)
}

/*
<svg id="cut-circ" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="23" stroke="red" fill="gray" />
</svg>
*/