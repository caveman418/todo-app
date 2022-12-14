import * as dom from './dom';
import img1 from '../../src/images/add.svg';
import img2 from '../../src/images/bell.svg';
import img3 from '../../src/images/circle.svg'
import img4 from '../../src/images/menu.svg';
import img5 from '../../src/images/profile-pic.png';
import img6 from '../../src/images/search.svg';

let projectList = [];

const updateStorage = () => {
    localStorage.setItem('projectObject',JSON.stringify(projectList));
}

const Task = (task,inputDate) => { //Task factory
    return {task,inputDate};
}

const Project = (name) => { //Project factory
    let tasks = [];

    const add = (taskObj) => {
        tasks.push(taskObj);
    }

    const remove = (taskObj) => {
        const index = tasks.indexOf(taskObj);
        if (index > -1) { //if the input parameter exists
            tasks.splice(index,1);
        }
    }

    return {name,tasks,add,remove};
}

const createHeader = () => {
    const header = dom.createDiv('header');

    const menu = dom.createImg(img4,'menu button','svg menu-button');

    const searchBar = dom.createDiv('search-bar');
    const search = dom.createImg(img6,'search-button','svg search-button');
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('maxlength','100');
    searchBar.append(search,input);

    const add = dom.createImg(img1,'add project','svg add');
    const bell = dom.createImg(img2,'notifications','svg notification');
    const profilePic = dom.createImg(img5,'profile picture','img profile-pic');

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
    submitButton.addEventListener('mousedown',() => {
        const activeProject = document.querySelector('.active');
        let newTask = Task(task[1].value,`${date[1].value}   ${time[1].value}`);
        projectList[Number(activeProject.id)].add(newTask);
        task[1].value = '';
        date[1].value = '';
        time[1].value = '';
        popup.style.display = 'none';
        updateStorage();
        createBody(activeProject.id);
    });

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
    submitButton.textContent = 'Add project';
    submitButton.addEventListener('mousedown',()=>{
        if (name[1].value==='') return;
        projectList.push(Project(`${name[1].value}`));
        name[1].value = '';
        popup.style.display = 'none';
        updateStorage();
        createSidebar();
        createBody(projectList.length-1);
    });

    const exitButton = document.createElement('button');
    exitButton.setAttribute('type','button');
    exitButton.classList.add('exit');
    exitButton.textContent = 'Exit';
    exitButton.addEventListener('mousedown',() => {
        name[1].value = '';
        popup.style.display = 'none';
    })

    form.append(h,...name,submitButton,exitButton);

    popup.append(form);

    dom.body.append(popup);
}

const createSidebar = () => {
    const currentSidebar = document.querySelector('.sidebar'); //will be null on init

    if (currentSidebar) {currentSidebar.remove()};

    const sidebar = dom.createDiv('sidebar');

    const title = dom.createDiv('title');
    title.textContent = 'Projects';

    const add = dom.createImg(img1,'add project','svg add');
    add.addEventListener('mousedown', () => {
        document.querySelector('.form-popup.proj').style.display = 'block';
    });

    title.append(add);

    sidebar.append(title);

    sidebar.append(...fillProjects());

    dom.body.append(sidebar);
}

const createBody = (projectID) => {
    const currentMain = document.querySelector('.main'); //will be null on init

    if (currentMain) {currentMain.remove()};

    const main = dom.createDiv('main');

    const button = document.createElement('button');
    button.id = 'add-task';
    button.setAttribute('type','button');
    button.textContent = 'Add task';
    button.addEventListener('mousedown',() => {
        document.querySelector('.task').style.display = 'block';
    });

    const container = dom.createDiv('container');

    container.append(...fillTasks(projectID));

    main.append(button,container);

    dom.body.append(main);
}

function fillProjects() {
    let projectNodeList = [];

    for (let i = 0; i<projectList.length; i++) {
        const project = dom.createDiv('project',`${i}`);
        project.textContent = projectList[i].name;
        if (i===projectList.length-1) {project.classList.add('active');}
        project.addEventListener('mousedown',() => {
            document.querySelectorAll('.sidebar > div').forEach((div)=>div.classList.remove('active'));
            project.classList.add('active');
            createBody(project.id);
        });
        projectNodeList.push(project);
    }

    return projectNodeList;
}

function fillTasks(projectID) {
	let taskNodeList = [];

    let activeProject = projectList[projectID];
	let activeTasks = activeProject.tasks; //returns matrix filled with task objects
	
	for (let i=0; i<activeTasks.length; i++) {
		const taskName = activeTasks[i].task;
		const taskDate = activeTasks[i].inputDate;
		
		const module = dom.createDiv('module',`module-${i}`);
        module.addEventListener('mousedown',(e) => {
            activeProject.remove(activeTasks[i]);
            updateStorage();
            module.remove();
        });
		const circle = dom.createImg(img3,'checkbox','svg check-box');
		const title = dom.createDiv('title');
		title.textContent = taskName;
		const date = dom.createDiv('due-date');
		date.textContent = taskDate;
		module.append(circle,title,date);
		taskNodeList.push(module);
	}
	
	return taskNodeList;
}

const init = () => {
    let storage = localStorage.getItem('projectObject');
    if (storage) {
        projectList = JSON.parse(storage);
        for (let project of projectList) { //rebuild methods in each project object that is in localStorage
            project.add = (taskObj) => {
                project.tasks.push(taskObj);
            }
            project.remove = (taskObj) => {
                const index = project.tasks.indexOf(taskObj);
                if (index > -1) { //if the input parameter exists
                    project.tasks.splice(index,1);
                }
            }
        }
    }
    createProjPopup();
    createTaskPopup();
    createHeader();
    createSidebar();
    createBody(projectList.length - 1); //renders newest project in projectList
}


export { init };