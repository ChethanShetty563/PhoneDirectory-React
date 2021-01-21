import React, { Component } from 'react';
import Header from './Header';
import './App.css';



class App extends Component {

  clickHandler(message) {
    alert(message);
  }
render(){
  let subscribers = [
    {
      id:1,
      name: "Shilpa",
      phone: "544444"
    },
    {
      id:2,
      name: "chethan",
      phone: "11212"
    },
  ]
  return (
    <div>
      <Header heading="Phone Directory"/>
      <div className="component-body-container">
      <button className="custom-btn add-btn">Add</button>
      <div className="grid-container heading container">
        <span className="grid-item name-heading"> Name</span>
        <span className="grid-item phone-heading">Phone</span>
       
      </div>
      
      {
        subscribers.map(sub => {
          return <div className="grid-container" key={sub.id} >
          <span className="grid-item "> {sub.name}</span>
          <span className="grid-item ">{sub.phone}</span>
          <span className="grid-item action-btn-contaner">
          <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Deleted clicked")}>Delete</button>
          </span>
        </div>
        })
      }

    </div>
    </div>

  );
}
}

export default App;
