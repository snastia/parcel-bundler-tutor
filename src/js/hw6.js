import { infoArr } from "./index.js";
import { alert } from '@pnotify/core';
import isEmail from 'validator/es/lib/isEmail';
import '@pnotify/core/dist/BrightTheme.css';

const elements = {
    formEl: document.querySelector(".form"),
    emailEl: document.querySelector(".email"),
    nameEl: document.querySelector(".name"),
    messageEl: document.querySelector(".message"),
}

elements.formEl.addEventListener("submit", onFormSubmit)
function onFormSubmit(event) {
    event.preventDefault()

    infoArr.name = elements.nameEl.value
    infoArr.email = elements.emailEl.value
    infoArr.message = elements.messageEl.value

    if (!isEmail(elements.emailEl.value)) {
        alert({
            text: "неправильно",
            type: 'info'
          });
    } 
}