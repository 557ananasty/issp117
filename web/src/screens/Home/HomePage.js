import React, { Component } from "react";
import "./index.css";

export default class HomePage extends Component {
  render() {
    return (
      <div id='home' className='page fon'>
        <div>
          <img
            src={require("../../assets/image/grave.svg")}
            height={200}
            alt='icon'
          />
        </div>
        <div>
          <div className='welcome'>{"Welcome to another world"}</div>
          <div>
            <div className='quote'>{"{quote}"}</div>
            <div className='quote-ru'>{"{Цитатка}"}</div>
          </div>
        </div>
      </div>
    );
  }
}
