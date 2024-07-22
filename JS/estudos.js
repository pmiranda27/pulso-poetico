import estudos from '../JSON/estudos.json' with { type: 'json' };

console.log(estudos);

const todasCategorias = document.getElementsByClassName("categoria-select");
const arrowDropdownImages = document.getElementsByClassName("arrow-dropdown");
const todosConteudos = document.getElementsByClassName("conteudos");

const quantidadeTrovadorismo = document.getElementById('categoria-trovadorismo');
const conteudoTrovadorismo = document.getElementById('conteudo-trovadorismo');

const quantidadeHumanismo = document.getElementById('categoria-humanismo');
const conteudoHumanismo = document.getElementById('categoria-humanismo');

const quantidadeClassicismo = document.getElementById('categoria-classicismo');
const conteudoClassicismo = document.getElementById('categoria-classicismo');

const quantidadeQuinhentismo = document.getElementById('categoria-quinhentismo');
const conteudoQuinhentismo = document.getElementById('categoria-quinhentismo');

const quantidadeBarroco = document.getElementById('categoria-barroco');
const conteudoBarroco = document.getElementById('categoria-barroco');

const quantidadeArcadismo = document.getElementById('categoria-arcadismo');
const conteudoArcadismo = document.getElementById('categoria-arcadismo');


var videosTrovadorismo = estudos.trovadorismo;

var videosHumanismo = estudos.humanismo;

var videosClassicismo = estudos.classicismo;

var videosQuinhentismo = estudos.quinhentismo;

var videosBarroco = estudos.barroco;

var videosArcadismo = estudos.arcadismo;

