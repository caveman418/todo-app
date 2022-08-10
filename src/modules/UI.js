import * as dom from './dom';

let projectList = [];

const Task = (task,inputDate) => { //Task factory
    return {task,inputDate};
}

const Project = (name) => { //Project factory
    let tasks = [];
    const add = (taskObj) => {
        tasks.push(taskObj);
    }
    const remove = (taskObj) => {
        const index = task.indexOf(taskObj);
        if (index > -1) { //if the input parameter exists
            tasks.splice(index,1);
        }
    }
    return {name,add,remove};
}

let proj1 = Project('proj1'); //for testing purposes
let proj2 = Project('proj2'); //for testing purposes
projectList.push(proj1,proj2); //for testing purposes

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

const createTaskPopup = () => {
    const popup = dom.createDiv('form-popup task');

    const form = document.createElement('form');
    form.classList.add('form-container');
    form.setAttribute('action','');

    const h = document.createElement('h1');
    h.textContent = 'New Task';

    const task = dom.createInput('title','text','Task');
    const date = dom.createInput('date','date','Due date');
    const time = dom.createInput('time','time','Time');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.classList.add('submit');
    submitButton.textContent = 'Add task';

    const exitButton = document.createElement('button');
    exitButton.setAttribute('type','button');
    exitButton.classList.add('exit');
    exitButton.textContent = 'Exit';

    form.append(h,...task,...date,...time,submitButton,exitButton);

    popup.append(form);

    dom.body.append(popup);
}

const createProjPopup = () => {
    const popup = dom.createDiv('form-popup proj');

    const form = document.createElement('form');
    form.classList.add('form-container');
    form.setAttribute('action','');

    const h = document.createElement('h1');
    h.textContent = 'New Project';

    const name = dom.createInput('name','text','Project title');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.classList.add('submit');
    submitButton.textContent = 'Add task';

    const exitButton = document.createElement('button');
    exitButton.setAttribute('type','button');
    exitButton.classList.add('exit');
    exitButton.textContent = 'Exit';

    form.append(h,...name,submitButton,exitButton);

    popup.append(form);

    dom.body.append(popup);
}

const createSidebar = () => {
    const sidebar = dom.createDiv('sidebar');

    const title = dom.createDiv('title');
    title.textContent = 'Projects';

    const add = dom.createImg('add.svg','add project','svg add');
    add.addEventListener('mousedown', () => {
        document.querySelector('.form-popup.proj').style.display = 'block';
    });

    title.append(add);

    sidebar.append(title);

    sidebar.append(...fillProjects());

    dom.body.append(sidebar);
}

const createTask = (module,task,inputDate) => { //maybe not needed
    const circle = dom.createImg('circle.svg','checkbox','svg check-box');
    const title = dom.createDiv('title');
    title.textContent = task;
    const date = dom.createDiv('due-date');
    date.textContent = inputDate;

    module.append(circle,title,date);
}

const createBody = () => {
    const main = dom.createDiv('main');

    const button = document.createElement('button');
    button.id = 'add-task';
    button.setAttribute('type','button');
    button.textContent = 'Add task';
    button.addEventListener('mousedown',() => {
        document.querySelector('.task').style.display = 'block';
    });

    const container = dom.createDiv('container');

    // for (let i = 0; i<e.target)

    // const module1 = dom.createDiv('module','module-1');

    // createTask(module1,'Laundry','8/10/2022 5:00PM');

    // container.append(module1);

    main.append(button,container);

    dom.body.append(main);
}

function fillProjects() {
    let projectNodeList = [];

    for (let i = 0; i<projectList.length; i++) {
        const project = dom.createDiv('project',`project-${i}`);
        project.textContent = projectList[i].name
        projectNodeList.push(project);
    }

    return projectNodeList;
}

function fillTasks() {

}

export {createBody,createSidebar,createHeader,createProjPopup,createTaskPopup};