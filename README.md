# Task-2: Сервис работы с пользователями

## Описание проекта

Проект включает в себя сервис, который работает с пользователями. В БД может быть более 1 миллиона пользователей. Каждый пользователь имеет поля:
- Имя
- Фамилия
- Возраст
- Пол
- проблемы: boolean // есть ли проблемы у пользователя

В проекте есть endpoint, который проставляет флаг проблемы у пользователей в false и посчитает, сколько пользователей имело true в этом флаге.

## Технологии
- NestJS
- TypeScript
- TypeORM: ORM для работы с базой данных, что облегчает взаимодействие с PostgreSQL.
- PostgreSQL для базы данных.

## Структура проекта
```
Task-2/
│
├── Readme.md
├── appmodule.ts
├── data-source.ts
├── main.ts
├── tsconfig.json
├── user.controller.ts
├── user.entity.ts
├── user.module.ts
├── user.service.ts
├── ormconfig.json
├── package.json
├── package-lock.json
└── 1717875309623-SeedUsers_migrations.ts - файл кода миграции
```

## Установка и запуск

### Предварительные требования

Убедитесь, что у вас установлены Node.js, TypeScript и PostgreSQL.

### Установка зависимостей

Перейдите в корневую папку сервиса и установите зависимости:
```
  npm install
```
### Сборка проекта

Для сборки TypeScript кода в JavaScript используйте команду:
```
  npm run build
```
### Настройка базы данных

Проверьте пожалуйста данные из файла `app.module.ts` и `data-source.ts` для создания и настройки базы данных PostgreSQL.

### Запуск сервиса

Для запуска сервиса используйте команду:
```
  npm run start
```

### Создание таблицы пользователей

Создайте таблицу пользователей в PostgreSQL с помощью следующего скрипта:
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INT,
    gender VARCHAR(50),
    has_issues BOOLEAN
);
```
### Заполнение таблицы с помощью миграции

Используйте команду:

```
npm run typeorm migration:run
```
Либо с revert, чтобы откатить изменения.

## API Endpoints

Сервис работает на стандарнтом порту 3000. При использовании команды set-issues-false, сервис возвращает количество пользователей, у которых был флаг проблемы, равный true, и флаг проблемы устанавливается в false.

Пример запроса к сервису с помощью curl в Windows Powershell:
```
  curl.exe -X PATCH 'http://localhost:3000/users/set-issues-false
```
## Лицензия

MIT License

## Контакты

Если у вас есть вопросы по проекту, пожалуйста, свяжитесь со мной по почте lunaplaysdota@gmail.com или ЛС в Telegram @Degurechaff97
