//* Import do arquivo .json que contém as categorias e seus vídeos.
import estudos from '../JSON/estudos.json' with { type: 'json' };

//Só um teste para ver se deu tudo certo
console.log(estudos);

// Guarda todas as divs com a classe "categoria-select" numa váriavel;
    // Como são várias com a mesma classe, será um array.
const todasCategorias = document.getElementsByClassName("categoria-select");
// Guarda todas as imagens com a classe "arrow-dropdown" numa váriavel;
    // Como são várias com a mesma classe, será um array.
const arrowDropdownImages = document.getElementsByClassName("arrow-dropdown");
// Guarda todas as sections com a classe "conteudos" numa váriavel;
    // Como são várias com a mesma classe, será um array.
const todosConteudos = document.getElementsByClassName("conteudos");

// Guarda os respectivos elementos HTML sobre o Trovadorismo em variáveis.
const quantidadeTrovadorismo = document.getElementById('categoria-trovadorismo');
const conteudoTrovadorismo = document.getElementById('conteudo-trovadorismo');
// Guarda todos os anchors (links) que são filhos do elemento "conteudo-trovadorismo".
    // No momento sem valor algum, pois ainda não existem, será reabordada mais tarde.
var todosAnchorsTrovadorismo = conteudoTrovadorismo.getElementsByClassName('item-conteudo');

// Guarda os respectivos elementos HTML sobre o Humanismo em variáveis.
const quantidadeHumanismo = document.getElementById('categoria-humanismo');
const conteudoHumanismo = document.getElementById('conteudo-humanismo');
// Guarda todos os anchors (links) que são filhos do elemento "conteudo-humanismo".
    // No momento sem valor algum, pois ainda não existem, será reabordada mais tarde.
var todosAnchorsHumanismo = conteudoHumanismo.getElementsByClassName('item-conteudo');

// Guarda os respectivos elementos HTML sobre o Classicismo em variáveis.
const quantidadeClassicismo = document.getElementById('categoria-classicismo');
const conteudoClassicismo = document.getElementById('conteudo-classicismo');
// Guarda todos os anchors (links) que são filhos do elemento "conteudo-classicismo".
    // No momento sem valor algum, pois ainda não existem, será reabordada mais tarde.
var todosAnchorsClassicismo = conteudoClassicismo.getElementsByClassName('item-conteudo');

// Guarda os respectivos elementos HTML sobre o Quinhentismo em variáveis.
const quantidadeQuinhentismo = document.getElementById('categoria-quinhentismo');
const conteudoQuinhentismo = document.getElementById('conteudo-quinhentismo');
// Guarda todos os anchors (links) que são filhos do elemento "conteudo-quinhentismo".
    // No momento sem valor algum, pois ainda não existem, será reabordada mais tarde.
var todosAnchorsQuinhentismo = conteudoQuinhentismo.getElementsByClassName('item-conteudo');

// Guarda os respectivos elementos HTML sobre o Barroco em variáveis.
const quantidadeBarroco = document.getElementById('categoria-barroco');
const conteudoBarroco = document.getElementById('conteudo-barroco');
// Guarda todos os anchors (links) que são filhos do elemento "conteudo-barroco".
    // No momento sem valor algum, pois ainda não existem, será reabordada mais tarde.
var todosAnchorsBarroco = conteudoBarroco.getElementsByClassName('item-conteudo');

// Guarda os respectivos elementos HTML sobre o Arcadismo em variáveis.
const quantidadeArcadismo = document.getElementById('categoria-arcadismo');
const conteudoArcadismo = document.getElementById('conteudo-arcadismo');
// Guarda todos os anchors (links) que são filhos do elemento "conteudo-arcadismo".
    // No momento sem valor algum, pois ainda não existem, será reabordada mais tarde.
var todosAnchorsArcadismo = conteudoArcadismo.getElementsByClassName('item-conteudo');

//! IMPORTANTE
    //! Salva todos os objetos (vídeos) presentes em cada categoria no JSON em suas respectivas variáveis.
    //! São arrays.
