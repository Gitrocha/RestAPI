import React, { Component } from 'react';

class MyButton extends Component {
  render() {
    return (
    <button style={{margin:5}}
    /* onClick={() => {this.props.handleclick(this.props.label);}} */
    >
    {this.props.label}
    </button>
    )
  }
}

class Myh1 extends Component {
  render(){
    return <h1 style={{ width: '100%', textAlign: 'center', fontSize:30 }}>
    WELCOME TO <span style={{ color: 'green' }}>STONE</span> EMPLOYEES MANAGEMENT SYSTEM
    </h1>
  }
}

class MyInputs extends Component {
  render(){
    return <input style={{width: '10%', textAlign: 'Left', margin:3}}
    type={this.props.dtype} placeholder={this.props.phold}>
    </input>
  }
}

class MyLabel extends Component {
  render(){
    return <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     {this.props.text}
     </p>
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
      
      <Myh1 />
      
      <span>&nbsp;</span>

      <p><MyLabel text="Register here new employees to database"/></p>
      <form onSubmit={this.postemployee}>
      <span>&nbsp;</span>
      <MyInputs phold="Name" dtype="Text"/><MyInputs phold="Age" dtype="Integer"/><MyInputs phold="Role" dtype="Text"/>
      <p><MyButton handleclick={this.setLabelText} label="Add new employee"/></p>
      </form>

      <span>&nbsp;</span>
      
      <p><MyLabel text="Update an existing employee"/></p>
      <form onSubmit={this.postemployee}>
      <span>&nbsp;</span>
      <MyInputs phold="Employee ID" dtype="Text"/><MyInputs phold="New Role" dtype="Integer"/>
      <p><MyButton handleclick={this.setLabelText} label="Update"/></p>
      </form>
      
      <span>&nbsp;</span>
      <p><MyLabel text="Remove existing employee from database"/></p>
      <form onSubmit={this.postemployee}>
      <span>&nbsp;</span>
      <MyInputs phold="Employee ID" dtype="Text"/>
      <p><MyButton handleclick={this.setLabelText} label="Delete"/></p>
      </form>
      
      <span>&nbsp;</span>
      <p><MyLabel text="Search existing employees in database"/></p>
      <span>&nbsp;</span>
      <p><MyButton handleclick={this.setLabelText} label="Query employees"/></p>

      {/* <p>&nbsp;</p> */}

      </div>

    );
  }
}

export default App;
