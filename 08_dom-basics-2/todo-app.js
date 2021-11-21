(function() {

  const whoUser = document.getElementById('who').value;

  function performOnSavedItems(action) {
    let savedItems = JSON.parse(window.localStorage.getItem(whoUser));
    savedItems = action(savedItems);
    window.localStorage.setItem(whoUser, JSON.stringify(savedItems));
  }

  // создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.textContent = title;
    return appTitle;
  }

  // создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    input.id = "check-input";
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.id = "button-addition";
    button.disabled = true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    input.addEventListener('input', function (e) {
        e.preventDefault();
        if (input.value.length > 0) {
            button.disabled = false;
        } else if (input.value.length === 0) {
            button.disabled = true;
        }
    });

    return {
      form,
      input,
      button,
    };
  }

  function addUtilityListeners(todoItem) {
    todoItem.doneButton.addEventListener('click', function () {
      todoItem.item.classList.toggle('list-group-item-success');
      const idItem = parseInt(todoItem.item.id);
      performOnSavedItems((savedItems) => {
        return savedItems.map(savedItem => {
          if (parseInt(savedItem['id']) === idItem) {
            savedItem['done'] = !savedItem['done'];
          }
          return savedItem;
        });
      });
    });
    todoItem.deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        const idItem = parseInt(todoItem.item.id);
        todoItem.item.remove();
        performOnSavedItems((savedItems) => {
          return savedItems.filter(
            savedItem => parseInt(savedItem['id']) !== idItem
          );
        });
      }
    });
  }

  // создаем и возварщаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // создаем и возварщаем элемент
  function createTodoItem(name, id) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент div, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;
    item.name = name;
    if (id) item.id = id;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function createTodoApp(container, title = "Список дел", todoItems='') {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    if (todoItems !== '') {
      for (let todoItem of todoItems) {
        const createdItem = createTodoItem(todoItem['name'], todoItem['id'])
        if (todoItem['done']) {
          createdItem.item.classList.toggle('list-group-item-success');
        }
        addUtilityListeners(createdItem);
        todoList.append(createdItem.item);
      }
    }
        todoItemForm.form.addEventListener('submit', function (e) {
      // эта строчка необходима, чтобы предотвратить стандартное поведение браузера
      // в данном случае мы не хотим, чтобы страницаперезагружалась при отправке формы
      e.preventDefault();

      let inputValue = todoItemForm.input.value;
      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!inputValue) {return}
      // создаем и добавляем в список новое дело из поля для ввода

      let todoItem = createTodoItem(inputValue);

      // добавляем обработчики на кнопки
      addUtilityListeners(todoItem);

      todoItem.item.setAttribute('id', parseInt(window.localStorage.getItem('autoId')) + 1);

      performOnSavedItems((savedItems) => {
        const name = todoItem.item.name;
        const id = parseInt(window.localStorage.getItem('autoId')) + 1;
        savedItems.push({name, "done": false, id});
        window.localStorage.setItem('autoId', id);
        return savedItems;
      });

      // добавляем в список новое дело
      todoList.append(todoItem.item)
      // обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      document.getElementById("button-addition").disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;

})();

function loadOrInitializeLocalStorage() {
  let whoUser = document.getElementById('who').value;
  let savedItems;
  if (!('autoId' in window.localStorage) || !(whoUser in window.localStorage)) {
    window.localStorage.setItem(whoUser, JSON.stringify([]));
    window.localStorage.setItem("autoId", 0);
  } else {
    savedItems = JSON.parse(window.localStorage.getItem(whoUser));
  }
  return savedItems;
}