var videosTrovadorismo = estudos.trovadorismo;

var videosHumanismo = estudos.humanismo;

var videosClassicismo = estudos.classicismo;

var videosQuinhentismo = estudos.quinhentismo;

var videosBarroco = estudos.barroco;

var videosArcadismo = estudos.arcadismo;


//! NÃO SEI O PORQUÊ, MAS EU NÃO CONSEGUI FAZER FUNCIONAR USANDO UM FOR LOOP
    //! Gambiarra a gente aceita, o que não aceitamos é a derrota
    
//TODO: Transferir para um for loop no futuro para tornar o código future-proof.
    // Adiciona um EventListener que ouve clicks na primeira categoria.
todasCategorias[0].addEventListener('click', () => {
    // Se a categoria estiver fechada.
    if (todosConteudos[0].classList.contains('closed')) {
        // Retire a classe "closed" da categoria. Abra-a.
        todosConteudos[0].classList.remove('closed');

        // Adiciona a classe que gira a seta para baixo, apenas estético.
        arrowDropdownImages[0].classList.add('arrow-dropdown-upsidedown');

        // Delay de 310ms (milissegundos).
        setTimeout(() => {
            // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Trovadorismo.
            for (var i = 0; i < todosAnchorsTrovadorismo.length; i++){
                // Remove a classe que deixa-os invisíveis.
                todosAnchorsTrovadorismo[i].classList.remove('item-collapsed');
            }
        }, 310)

    // Caso a categoria estiver aberta
    } else {
        // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Trovadorismo.
        for (var i = 0; i < todosAnchorsTrovadorismo.length; i++){
                // Adiciona a classe que deixa-os invisíveis.
                todosAnchorsTrovadorismo[i].classList.add('item-collapsed');
            }

        // Delay de 285ms (milissegundos)
        setTimeout(() => {
            // Adicione a classe "closed" à categoria. Feche-a.
            todosConteudos[0].classList.add('closed');
        }, 285);

        // Remove a classe e gira a seta de volta para cima, apenas estético.
        arrowDropdownImages[0].classList.remove('arrow-dropdown-upsidedown');
    }
    

});

//TODO: Transferir para um for loop no futuro para tornar o código future-proof.
    // Adiciona um EventListener que ouve clicks na segunda categoria.
todasCategorias[1].addEventListener('click', () => {
    // Se a categoria estiver fechada.
    if (todosConteudos[1].classList.contains('closed')) {
        // Retire a classe "closed" da categoria. Abra-a.
        todosConteudos[1].classList.remove('closed');

        // Adiciona a classe que gira a seta para baixo, apenas estético.
        arrowDropdownImages[1].classList.add('arrow-dropdown-upsidedown');

        // Delay de 310ms (milissegundos).
        setTimeout(() => {
            // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Humanismo.
            for (var i = 0; i < todosAnchorsHumanismo.length; i++) {
                // Remove a classe que deixa-os invisíveis.
                todosAnchorsHumanismo[i].classList.remove('item-collapsed');
            }
        }, 310);

    // Se a categoria estiver aberta.
    } else {
        // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Humanismo.
        for (var i = 0; i < todosAnchorsHumanismo.length; i++){
                // Adiciona a classe que deixa-os invisíveis.
                todosAnchorsHumanismo[i].classList.add('item-collapsed');
        }

        // Delay de 285ms (milissegundos)
        setTimeout(() => {
            // Adicione a classe "closed" à categoria. Feche-a.
            todosConteudos[1].classList.add('closed');
        }, 285);

        // Remove a classe e gira a seta de volta para cima, apenas estético.
        arrowDropdownImages[1].classList.remove('arrow-dropdown-upsidedown');
   }
});

//TODO: Transferir para um for loop no futuro para tornar o código future-proof.
    // Adiciona um EventListener que ouve clicks na terceira categoria.
