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
    this.timing = 200;

    this.get("/todos", (schema) => {
      return schema.db.todos;
    });

    this.post("/todos", (schema, { requestBody }) => {
      return schema.db.todos.insert({ title: requestBody, completed: false });
    });

    this.patch("/todos/:id", (schema, { params: { id }, requestBody }) => {
      return schema.db.todos.update(id, JSON.parse(requestBody));
    });

    this.delete("/todos/:id", (schema, { params: { id } }) => {
      return schema.db.todos.remove(id);
    });
  },
});