//! NÃO SEI O PORQUÊ, MAS EU NÃO CONSEGUI FAZER FUNCIONAR USANDO UM FOR LOOP
todasCategorias[0].addEventListener('click', () => {
    if (todosConteudos[0].classList.contains('closed')) {
        todosConteudos[0].classList.remove('closed');

        arrowDropdownImages[0].classList.add('arrow-dropdown-upsidedown');
    } else {
        todosConteudos[0].classList.add('closed');

        arrowDropdownImages[0].classList.remove('arrow-dropdown-upsidedown');
    }
    

});
todasCategorias[1].addEventListener('click', () => {
    if (todosConteudos[1].classList.contains('closed')) {
        todosConteudos[1].classList.remove('closed');

        arrowDropdownImages[1].classList.add('arrow-dropdown-upsidedown');
    } else {
        todosConteudos[1].classList.add('closed');

        arrowDropdownImages[1].classList.remove('arrow-dropdown-upsidedown');
   }
});
todasCategorias[2].addEventListener('click', () => {
    if (todosConteudos[2].classList.contains('closed')) {
        todosConteudos[2].classList.remove('closed');

        arrowDropdownImages[2].classList.add('arrow-dropdown-upsidedown');
    } else {
        todosConteudos[2].classList.add('closed');

        arrowDropdownImages[2].classList.remove('arrow-dropdown-upsidedown');
   }
});
todasCategorias[3].addEventListener('click', () => {
    if (todosConteudos[3].classList.contains('closed')) {
        todosConteudos[3].classList.remove('closed');

        arrowDropdownImages[3].classList.add('arrow-dropdown-upsidedown');
    } else {
        todosConteudos[3].classList.add('closed');

        arrowDropdownImages[3].classList.remove('arrow-dropdown-upsidedown');
   }
});
todasCategorias[4].addEventListener('click', () => {
    if (todosConteudos[4].classList.contains('closed')) {
        todosConteudos[4].classList.remove('closed');

        arrowDropdownImages[4].classList.add('arrow-dropdown-upsidedown');
    } else {
        todosConteudos[4].classList.add('closed');

        arrowDropdownImages[4].classList.remove('arrow-dropdown-upsidedown');
   }
});
todasCategorias[5].addEventListener('click', () => {
    if (todosConteudos[5].classList.contains('closed')) {
        todosConteudos[5].classList.remove('closed');

        arrowDropdownImages[5].classList.add('arrow-dropdown-upsidedown');
    } else {
        todosConteudos[5].classList.add('closed');

        arrowDropdownImages[5].classList.remove('arrow-dropdown-upsidedown');
   }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //


console.log('todasCategorias length: ' + todasCategorias.length);
console.log('todosConteudos length: ' + todosConteudos.length);


function recarregarQuantidadeVideos(){
    quantidadeTrovadorismo.innerHTML = `${videosTrovadorismo.length} vídeos`;
    quantidadeHumanismo.innerHTML = `${videosHumanismo.length} vídeos`;
    quantidadeClassicismo.innerHTML = `${videosClassicismo.length} vídeos`;
    quantidadeQuinhentismo.innerHTML = `${videosQuinhentismo.length} vídeos`;
    quantidadeBarroco.innerHTML = `${videosBarroco.length} vídeos`;
    quantidadeArcadismo.innerHTML = `${videosArcadismo.length} vídeos`;
}

function recarregarConteudoCategorias() {
    funcConteudoTrovadorismo();
    funcConteudoHumanismo();
    funcConteudoClassicismo();
    funcConteudoQuinhentismo();
    funcConteudoBarroco();
    funcConteudoArcadismo();
}

window.addEventListener('load', function (e) {
    recarregarQuantidadeVideos();
    recarregarConteudoCategorias();
});


function funcConteudoTrovadorismo() {
    videosTrovadorismo.forEach(function (e) {
        var anchorStruct = document.createElement('a');
        anchorStruct.setAttribute('class', 'item-conteudo')
        anchorStruct.setAttribute('href', e.url);
        anchorStruct.setAttribute('target', '_blank')
        conteudoTrovadorismo.appendChild(anchorStruct);

        var trovadorismoThumb = document.createElement('img');
        trovadorismoThumb.setAttribute('src', e.thumbnail);
        trovadorismoThumb.setAttribute('class', 'thumb-video')
        anchorStruct.appendChild(trovadorismoThumb);

        var trovadorismoTitle = document.createElement('h3');
        trovadorismoTitle.setAttribute('class', 'title-video')
        trovadorismoTitle.innerHTML = e.titulo;
        anchorStruct.appendChild(trovadorismoTitle);
    });
}

function funcConteudoHumanismo() {
    videosHumanismo.forEach(function (e) {
        var anchorStruct = document.createElement('a');
        anchorStruct.setAttribute('class', 'item-conteudo')
        anchorStruct.setAttribute('href', e.url);
        anchorStruct.setAttribute('target', '_blank')
        conteudoHumanismo.appendChild(anchorStruct);

        var humanismoThumb = document.createElement('img');
        humanismoThumb.setAttribute('src', e.thumbnail);
        humanismoThumb.setAttribute('class', 'thumb-video')
        anchorStruct.appendChild(humanismoThumb);

        var humanismoTitle = document.createElement('h3');
        humanismoTitle.setAttribute('class', 'title-video')
        humanismoTitle.innerHTML = e.titulo;
        anchorStruct.appendChild(humanismoTitle);
    });
}

function funcConteudoClassicismo() {
    videosClassicismo.forEach(function (e) {
        var anchorStruct = document.createElement('a');
        anchorStruct.setAttribute('class', 'item-conteudo')
        anchorStruct.setAttribute('href', e.url);
        anchorStruct.setAttribute('target', '_blank')
        conteudoClassicismo.appendChild(anchorStruct);

        var classicismoThumb = document.createElement('img');
        classicismoThumb.setAttribute('src', e.thumbnail);
        classicismoThumb.setAttribute('class', 'thumb-video')
        anchorStruct.appendChild(classicismoThumb);

        var classicismoTitle = document.createElement('h3');
        classicismoTitle.setAttribute('class', 'title-video')
        classicismoTitle.innerHTML = e.titulo;
        anchorStruct.appendChild(classicismoTitle);
    });
}

function funcConteudoQuinhentismo() {
    videosQuinhentismo.forEach(function (e) {
        var anchorStruct = document.createElement('a');
        anchorStruct.setAttribute('class', 'item-conteudo')
        anchorStruct.setAttribute('href', e.url);
        anchorStruct.setAttribute('target', '_blank')
        conteudoQuinhentismo.appendChild(anchorStruct);

        var quinhentismoThumb = document.createElement('img');
        quinhentismoThumb.setAttribute('src', e.thumbnail);
        quinhentismoThumb.setAttribute('class', 'thumb-video')
        anchorStruct.appendChild(quinhentismoThumb);

        var quinhentismoTitle = document.createElement('h3');
        quinhentismoTitle.setAttribute('class', 'title-video')
        quinhentismoTitle.innerHTML = e.titulo;
        anchorStruct.appendChild(quinhentismoTitle);
    });
}

function funcConteudoBarroco() {
    videosBarroco.forEach(function (e) {
        var anchorStruct = document.createElement('a');
        anchorStruct.setAttribute('class', 'item-conteudo')
        anchorStruct.setAttribute('href', e.url);
        anchorStruct.setAttribute('target', '_blank')
        conteudoBarroco.appendChild(anchorStruct);

        var barrocoThumb = document.createElement('img');
        barrocoThumb.setAttribute('src', e.thumbnail);
        barrocoThumb.setAttribute('class', 'thumb-video')
        anchorStruct.appendChild(barrocoThumb);

        var barrocoTitle = document.createElement('h3');
        barrocoTitle.setAttribute('class', 'title-video')
        barrocoTitle.innerHTML = e.titulo;
        anchorStruct.appendChild(barrocoTitle);
    });
}

function funcConteudoArcadismo() {
    videosArcadismo.forEach(function (e) {
        var anchorStruct = document.createElement('a');
        anchorStruct.setAttribute('class', 'item-conteudo')
        anchorStruct.setAttribute('href', e.url);
        anchorStruct.setAttribute('target', '_blank')
        conteudoArcadismo.appendChild(anchorStruct);

        var arcadismoThumb = document.createElement('img');
        arcadismoThumb.setAttribute('src', e.thumbnail);
        arcadismoThumb.setAttribute('class', 'thumb-video')
        anchorStruct.appendChild(arcadismoThumb);

        var arcadismoTitle = document.createElement('h3');
        arcadismoTitle.setAttribute('class', 'title-video')
        arcadismoTitle.innerHTML = e.titulo;
        anchorStruct.appendChild(arcadismoTitle);
    });
}