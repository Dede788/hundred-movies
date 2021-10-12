import "./styles.css";

export default class Layout {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
  }

  render = () => {
    const { left, right } = this.props;

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("column", "left-column");

    leftColumn.appendChild(left);

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("column", "right-column");

    rightColumn.appendChild(right);

    this.parent.appendChild(leftColumn);
    this.parent.appendChild(rightColumn);
  };
}
