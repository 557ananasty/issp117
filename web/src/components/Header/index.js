import React, { Component } from "react";
import "./index.css";
import { navigation } from "../../util/data";

export default class Constructor extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <div>
            <a>
              <img src={require("../../assets/image/logo-text.svg")} />
            </a>
          </div>
          <div className='navigation'>
            {navigation.map(item => (
              <div style={{ paddingRight: 20 }}>
                <Link
                  text={this.context.isEnglish ? item.text.en : item.text.ru}
                  href={item.href}
                />
              </div>
            ))}
            <div>
              <Language
                lang={this.context.language}
                onClick={this.context.changeLanguage}
              />
            </div>
            {/* <div>Search</div> */}
          </div>
        </div>
      </header>
    );
  }
}
