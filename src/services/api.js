import { Server } from "miragejs";

new Server({
  seeds(server) {
    server.db.loadData({
      todos: [
        {
          title: "Estudar javascript",
          completed: true,
        },
        {
          title: "Estudar Vue",
          completed: false,
        },
        {
          title: "Estudar composition API",
          completed: false,
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 1000;

    this.get("/todos", (schema) => {
      return schema.db.todos;
    });

    this.post("/todos", (schema, request) => {
      const todo = JSON.parse(request.requestBody).data;

      return schema.db.todos.insert({
        title: todo,
        completed: false,
      });
    });

    this.patch("/todos/:id", (schema, request) => {
      const todo = JSON.parse(request.requestBody).data;

      return schema.db.todos.update(todo.id, todo);
    });

    this.delete("/todos/:id", (schema, request) => {
      return schema.db.todos.remove(request.params.id);
    });
  },
});