todasCategorias[2].addEventListener('click', () => {
    // Se a categoria estiver fechada.
    if (todosConteudos[2].classList.contains('closed')) {
        // Retire a classe "closed" da categoria. Abra-a.
        todosConteudos[2].classList.remove('closed');

        // Adiciona a classe que gira a seta para baixo, apenas estético.
        arrowDropdownImages[2].classList.add('arrow-dropdown-upsidedown');

        // Delay de 310ms (milissegundos).
        setTimeout(() => {
            // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Classicismo.
            for (var i = 0; i < todosAnchorsClassicismo.length; i++) {
                // Remove a classe que deixa-os invisíveis.
                todosAnchorsClassicismo[i].classList.remove('item-collapsed');
            }
        }, 310);

    // Se a categoria estiver fechada.
    } else {
        // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Classicismo.
        for (var i = 0; i < todosAnchorsClassicismo.length; i++){
                // Adiciona a classe que deixa-os invisíveis.
                todosAnchorsClassicismo[i].classList.add('item-collapsed');
        }

        // Delay de 285ms (milissegundos)
        setTimeout(() => {
            // Adicione a classe "closed" à categoria. Feche-a.
            todosConteudos[2].classList.add('closed');
        }, 285);

        // Remove a classe e gira a seta de volta para cima, apenas estético.
        arrowDropdownImages[2].classList.remove('arrow-dropdown-upsidedown');
   }
});

//TODO: Transferir para um for loop no futuro para tornar o código future-proof.
    // Adiciona um EventListener que ouve clicks na quarta categoria.
todasCategorias[3].addEventListener('click', () => {
    // Se a categoria estiver fechada.
    if (todosConteudos[3].classList.contains('closed')) {
        // Retire a classe "closed" da categoria. Abra-a.
        todosConteudos[3].classList.remove('closed');

        // Adiciona a classe que gira a seta para baixo, apenas estético.
        arrowDropdownImages[3].classList.add('arrow-dropdown-upsidedown');

        // Delay de 310ms (milissegundos).
        setTimeout(() => {
            // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Quinhentismo.
            for (var i = 0; i < todosAnchorsQuinhentismo.length; i++) {
                // Remove a classe que deixa-os invisíveis.
                todosAnchorsQuinhentismo[i].classList.remove('item-collapsed');
            }
        }, 310);

    // Se a categoria estiver aberta.
    } else {
        // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Quinhentismo.
        for (var i = 0; i < todosAnchorsQuinhentismo.length; i++){
                // Adiciona a classe que deixa-os invisíveis.
                todosAnchorsQuinhentismo[i].classList.add('item-collapsed');
        }

        // Delay de 285ms (milissegundos)
        setTimeout(() => {
            // Adicione a classe "closed" à categoria. Feche-a.
            todosConteudos[3].classList.add('closed');
        }, 285);

        // Remove a classe e gira a seta de volta para cima, apenas estético.
        arrowDropdownImages[3].classList.remove('arrow-dropdown-upsidedown');
   }
});

//TODO: Transferir para um for loop no futuro para tornar o código future-proof.
    // Adiciona um EventListener que ouve clicks na quinta categoria.
todasCategorias[4].addEventListener('click', () => {
    // Se a categoria estiver fechada.
    if (todosConteudos[4].classList.contains('closed')) {
        // Retire a classe "closed" da categoria. Abra-a.
        todosConteudos[4].classList.remove('closed');

        // Adiciona a classe que gira a seta para baixo, apenas estético.
        arrowDropdownImages[4].classList.add('arrow-dropdown-upsidedown');

        // Delay de 310ms (milissegundos).
        setTimeout(() => {
            // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Barroco.
            for (var i = 0; i < todosAnchorsBarroco.length; i++) {
                // Remove a classe que deixa-os invisíveis.
                todosAnchorsBarroco[i].classList.remove('item-collapsed');
            }
        }, 310);

    // Se a categoria estiver aberta.
    } else {
        // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Barroco.
        for (var i = 0; i < todosAnchorsBarroco.length; i++){
            // Adiciona a classe que deixa-os invisíveis.
            todosAnchorsBarroco[i].classList.add('item-collapsed');
        }

        // Delay de 285ms (milissegundos)
        setTimeout(() => {
            // Adicione a classe "closed" à categoria. Feche-a.
            todosConteudos[4].classList.add('closed');
        }, 285);

        // Remove a classe e gira a seta de volta para cima, apenas estético.
        arrowDropdownImages[4].classList.remove('arrow-dropdown-upsidedown');
   }
});

