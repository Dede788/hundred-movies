import "./styles.css";

import Screen from "../Screen";
import Input from "../Input";
import fetchOmdb from "../fetchOmdb";
import { search } from "../dateProvider";

export default class SearchScreen {
  constructor() {
    this.resultList =
      document.getElementById("resultList") || document.createElement("ul");
    this.resultList.setAttribute("id", "resultList");
    this.resultList.classList.add("results");
  }

  render() {
    this.content = document.createElement("div");

    const input = new Input({ onChange: this.search });
    this.content.appendChild(input.render());

    const screen = new Screen({ title: "Search", children: this.content });
    return screen.render();
  }

  search = (searchValue) => {
    if (searchValue.length < 3) return;

    search(searchValue).then(this.displayResultList);
  };

  displayResultList = (result) => {
    const listItems = this.resultList.getElementsByTagName("li");
    listItems && [...listItems].map((li) => li.remove());

    const { Search: movies = [] } = result;

    movies.forEach(({ Title: title, Year: year }) => {
      const listItem = document.createElement("li");
      listItem.classList.add("result");
      const listItemTextNode = document.createTextNode(title);

      listItem.appendChild(listItemTextNode);

      this.resultList.appendChild(listItem);
    });

    this.content.appendChild(this.resultList);
  };
}
