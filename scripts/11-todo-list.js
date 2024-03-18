const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'}, {
  name: 'wash dishes',
  dueDate: '2022-12-28'}];

//renderTodoList();

function renderTodoList() {


  let todoListHTML = '';

  for (let i=0; i<todoList.length; i++) {
    //const name = todoList[i].name;
    //const dueDate = todoList[i].dueDate;
    const {name, dueDate} = todoList[i];
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
      `;

    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML =     
  todoListHTML;
}


function addTodo() {
  const name = document.querySelector('.js-name-input').value;
  
  const dueDate = document.querySelector('.js-due-date-input').value;
  //console.log(name);
  todoList.push({//name: name, dueDate: dueDate
                name,dueDate});
  //console.log(todoList);
  document.querySelector('.js-name-input').value = '';
  renderTodoList();
}