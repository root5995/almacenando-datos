import {addTask} from './components/addTask.js'
import { displayTasks } from './components/readTasks.js'


//this variable selecets the fomr button
const btn = document.querySelector('[data-form-btn]');

//the captures the click event on the button and execuetes the addTask function
btn.addEventListener('click', addTask);

// calls the displayTasks function
displayTasks()
