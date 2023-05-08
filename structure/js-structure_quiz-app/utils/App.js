import { Header } from "./Header.js";
import { Form } from "./Form.js";
import { CardList } from "./CardList.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
