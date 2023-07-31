const textareaFrom = document.querySelector('#textareaFrom')
const textareaTo = document.querySelector('#textareaTo')
const btnAlternarIdiomas = document.querySelector('.btn-alternar-idiomas')
const btnTraduzir = document.querySelector('.btn-traduzir')
const selects = document.querySelectorAll('select')
const countries = {
    'en-GB': 'Inglês',
    'es-ES': 'Espanhol',
    'it-IT': 'Italiano',
    'ja-JP': 'Japonês',
    'pt-BR': 'Português',
};

selects.forEach((tag) => {
    for(let country in countries){
        let selected
        if(tag.className.includes('selectFrom') && country == 'pt-BR'){
            selected = 'selected'
        } else if (tag.className.includes('selectTo') && country == 'en-GB'){
            selected = 'selected'
        }
        const option = `<option value="${country}" ${selected}>${countries[country]}</option>`
        tag.insertAdjacentHTML('beforeend', option);
    };
});

btnAlternarIdiomas.addEventListener('click', () => {
    btnAlternarIdiomas.classList.add('ativar-animacao')
    setTimeout(() => {
        btnAlternarIdiomas.classList.remove('ativar-animacao')
    }, 1000)
    
    const selectFrom = document.querySelector('.selectFrom')
    const selectTo = document.querySelector('.selectTo')

    let tempValueFrom = selectFrom.value //ex: pt-br
    let tempValueTo = selectTo.value // ex: en-gb
    selectFrom.value = tempValueTo // ex: en-gb
    selectTo.value = tempValueFrom // ex: pt-br
    console.log(iconeAnimar)
})

btnTraduzir.addEventListener('click', () => {
    if(textareaFrom.value){
        carregarTraducao()
    } else{
        textareaTo.value = 'insira ao menos uma palavra antes de clicar no TRADUZIR';
    };
});

async function carregarTraducao(){
    const resposta = await fetch(`https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`)
    const json = await resposta.json()
    if(json.responseData){
        textareaTo.value = json.responseData.translatedText
    }
}