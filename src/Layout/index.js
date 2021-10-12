import "./styles.css";

export default class Layout {
  constructor(parent) {
    this.parent = parent;
  }
  render = () => {
    const leftColumn = document.createElement("div");
    leftColumn.classList.add("column", "left-column");

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("column", "right-column");

    this.parent.appendChild(leftColumn);
    this.parent.appendChild(rightColumn);
  };
}
