const app = document.querySelector('#app')
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/'

let cardTaks = ''
let taskStatus = ''
let statusClass = ''

const getAllData = async () => {
    const api = await fetch(apiUrl)
    const data = await api.json()  
    data.map((i) => {
        if (i.completed == true){
            taskStatus = 'Completada'
            statusClass = 'completed'
        }else{
            taskStatus = 'Sin completar'
            statusClass = 'incompleted'
        }

        cardTaks += `
        <div class="task">
            <div class="task__body">
                <div class="task__id">${i.id}</div>
                <p class="task__content">${i.title}</p>
            </div>
            <div class="task__footer">
                <p class="task__status ${statusClass}">${taskStatus}</p>
            </div>
        </div>
        `        
    })
    app.innerHTML = cardTaks
}

// const getDataById = async (id) => {
//     const api = await fetch(apiUrl + id)
//     const data = await api.json()  
//     console.log(data.title)
// }

window.addEventListener('load', () => {
    getAllData()
})

