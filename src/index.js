document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
      
  form.addEventListener('submit', (e) => {
    
    e.preventDefault()

   handleToDo(e.target.new_task_description.value)

   form.reset()
  })

})

function handleToDo(todo) {
   

    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'X'
    li.textContent = todo
    li.appendChild(btn)
    document.getElementById("tasks").appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
