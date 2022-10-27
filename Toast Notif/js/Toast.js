export default class Toast{
    constructor(options){
        Object.entries(options).forEach(function
        ([key, value]) {
            this[key] = value;
        });
    }

    set setText(value){
        const container = document.querySelector(".toast") || createContainer();
        container.textContent = value;
    }

    update(){
      
    }
    show(){

    }
    remove(){

    }
}

function createContainer(position){
    let container = document.createElement("div");
    container.classList.add("toast");
    container.dataset.position=position;
    document.body.appendChild(container);
    return container;
}
