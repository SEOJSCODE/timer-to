import {format, formatDuration} from "date-fns";
import {ru} from "date-fns/locale";

let formDate = document.querySelector('.date-form')
formDate.addEventListener('submit', showRemained)
let remainedBlock = document.querySelector('.remained')
let remainedTime = document.querySelector('.remained-time')
let remainedTitle = document.querySelector('.remained-title')
export function showRemained (event) {
    event.preventDefault()
    let inputValue = document.querySelector('#add-date')
    let inputData = inputValue.value
    const inputDate = Date.parse(inputData)
    const formatDate = format(inputDate, 'MMM dd YYY 00:00:00')
    const startDate = Date.parse(formatDate)
    const nowDate = new Date()
    let dif = startDate - nowDate
    const difYear = Math.floor(dif / 1000 / 60 / 60 / 24 / 365)
    const difDays = Math.floor(dif / 1000 / 60 / 60 / 24 ) % 365
    const difHours = Math.floor(dif / 1000 / 60 / 60) % 24

    const duration = formatDuration({
        years: difYear,
        days: difDays,
        hours: difHours
    },
    {
        format: ['years', 'days', 'hours'],
        locale: ru
    })
    remainedBlock.classList.add('show-remained')
    if(inputDate < nowDate) {
        remainedTitle.classList.add('remained')
        remainedTime.textContent = `Эта дата уже прошла!`
        console.log('Эта дата уже прошла!')
    }
    else {
        remainedTitle.classList.remove('remained')
        remainedTime.textContent = duration
    }


}