//TODO: Transferir para um for loop no futuro para tornar o código future-proof.
    // Adiciona um EventListener que ouve clicks na sexta categoria.
todasCategorias[5].addEventListener('click', () => {
    // Se a categoria estiver fechada.
    if (todosConteudos[5].classList.contains('closed')) {
        // Retire a classe "closed" da categoria. Abra-a.
        todosConteudos[5].classList.remove('closed');

        // Adiciona a classe que gira a seta para baixo, apenas estético.
        arrowDropdownImages[5].classList.add('arrow-dropdown-upsidedown');

        // Delay de 310ms (milissegundos).
        setTimeout(() => {
            // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Arcadismo.
            for (var i = 0; i < todosAnchorsArcadismo.length; i++) {
                // Remove a classe que deixa-os invisíveis.
                todosAnchorsArcadismo[i].classList.remove('item-collapsed');
            }
        }, 310);

    // Se a categoria estiver aberta.
    } else {
        // Aqui eu consigo usar um for loop por algum motivo.
                // Itera sobre todos os anchors (links) de vídeos sobre o Arcadismo.
        for (var i = 0; i < todosAnchorsArcadismo.length; i++){
            // Adiciona a classe que deixa-os invisíveis.
            todosAnchorsArcadismo[i].classList.add('item-collapsed');
        }

        // Delay de 285ms (milissegundos)
        setTimeout(() => {
            // Adicione a classe "closed" à categoria. Feche-a.
            todosConteudos[5].classList.add('closed');
        }, 285);

        // Remove a classe e gira a seta de volta para cima, apenas estético.
        arrowDropdownImages[5].classList.remove('arrow-dropdown-upsidedown');
   }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Imprime a quantidade de categorias e de conteudos, apenas para debugging.
console.log('todasCategorias length: ' + todasCategorias.length);
console.log('todosConteudos length: ' + todosConteudos.length);


//! Função que recarrega e exibe a quantidade de vídeos presente em cada categoria
function recarregarQuantidadeVideos(){
    quantidadeTrovadorismo.innerHTML = `${videosTrovadorismo.length} vídeos`;
    quantidadeHumanismo.innerHTML = `${videosHumanismo.length} vídeos`;
    quantidadeClassicismo.innerHTML = `${videosClassicismo.length} vídeos`;
    quantidadeQuinhentismo.innerHTML = `${videosQuinhentismo.length} vídeos`;
    quantidadeBarroco.innerHTML = `${videosBarroco.length} vídeos`;
    quantidadeArcadismo.innerHTML = `${videosArcadismo.length} vídeos`;
}

//! Função que lê, cria os elementos HTML e exibe os vídeos em suas determinadas categorias.
function recarregarConteudoCategorias() {
    funcConteudoTrovadorismo();
    funcConteudoHumanismo();
    funcConteudoClassicismo();
    funcConteudoQuinhentismo();
    funcConteudoBarroco();
    funcConteudoArcadismo();
}

//! Função chamada no fim do carregamento da página.
    //! SUPER IMPORTANTE
window.addEventListener('load', function (e) {
    recarregarQuantidadeVideos();
    recarregarConteudoCategorias();
});

//! Função responsável pela criação e exibição dos vídeos sobre Trovadorismo na página.
function funcConteudoTrovadorismo() {
    // Itera sobre cada objeto (vídeo) na váriavel do Trovadorismo
    videosTrovadorismo.forEach(function (e) {
        // Cria um anchor no DOM
        var anchorStruct = document.createElement('a');
        // Define suas classes
        anchorStruct.setAttribute('class', 'item-conteudo item-collapsed');
        // Define o atributo href para o valor da chave 'url' do objeto atual.
        anchorStruct.setAttribute('href', e.url);
        // Define o atributo target para abrir o vídeo numa nova página caso clicado.
        anchorStruct.setAttribute('target', '_blank');
        // Define o anchor como filho do elemento 'conteudoTrovadorismo'
        conteudoTrovadorismo.appendChild(anchorStruct);

        // Cria uma img no DOM
        var trovadorismoThumb = document.createElement('img');
        // Define o atributo src para o valor da chave 'thumbnail' do objeto atual.
        trovadorismoThumb.setAttribute('src', e.thumbnail);
        // Define sua classe
        trovadorismoThumb.setAttribute('class', 'thumb-video');
        // Define a img como filha do elemento 'anchor'
        anchorStruct.appendChild(trovadorismoThumb);

        // Cria um h3 no DOM
        var trovadorismoTitle = document.createElement('h3');
        // Define sua classe
        trovadorismoTitle.setAttribute('class', 'title-video');
        // Define seu innerHTML (conteúdo) para o valor da chave 'título' do objeto atual.
        trovadorismoTitle.innerHTML = e.titulo;
        // Define o h3 como filho do elemento 'anchor'
        anchorStruct.appendChild(trovadorismoTitle);
    });

    //! Redefine o valor da variável criada no começo, adicionando todos os elementos com a classe -
        //! 'item-conteudo' que são FILHOS do elemento conteudoTrovadorismo
        //! DEIXA ESSA BAGAÇA AQUI, É IMPORTANTE!
            //* falei que a gente ia reabordar essa variável depois.
    todosAnchorsTrovadorismo = conteudoTrovadorismo.getElementsByClassName('item-conteudo');
}

//! Função responsável pela criação e exibição dos vídeos sobre Humanismo na página.
function funcConteudoHumanismo() {
    // Itera sobre cada objeto (vídeo) na váriavel do Humanismo
    videosHumanismo.forEach(function (e) {
        // Cria um anchor no DOM
        var anchorStruct = document.createElement('a');
        // Define suas classes
        anchorStruct.setAttribute('class', 'item-conteudo item-collapsed');
        // Define o atributo href para o valor da chave 'url' do objeto atual.
        anchorStruct.setAttribute('href', e.url);
        // Define o atributo target para abrir o vídeo numa nova página caso clicado.
        anchorStruct.setAttribute('target', '_blank');
        // Define o anchor como filho do elemento 'conteudoHumanismo'
        conteudoHumanismo.appendChild(anchorStruct);

        // Cria uma img no DOM
        var humanismoThumb = document.createElement('img');
        // Define o atributo src para o valor da chave 'thumbnail' do objeto atual.
        humanismoThumb.setAttribute('src', e.thumbnail);
        // Define sua classe
        humanismoThumb.setAttribute('class', 'thumb-video');
        // Define a img como filha do elemento 'anchor'
        anchorStruct.appendChild(humanismoThumb);

        // Cria um h3 no DOM
        var humanismoTitle = document.createElement('h3');
        // Define sua classe
        humanismoTitle.setAttribute('class', 'title-video');
        // Define seu innerHTML (conteúdo) para o valor da chave 'título' do objeto atual.
        humanismoTitle.innerHTML = e.titulo;
        // Define o h3 como filho do elemento 'anchor'
        anchorStruct.appendChild(humanismoTitle);
    });

    //! Redefine o valor da variável criada no começo, adicionando todos os elementos com a classe -
        //! 'item-conteudo' que são FILHOS do elemento conteudoHumanismo
        //! DEIXA ESSA BAGAÇA AQUI, É IMPORTANTE!
            //* falei que a gente ia reabordar essa variável depois.
    todosAnchorsHumanismo = conteudoHumanismo.getElementsByClassName('item-conteudo');
}

//! Função responsável pela criação e exibição dos vídeos sobre Classicismo na página.
function funcConteudoClassicismo() {
    // Itera sobre cada objeto (vídeo) na váriavel do Classicismo
    videosClassicismo.forEach(function (e) {
        // Cria um anchor no DOM
        var anchorStruct = document.createElement('a');
        // Define sua classe
        anchorStruct.setAttribute('class', 'item-conteudo item-collapsed');
        // Define o atributo href para o valor da chave 'url' do objeto atual.
        anchorStruct.setAttribute('href', e.url);
        // Define o atributo target para abrir o vídeo numa nova página caso clicado.
        anchorStruct.setAttribute('target', '_blank');
        // Define o anchor como filho do elemento 'conteudoClassicismo'
        conteudoClassicismo.appendChild(anchorStruct);

        // Cria uma img no DOM
        var classicismoThumb = document.createElement('img');
        // Define o atributo src para o valor da chave 'thumbnail' do objeto atual.
        classicismoThumb.setAttribute('src', e.thumbnail);
        // Define sua classe
        classicismoThumb.setAttribute('class', 'thumb-video');
        // Define a img como filha do elemento 'anchor'
        anchorStruct.appendChild(classicismoThumb);

        // Cria um h3 no DOM
        var classicismoTitle = document.createElement('h3');
        // Define sua classe
        classicismoTitle.setAttribute('class', 'title-video');
        // Define seu innerHTML (conteúdo) para o valor da chave 'título' do objeto atual.
        classicismoTitle.innerHTML = e.titulo;
        // Define o h3 como filho do elemento 'anchor'
        anchorStruct.appendChild(classicismoTitle);
    });

    //! Redefine o valor da variável criada no começo, adicionando todos os elementos com a classe -
        //! 'item-conteudo' que são FILHOS do elemento conteudoClassicismo
        //! DEIXA ESSA BAGAÇA AQUI, É IMPORTANTE!
            //* falei que a gente ia reabordar essa variável depois.
    todosAnchorsClassicismo = conteudoClassicismo.getElementsByClassName('item-conteudo');
}

//! Função responsável pela criação e exibição dos vídeos sobre Quinhentismo na página.
function funcConteudoQuinhentismo() {
    // Itera sobre cada objeto (vídeo) na váriavel do Quinhentismo
    videosQuinhentismo.forEach(function (e) {
        // Cria um anchor no DOM
        var anchorStruct = document.createElement('a');
        // Define sua classe
        anchorStruct.setAttribute('class', 'item-conteudo item-collapsed');
        // Define o atributo href para o valor da chave 'url' do objeto atual.
        anchorStruct.setAttribute('href', e.url);
        // Define o atributo target para abrir o vídeo numa nova página caso clicado.
        anchorStruct.setAttribute('target', '_blank');
        // Define o anchor como filho do elemento 'conteudoQuinhentismo'
        conteudoQuinhentismo.appendChild(anchorStruct);

        // Cria uma img no DOM
        var quinhentismoThumb = document.createElement('img');
        // Define o atributo src para o valor da chave 'thumbnail' do objeto atual.
        quinhentismoThumb.setAttribute('src', e.thumbnail);
        // Define sua classe
        quinhentismoThumb.setAttribute('class', 'thumb-video');
        // Define a img como filha do elemento 'anchor'
        anchorStruct.appendChild(quinhentismoThumb);

        // Cria um h3 no DOM
        var quinhentismoTitle = document.createElement('h3');
        // Define sua classe
        quinhentismoTitle.setAttribute('class', 'title-video');
        // Define seu innerHTML (conteúdo) para o valor da chave 'título' do objeto atual.
        quinhentismoTitle.innerHTML = e.titulo;
        // Define o h3 como filho do elemento 'anchor'
        anchorStruct.appendChild(quinhentismoTitle);
    });

    //! Redefine o valor da variável criada no começo, adicionando todos os elementos com a classe -
        //! 'item-conteudo' que são FILHOS do elemento conteudoQuinhentismo
        //! DEIXA ESSA BAGAÇA AQUI, É IMPORTANTE!
            //* falei que a gente ia reabordar essa variável depois.
    todosAnchorsQuinhentismo = conteudoQuinhentismo.getElementsByClassName('item-conteudo');
}

//! Função responsável pela criação e exibição dos vídeos sobre Barroco na página.
function funcConteudoBarroco() {
    // Itera sobre cada objeto (vídeo) na váriavel do Barroco
    videosBarroco.forEach(function (e) {
        // Cria um anchor no DOM
        var anchorStruct = document.createElement('a');
        // Define suas classes
        anchorStruct.setAttribute('class', 'item-conteudo item-collapsed');
        // Define o atributo href para o valor da chave 'url' do objeto atual.
        anchorStruct.setAttribute('href', e.url);
        // Define o atributo target para abrir o vídeo numa nova página caso clicado.
        anchorStruct.setAttribute('target', '_blank');
        // Define o anchor como filho do elemento 'conteudoBarroco'
        conteudoBarroco.appendChild(anchorStruct);

        // Cria uma img no DOM
        var barrocoThumb = document.createElement('img');
        // Define o atributo src para o valor da chave 'thumbnail' do objeto atual.
        barrocoThumb.setAttribute('src', e.thumbnail);
        // Define sua classe
        barrocoThumb.setAttribute('class', 'thumb-video');
        // Define a img como filha do elemento 'anchor'
        anchorStruct.appendChild(barrocoThumb);

        // Cria um h3 no DOM
        var barrocoTitle = document.createElement('h3');
        // Define sua classe
        barrocoTitle.setAttribute('class', 'title-video');
        // Define seu innerHTML (conteúdo) para o valor da chave 'título' do objeto atual.
        barrocoTitle.innerHTML = e.titulo;
        // Define o h3 como filho do elemento 'anchor'
        anchorStruct.appendChild(barrocoTitle);
    });

    //! Redefine o valor da variável criada no começo, adicionando todos os elementos com a classe -
        //! 'item-conteudo' que são FILHOS do elemento conteudoBarroco
        //! DEIXA ESSA BAGAÇA AQUI, É IMPORTANTE!
            //* falei que a gente ia reabordar essa variável depois.
    todosAnchorsBarroco = conteudoBarroco.getElementsByClassName('item-conteudo');
}

//! Função responsável pela criação e exibição dos vídeos sobre Arcadismo na página.
function funcConteudoArcadismo() {
    // Itera sobre cada objeto (vídeo) na váriavel do Arcadismo
    videosArcadismo.forEach(function (e) {
        // Cria um anchor no DOM
        var anchorStruct = document.createElement('a');
        // Define suas classes
        anchorStruct.setAttribute('class', 'item-conteudo item-collapsed');
        // Define o atributo href para o valor da chave 'url' do objeto atual.
        anchorStruct.setAttribute('href', e.url);
        // Define o atributo target para abrir o vídeo numa nova página caso clicado.
        anchorStruct.setAttribute('target', '_blank');
        // Define o anchor como filho do elemento 'conteudoArcadismo'
        conteudoArcadismo.appendChild(anchorStruct);

        // Cria uma img no DOM
        var arcadismoThumb = document.createElement('img');
        // Define o atributo src para o valor da chave 'thumbnail' do objeto atual.
        arcadismoThumb.setAttribute('src', e.thumbnail);
        // Define sua classe
        arcadismoThumb.setAttribute('class', 'thumb-video');
        // Define a img como filha do elemento 'anchor'
        anchorStruct.appendChild(arcadismoThumb);

        // Cria um h3 no DOM
        var arcadismoTitle = document.createElement('h3');
        // Define suas classes
        arcadismoTitle.setAttribute('class', 'title-video');
        // Define seu innerHTML (conteúdo) para o valor da chave 'título' do objeto atual.
        arcadismoTitle.innerHTML = e.titulo;
        // Define o h3 como filho do elemento 'anchor'
        anchorStruct.appendChild(arcadismoTitle);
    });

    //! Redefine o valor da variável criada no começo, adicionando todos os elementos com a classe -
        //! 'item-conteudo' que são FILHOS do elemento conteudoArcadismo
        //! DEIXA ESSA BAGAÇA AQUI, É IMPORTANTE!
            //* falei que a gente ia reabordar essa variável depois.
    todosAnchorsArcadismo = conteudoArcadismo.getElementsByClassName('item-conteudo');
}