import React, { Component } from 'react';
import axios from 'axios'
import Forms from './component/Forms'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      form1: {name: '',
      age: '',
      newrole: ''},
      form2: {id: '',
      role: ''}
          }
}

name = (event) =>{
this.setState({form1: {...this.state.form1, name: event.target.value}})
};

age = (event) =>{
  this.setState({form1: {...this.state.form1,age: parseInt(event.target.value)}})
};

newRole = (event) =>{
  this.setState({form1: {...this.state.form1, newrole: event.target.value}})
};

id = (event) =>{
  this.setState({form2: {...this.state.form1, id: event.target.value}})
};

role = (event) =>{
  this.setState({form2: {...this.state.form1, role: event.target.value}})
};

submitNewRole = e => {
  e.preventDefault()
  console.log(this.state)
  fetch(
    'http://127.0.0.1:5000/new-employees',
    {
      method: "POST",
      body: JSON.stringify(this.state.form1),
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'accept-encoding': 'gzip, deflate',
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
              }
    },
    {mode: 'no-cors'}
    )
  .then(res => res.json())
  .then(res_json => this.setState({text: res_json.Message}))
  .catch(error => this.setState({text: "Erro ao realizar requisição"}))
}

submitRole = e => {
  e.preventDefault()
  console.log(this.state)
  axios
  .put('http://127.0.0.1:5000/employees', this.state)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
}

render() {
  return(
    <React.Fragment>

    <h1 style={{ width: '100%', textAlign: 'center', fontSize:30 }}>
    WELCOME TO <span style={{ color: 'green' }}>STONE</span> EMPLOYEES MANAGEMENT SYSTEM
    </h1>

    <span>&nbsp;</span>
    <p><b style={{margin:10}}>Register, Update and Remove Employees</b></p>

    <Forms submit={this.submitNewRole} 
    fields={[{placeholder: "Employee Name", type: "text", onChange: this.name, value: this.state.form1.name},
      {placeholder: "Age", type: "number", onChange: this.age, value: this.state.form1.age},
      {placeholder: "Employee Function", type: "text", onChange: this.newRole, value: this.state.form1.newrole}]} />
      <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     {this.state.text}
     </p>

    <Forms submit={this.submitRole} fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.form2.id, type: "number"},
          {placeholder: "New Role", onChange: this.role, value: this.state.form2.role, type: "text"}]}/>
    
    </React.Fragment>

  )

 }
}

export default App;
