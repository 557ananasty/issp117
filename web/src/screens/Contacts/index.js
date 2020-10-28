import React, { Component } from "react";
import "./index.css";
import { contacts } from "../../util/data";

export default class Contacts extends Component {
  render() {
    return (
      <div id='contacts' className='page fon'>
        <div>
          <img
            src={require("../../assets/image/map.svg")}
            height={200}
            alt='icon'
          />
        </div>
        <div>
          <div>{`e-mail : ${contacts.email}`}</div>
          <div>{`телефон : ${contacts.phone}`}</div>
          <div>{`адрес : ${contacts.adress}`}</div>
        </div>
      </div>
    );
  }
}
