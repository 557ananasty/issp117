import React, { Component } from "react";
import "./index.css";
import { navigation } from "../../util/data";
import Link from "./Link";

export default class Constructor extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <div>
            <a>
              <img
                className='logo-img'
                src={require("../../assets/image/grave.svg")}
              />
            </a>
          </div>
          <div className='navigation'>
            {navigation.map(item => (
              <div style={{ paddingRight: 20 }}>
                <Link text={item.text} href={item.href} />
              </div>
            ))}
            <div>{"ЛК / Автор / Регистр"}</div>
          </div>
        </div>
      </header>
    );
  }
}
