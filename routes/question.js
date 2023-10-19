const express = require("express");
const router = express.Router();

const data = [
  {
    id: 1,
    title: "How to create a new Django project?",
    content:
      "I'm new to Django and would like to know how to create a new Django project. Thanks! I'm new to Django and would like to know how to create a new Django project. Thanks!",
    views: 10,
    answers: [
      {
        id: 1,
        content: "Just use django-admin lol!",
      },
      {
        id: 1,
        content:
          "Just use react lol! to find out more about react, visit https://reactjs.org/ angular",
      },
    ],
    author: {
      id: 1,
      username: "admin",
      email: "gamemod@pro",
    },
    created_at: "2020-04-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Toán A1",
    content: "f(x) x->2 of sin(x)/x",
    views: 110,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 3,
    title: "cách phạm trù cơ bản trong triết học mac-lenin",
    content:
      "cách phạm trù cơ bản trong triết học mac-lenin, trở lời 1 cách chi tiết giúp mình với",
    views: 110,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 4,
    title: "C++ program",
    content: "viết 2 chương trình lisp cơ bản",
    views: 110,
    isSolved: true,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 1,
    title: "How to create a new Django project?",
    content:
      "I'm new to Django and would like to know how to create a new Django project. Thanks! I'm new to Django and would like to know how to create a new Django project. Thanks!",
    views: 10,
    answers: [
      {
        id: 1,
        content: "Just use django-admin lol!",
      },
      {
        id: 1,
        content:
          "Just use react lol! to find out more about react, visit https://reactjs.org/ angular",
      },
    ],
    author: {
      id: 1,
      username: "admin",
      email: "gamemod@pro",
    },
    created_at: "2020-04-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Toán A1",
    content: "f(x) x->2 of sin(x)/x",
    views: 110,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 3,
    title: "cách phạm trù cơ bản trong triết học mac-lenin",
    content:
      "cách phạm trù cơ bản trong triết học mac-lenin, trở lời 1 cách chi tiết giúp mình với",
    views: 110,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 4,
    title: "C++ program",
    content: "viết 2 chương trình lisp cơ bản",
    views: 110,
    isSolved: true,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 1,
    title: "How to create a new Django project?",
    content:
      "I'm new to Django and would like to know how to create a new Django project. Thanks! I'm new to Django and would like to know how to create a new Django project. Thanks!",
    views: 10,
    answers: [
      {
        id: 1,
        content: "Just use django-admin lol!",
      },
      {
        id: 1,
        content:
          "Just use react lol! to find out more about react, visit https://reactjs.org/ angular",
      },
    ],
    author: {
      id: 1,
      username: "admin",
      email: "gamemod@pro",
    },
    created_at: "2020-04-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Toán A1",
    content: "f(x) x->2 of sin(x)/x",
    views: 110,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 3,
    title: "cách phạm trù cơ bản trong triết học mac-lenin",
    content:
      "cách phạm trù cơ bản trong triết học mac-lenin, trở lời 1 cách chi tiết giúp mình với",
    views: 110,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
  {
    id: 4,
    title: "C++ program",
    content: "viết 2 chương trình lisp cơ bản",
    views: 110,
    isSolved: true,
    answers: [],
    author: {
      id: 1,
      username: "admi2n",
      email: "gamemo2d@pro",
    },
    created_at: "2021-04-01T10:00:00Z",
  },
];

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  res.send(data.find((x) => x.id == req.params.id));
});

module.exports = router;
