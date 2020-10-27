import React, { Component } from "react";
import "./index.css";

export default class HomePage extends Component {
  render() {
    return (
      <div id='home' className='page fon'>
        <div>
          <img src={require("../../assets/image/grave.svg")} height={200} />
        </div>
        <div>
          <div className='portfolio-text'>
            {"Добро пожаловать в другой мир"}
          </div>
          <div className='developers-text'>{"{Цитатка}"}</div>
        </div>
      </div>
    );
  }
}
