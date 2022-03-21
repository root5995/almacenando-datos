import { createTask } from "./addTask.js";
import { uniqueDates, orderDates} from "../services/date.js";
import dateElement from "./dateElement.js";


export const displayTasks = () => {
    //selects the task lists
    const list = document.querySelector("[data-list]")
    //converts and pulls the saved data from the local storage or initializing the tasklist variable as an empy array
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const dates = uniqueDates(tasksList)
    orderDates(dates)
    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY")
        list.appendChild(dateElement(date))
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY")
            const diff = dateMoment.diff(taskDate)
            if (diff == 0){
                list.appendChild(createTask(task))

            }
        });
    })



}