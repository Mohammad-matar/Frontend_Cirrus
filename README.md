## Project Description:

The requirement for this project were to include Teacher - Student - Homework CRUDs

## Used Languages/Library

implementing React and Material-UI for the Front Side and Laravel for the back whole developing my data base with MySQL.

## Pull The Project

To pull this project :https://github.com/Mohammad-matar/Frontend_Cirrus.git

## How to Run the app

## Run the react

To install the all packages use:

```cli
npm install
```

To run the Frontend:

```cli
npm start
```

## Run the backend

**Should turn on the controller pannel like :XAMP:** then run the laravel

````cli
php artisan serve
```


## Testing CRUD

## Teacher Routes

**GET** `http://localhost:8000/api/teacher`

Sample **Response**

```json
{
  "id": 2,
  "name": "Mohamad Matar",
  "email": "moe.matar1998@gmail.com",
  "password": "12345678",
  "date_of_birth": "2222-01-02",
  "phone_number": "71728733",
  "gender": "male",
  "created_at": "2022-08-03T19:02:22.000000Z",
  "updated_at": "2022-08-03T19:02:22.000000Z"
}
````

**GET BY ID**`http://localhost:8000/api/teacher/1`

It Will get the teacher by his ID

## Add A Teacher

**POST**`http://localhost:8000/api/teacher`

**Response** Will add a new Teacher

```json
{
  "status": 200,
  "message": "New teacher is added",
  "data": {
    "name": "Mohamad Matar",
    "email": "moe.matar1998@gmail.com",
    "password": "12345678",
    "date_of_birth": "2222-01-02",
    "phone_number": "71728733",
    "gender": "male",
    "updated_at": "2022-08-03T19:02:22.000000Z",
    "created_at": "2022-08-03T19:02:22.000000Z",
    "id": 2
  }
}
```

**PUT**`http://localhost:8000/api/teacher/1`

IT will update the teacher from his id

**DELETE**`http://localhost:8000/api/teacher/1`

It will delete the teacher from his id

## Student

## Creating account

**POST**`http://localhost:8000/api/student/signup`

It will register an account with getting a token

```json
{
  "user": {
    "name": "Mohamad",
    "email": "matar99@gmail.com",
    "password": "$2y$10$JanRYTsAdUWu.xaDcZjK9Oc1Q7/3X38xC5sy8ynfAyc3A6EwKXbey",
    "date_of_birth": "1999-01-01",
    "phone_number": "71728733",
    "class": "eb8",
    "gender": "male",
    "updated_at": "2022-08-04T08:17:47.000000Z",
    "created_at": "2022-08-04T08:17:47.000000Z",
    "id": 4
  },
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3N0dWRlbnQvcmVnaXN0ZXIiLCJpYXQiOjE2NTk2MDEwNjcsImV4cCI6MTY1OTYwNDY2NywibmJmIjoxNjU5NjAxMDY3LCJqdGkiOiJDYlI1TG1zUzdTcFlUZmJuIiwic3ViIjoiNCIsInBydiI6IjljNDI5ZTZhNjBjZDUyODU0NzNmMmM4YmM3MDFlYzA5NDhkZjRkOGMifQ.xiPCM4zXF3AVU4wniciDE5luenl1IxFN91kooPzIqOE"
}
```

**GET** `http://localhost:8000/api/student`

Sample **Response**

```json
{
  "id": 2,
  "name": "Mohamad Matar",
  "email": "moe.matar1998@gmail.com",
  "password": "12345678",
  "date_of_birth": "2222-01-02",
  "phone_number": "71728733",
  "gender": "male",
  "created_at": "2022-08-03T19:02:22.000000Z",
  "updated_at": "2022-08-03T19:02:22.000000Z"
}
```

**GET BY ID**`http://localhost:8000/api/student/1`

It Will get the teacher by his ID

## Add A Student

**POST**`http://localhost:8000/api/student`

**Response** Will add a new student

```json
{
  "status": 200,
  "message": "New student is added",
  "data": {
    "name": "Mohamad Matar",
    "email": "moe.matar1998@gmail.com",
    "password": "12345678",
    "date_of_birth": "2222-01-02",
    "phone_number": "71728733",
    "gender": "male",
    "updated_at": "2022-08-03T19:02:22.000000Z",
    "created_at": "2022-08-03T19:02:22.000000Z",
    "id": 2
  }
}
```

**PUT**`http://localhost:8000/api/student/1`

IT will update the student from his id

**DELETE**`http://localhost:8000/api/student/1`

It will delete the student from his id
