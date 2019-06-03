export const menuOn = () => {
    const nav = document.querySelector('nav').classList;
    if(nav.contains('menuMin')) {
        nav.remove('menuMin');
        nav.add('menuMax');
    }
};

export const menuOff = () => {
    const nav = document.querySelector('nav').classList;
    if(nav.contains('menuMax')) {
        nav.remove('menuMax');
        nav.add('menuMin');
    }
};

export const mostraDestaque = () => {
    const destaque = document.getElementById('destaque');
    const proximaProgramacao = document.getElementById('proxima-programacao');
    const detalhes = document.getElementById('detalhes');
    const detalhesProgramacao = document.getElementById('detalhes-programacao');
    destaque.style.display = 'none';
    proximaProgramacao.style.display = 'none';
    detalhes.style.display = 'block';
    detalhesProgramacao.style.display = 'block';
}

export const ocultaDestaque = () => {
    const destaque = document.getElementById('destaque');
    const proximaProgramacao = document.getElementById('proxima-programacao');
    const detalhes = document.getElementById('detalhes');  
    const detalhesProgramacao = document.getElementById('detalhes-programacao');
    destaque.style.display = 'block';
    proximaProgramacao.style.display = 'block';
    detalhes.style.display = 'none';
    detalhesProgramacao.style.display = 'none';
}

export const toggleThumb = (index) => {
    const thumb = document.getElementById('detalhes-programacao').getElementsByClassName('thumb');  
    function limpaEstados() {
        for(let i=0; i < thumb.length; i++){
            if(thumb.item(i).classList.contains('active')){
                thumb.item(i).classList.remove('active');
            }
        }
    }
    // ativar o thumb
    if(!thumb.item(index).classList.contains('active')) {
        limpaEstados();
        thumb.item(index).classList.add('active');        
    } else {
        thumb.item(index).classList.remove('active');
    }
    
}
