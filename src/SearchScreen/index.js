import "../theme.css";
import "./styles.css";

import { doc } from "prettier";
import Screen from "../Screen";

export default class SearchScreen extends Screen {
  constructor() {
    const content = document.createElement("div");

    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Enter a movie title");
    searchInput.classList.add("search");

    content.appendChild(searchInput);

    return super({ title: "Search", children: content });
  }
}
