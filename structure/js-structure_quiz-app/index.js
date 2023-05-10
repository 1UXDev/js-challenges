import { Header } from "./utils/Header.js";
import { Bookmark } from "./utils/Bookmark.js";
import { App } from "./utils/App.js";
import { Form } from "./utils/Form.js";


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
