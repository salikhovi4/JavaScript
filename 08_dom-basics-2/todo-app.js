(function() {
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
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    // <form className="input-group mb-3">
    //   <input className="form-control" placeholder="Введите название нового дела">
  //     <div className="input-group-append">
  //       <button className="btn btn-primary">Добавить дело</button>
  //     </div>
    // </form>

    return {
      form,
      input,
      button,
    };
  }

  // создаем и возварщаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // создаем и возварщаем элемент
  function createTodoItem(name) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент div, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

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

  function createTodoApp(container, title='Список дел') {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    // let todoItems = [createTodoItem('Купить слойку с вишней'), createTodoItem('Сделать домашнее задание')];

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // todoList.append(todoItems[0].item);
    // todoList.append(todoItems[1].item);

    // браузер создает событие submit на форме по нажатию на enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function (event) {
      // эта строчка необходима, чтобы предотвратить стандартное поведение браузера
      // в данном случае мы не хотим, чтобы страницаперезагружалась при отправке формы
      event.preventDefault();

      let inputValue = todoItemForm.input.value;
      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!inputValue) { return }
      // создаем и добавляем в список новое дело из поля для ввода

      let todoItem = createTodoItem(inputValue);

      // добавляем обработчики на кнопки
      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
      });
      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?') && todoItem.remove) {
          todoItem.remove();
        }
      });

      // добавляем в список новое дело
      todoList.append(todoItem.item)
      // обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';
    });
  }

  window.createTodoApp = createTodoApp;
})();
