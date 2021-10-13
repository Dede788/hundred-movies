import "./styles.css";

export default class Input {
  constructor(props) {
    this.props = props;
  }

  render() {
    this.wrapper = document.createElement("div");

    this.searchInput = document.createElement("input");
    this.searchInput.setAttribute("type", "text");
    this.searchInput.setAttribute("placeholder", "Enter a movie title");
    this.searchInput.classList.add("search");

    document.addEventListener("keyup", (event) => {
      const inputValue = event.target.value.trim();
      inputValue.length > 0 ? this.displayClearButton() : this.hideClearValue();
    });

    this.wrapper.appendChild(this.searchInput);
    return this.wrapper;
  }

  handleClearClick = () => {
    this.searchInput.value = "";
    this.hideClearValue();
  };

  displayClearButton() {
    if (document.getElementById("clear") === null) {
      this.clear = document.createElement("button");
      this.clear.setAttribute("id", "clear");
      this.clear.classList.add("clear");

      this.clear.addEventListener("click", this.handleClearClick);

      const clearText = document.createTextNode("❌");
      this.clear.appendChild(clearText);

      this.wrapper.appendChild(this.clear);
    }
  }

  hideClearValue() {
    this.clear?.removeEventListener("click", this.handleClearClick);
    this.clear?.remove();
  }
}
