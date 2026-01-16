function crearDivs(n, m){
    const container = document.createElement("div")
    container.className = "container";

        container.style.display = "grid";
        container.style.gridTemplateColumns =  `repeat(${m}, 20px)`

    for(let i = 0 ; i < n * m ; i++){
        const div = document.createElement("div");

        div.style.width = "20px"
        div.style.height = "20px"
        div.style.backgroundColor = colorAleatorio();


        container.appendChild(div);
    }
    
    
    document.body.appendChild(container)
    return container;

}

function colorAleatorio(){ 
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r} , ${g} , ${b})`
}

document.body.appendChild(crearDivs(3, 3));


