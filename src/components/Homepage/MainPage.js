import React, { Component } from "react";
import AdOne from "../advetisementone/AdOne";
import "./MainPage.css";
import AdFour from "../advertisementfour/AdFour";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mainpage">
        <div
          style={{ paddingTop: "260px", paddingLeft: "20px", display: "flex" }}
        >
          <AdOne />
          <AdOne />
          <AdOne />
          <AdOne />
        </div>
        <div>
          <AdFour />
        </div>
      </div>
    );
  }
}
export default MainPage;
