const express = require("express");
const app = express();
const port = 5001;

// 設定 view engine
app.set("view engine", "ejs");

// 建立 todos data
const todos = ["first todo", "second todo", "third todo"];

app.get("/todos", (req, res) => {
  // 第二個參數可傳入資料
  res.render("todos", {
    todos, // todos: todos 一樣的話可省略寫法
  });
});

app.get("/todos/:id", (req, res) => {
  // params: 可拿到網址列上指定的參數
  const id = req.params.id;
  const todo = todos[id];
  res.render("todo", {
    todo,
  });
});
app.get("/hello", (req, res) => {
  res.render("hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
