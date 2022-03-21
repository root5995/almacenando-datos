import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import {displayTasks} from './readTasks.js';

//creating the addTask function
export const addTask = (evento) => {
      // prevents the button from updating the page
      evento.preventDefault();

      // selects the list of tasks
      const list = document.querySelector('[data-list]');
      // selects the text input for the tasks
      const input = document.querySelector('[data-form-input]');
      // selects the date input for the tasks
      const calendar = document.querySelector("[data-form-date]");

      // text value from the text field
      const value = input.value;
      // date value from the calendar field
      const date = calendar.value;
      // formating the date with the moment API
      const dateFormat = moment(date).format("DD/MM/YYYY")

      // this condition prevents the code from working if any of the fields are empy
      if(value == "" || date == "") {
            return
      }

      // cleaning the inputs after capturing the values

      input.value = '';
      calendar.value = '';
      const complete = false;


      //creating an object to save the data
      const taskObj = {
            value,
            dateFormat,
            complete,
            id: uuid.v4()
      };

      // initializing the list eith an empy value (prevets tasks duplication)
      list.innerHTML = "";

      //converts and pulls the saved data from the local storage or initializing the tasklist variable as an empy array
      const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
      // pushes the task data into the array
      taskList.push(taskObj)
      //saves the task date in the localstorage as a string
      localStorage.setItem("tasks", JSON.stringify(taskList))
      // executes the displayTasks function
      displayTasks()
}
  
export const createTask = ({value, dateFormat, complete, id}) => {
      const task = document.createElement('li');
            task.classList.add('card');
            
      const taskContent = document.createElement('div');

      const check = checkComplete(id);

      console.log(complete)
      if(complete) {
            check.classList.toggle('fas');
            check.classList.toggle('completeIcon');
            check.classList.toggle('far');
      }
      const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerText = value;
            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);
      // const dateElement = document.createElement('span');
      //       dateElement.innerText = dateFormat;
            task.appendChild(taskContent);
            // task.appendChild(dateElement);
            task.appendChild(deleteIcon(id));
      return task;
};
