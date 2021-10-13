import Screen from "../Screen";

export default class SearchScreen extends Screen {
  constructor() {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder", "Enter a movie title");
    return super({ title: "Search", children: searchInput });
  }
}
