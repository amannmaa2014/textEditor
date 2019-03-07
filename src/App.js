import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    fontWeight: null,
    fontStyle: null,
    textDecorationLine: null,
    color: null
  };

  changingColor = color => this.setState({ color: color });

  changeFontStyle = styleNames => {
    if (this.state.fontStyle === "italic") {
      this.setState({ fontStyle: "" });
    } else {
      this.setState({ fontStyle: styleNames });
    }
  };

  changetextDecorationLine = styleNames => {
    if (this.state.textDecorationLine === "underline") {
      this.setState({ textDecorationLine: "" });
    } else {
      this.setState({ textDecorationLine: styleNames });
    }
  };

  changeFontWeight = styleNames => {
    if (this.state.fontWeight === "bold") {
      this.setState({ fontWeight: "" });
    } else {
      this.setState({ fontWeight: styleNames });
    }
  };
  //
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => {
            if (style == "italic") {
              this.changeFontStyle(style);
            } else if (style == "underline") {
              this.changetextDecorationLine(style);
            } else {
              this.changeFontWeight(style);
            }
          }}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changingColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.state} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
