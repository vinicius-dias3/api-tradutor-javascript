const textareaFrom = document.querySelector('#textareaFrom')
const textareaTo = document.querySelector('#textareaTo')
const btnTranslate = document.querySelector('#btnTranslate')
const selects = document.querySelectorAll('select')

const countries = {
    'en-GB': 'Inglês',
    'es-ES': 'Espanhol',
    'it-IT': 'Italiano',
    'ja-JP': 'Japonês',
    'pt-BR': 'Português Brasil',
};

selects.forEach((tag) => {
    for(let country in countries){
        let selected
        if(tag.className.includes('selectFrom') && country == 'pt-BR'){
            selected = 'selected'
        } else if (tag.className.includes('selectTo') && country == 'en-GB'){
            selected = 'selected'
        }

        const option = `<option value=" ${country}" ${selected}>${countries[country]}</option>`

        tag.insertAdjacentHTML('beforeend', option);
    };
});

async function carregarTraducao(){
    const url = `https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`
    const resposta = await fetch(url)
    const json = await resposta.json()
    console.log(json)
}

carregarTraducao()


// const arraySelects = Array.from(selects) não sei se vai ser  necessário
// console.log(arraySelects)
