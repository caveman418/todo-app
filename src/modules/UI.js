import * as dom from './dom';

const createHeader = () => {
    const header = dom.createDiv('header');

    const menu = dom.createImg('menu.svg','menu button','svg menu-button');

    const searchBar = dom.createDiv('search-bar');
    const search = dom.createImg('search.svg','search-button','svg search-button');
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('maxlength','100');
    searchBar.append(search,input);

    const add = dom.createImg('add.svg','add project','svg add');
    const bell = dom.createImg('bell.svg','notifications','svg notification');
    const profilePic = dom.createImg('profile-pic.png','profile picture','img profile-pic');

    header.append(menu,searchBar,add,bell,profilePic);

    dom.body.append(header);
}

const createSidebar = () => {
    const sidebar = dom.createDiv('sidebar');

    const title = dom.createDiv('title');
    title.textContent = 'Projects';

    const proj1 = dom.createDiv('project active','project-1');
    proj1.textContent = 'project 1';

    sidebar.append(title,proj1);

    dom.body.append(sidebar);
}

const createTask = (module) => {
    const circle = dom.createImg('circle.svg','checkbox','svg check-box');
    const title = dom.createDiv('title');
    title.textContent = 'Laundry';
    const date = dom.createDiv('due-date');
    date.textContent = '8/9/2022 5:00PM';

    module.append(circle,title,date);
}

const createBody = () => {
    const main = dom.createDiv('main');

    const container = dom.createDiv('container');

    const module1 = dom.createDiv('module','module-1');

    createTask(module1);

    container.append(module1);

    main.append(container);

    dom.body.append(main);
}