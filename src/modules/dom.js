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

export { body, createDiv, createImg };