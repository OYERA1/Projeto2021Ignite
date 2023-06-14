import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Model, createServer } from "miragejs";
import { TransactionTable } from "./components/Transactions";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
