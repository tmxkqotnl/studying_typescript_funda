interface todo {id:number;title:string;done:boolean;};

let todoItems:Array<todo>;

// api
function fetchTodoItems():Array<todo>{
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos():Array<todo>{
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo:todo):void {
  todoItems.push(todo);
}

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index:number, todo:todo):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo():todo {
  return todoItems[0];
}

function showCompleted():Array<todo>{
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems():void {
  let newTodo = {
    id:todoItems.length,
    title:"새거",
    done:false
  };
  let newTodo2 = {
    id:todoItems.length+1,
    title:"새거2",
    done:false
  };
  addTodo(newTodo);
  addTodo(newTodo2);
}

// NOTE: 유틸 함수
function log():void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();