const date = document.getElementById('date')
const month = document.getElementById('month')
const year = document.getElementById('year')
const getDay = document.getElementById('getDay')
const result = document.getElementById('result')



getDay.addEventListener('click', ()=>{
    let newDate = new Date(` ${date.value} ${month.value} ${year.value}`)
    let day = newDate.toString()
    day = day.slice(0,3)
    result.innerText = day
})
    