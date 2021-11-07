// Задание 2:
// С помощью localStorage сохраняйте и восстанавливайте список дел между
// перезагрузками страницы.

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
