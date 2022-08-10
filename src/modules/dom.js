const body = document.querySelector('body');

const createDiv = (classes,id) => {
    const div = document.createElement('div');
    if (id) div.id = id;

    const classArray = classes.split(' ');
    for (const val of classArray) {
        div.classList.add(val);
    }

    return div;
}

const createImg = (src,alt,classes) => {
    const img = document.createElement('img');

    const classArray = classes.split(' ');
    for (const val of classArray) {
        img.classList.add(val);
    }
    
    img.setAttribute('alt',alt);
    img.setAttribute('src',`../src/images/${src}`);

    return img;
}

const createInput = (id,type,inner) => {
    const label = document.createElement('label');
    label.setAttribute('for',id);

    const input = document.createElement('input');
    input.setAttribute('type',type);
    input.setAttribute('name',id);
    input.setAttribute('id',id);
    input.setAttribute('required','');

    return [label,input];
}

export { body, createDiv, createImg, createInput };