## InCodeWetrust

> Редактор для написания документации на языке Markdown (маркдаун)


## Сборка

``` bash
# Установка зависимостей
npm install

# Запуск веб-сервера по адресу localhost:8080
npm run dev

# Сборка для продакшена с минификацией
npm run build

# Сборка для продакшена с анализатором
npm run build --report
```

## API

Для хранение документации используется Firebase или китайский аналог Wilddog, достаточно добавить свои данные в файл main.js, данные можно получить из панели управление после регистрации на сайте [Google Firebase](https://firebase.google.com/)

Данные можно добавить в объект config
``` 
const config = {
  apiKey: 'AIzaSyCErff52h98mqahGNalC7NLTa9X9NH67ds',
  authDomain: 'documentation-94e3e.firebaseapp.com',
  databaseURL: 'https://documentation-94e3e.firebaseio.com',
  projectId: 'documentation-94e3e',
  storageBucket: '',
  messagingSenderId: '271335049801'
}
```
Для демонстрации можно воспользоваться тестовыми данными

Для более детальной информации читайте [guide](http://vuejs-templates.github.io/webpack/) и [docs for vue-loader](http://vuejs.github.io/vue-loader).
