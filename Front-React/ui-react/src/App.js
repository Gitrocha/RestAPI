import React, { Component } from 'react';
import axios from 'axios'
import Forms from './component/Forms'


class Myh1 extends Component {
  render(){
    return <h1 style={{ width: '100%', textAlign: 'center', fontSize:30 }}>
    WELCOME TO <span style={{ color: 'green' }}>STONE</span> EMPLOYEES MANAGEMENT SYSTEM
    </h1>
  }
}

class MyLabel extends Component {
  render(){
    return <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     {this.props.text}
     </p>
  }
}

class FlexForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      newrole: '',
      id: '',
      role: ''
    }
}

name = (event) =>{
this.setState({name: event.target.value})
};

age = (event) =>{
  this.setState({age: parseInt(event.target.value)})
};

newRole = (event) =>{
  this.setState({newrole: event.target.value})
};

id = (event) =>{
  this.setState({id: event.target.value})
};

role = (event) =>{
  this.setState({role: event.target.value})
};

submitNewRole = e => {
  e.preventDefault()
  console.log(this.state)
  axios
  .post('http://127.0.0.1:5000/new-employees', this.state)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
}

submitRole = e => {
  e.preventDefault()
  console.log(this.state)
  axios
  .put('http://127.0.0.1:5000/employees', this.state)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
}

/*  {"name": "Rachel Higgs", "age": 18, "newrole": "Trainee"} */
render() {
  return(
    <React.Fragment>
    <Forms submit={this.submitNewRole} 
    fields={[{placeholder: "Employee Name", type: "text", onChange: this.name, value: this.state.name},
      {placeholder: "Age", type: "number", onChange: this.age, value: this.state.age},
      {placeholder: "Employee Function", type: "text", onChange: this.newRole, value: this.state.newrole}]} />

    <Forms submit={this.submitRole} fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.id, type: "number"},
          {placeholder: "New Role", onChange: this.role, value: this.state.role, type: "text"}]}/>
    </React.Fragment>

  )

 }
}

class PutForms extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
}


render() {
  const {id, role} = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
        <div>
          <input 
          type="number" 
          name="id" 
          value={id} 
          onChange={this.changeHandler}
          placeholder="Employee ID"
          style={{width: '10%', textAlign: 'Left', margin:3}}
          />
          <input 
          type="text" 
          name="role" 
          value={role} 
          onChange={this.changeHandler}
          placeholder="New Role"
          style={{width: '10%', textAlign: 'Left', margin:3}}
          />
        </div>
        <button
         type="submit"
         style={{margin:5}}
        >
        Update</button>
      </form>
    </div>
  )
 }
}

class DeleteForms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0
    }
}

changeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios
  .delete('http://127.0.0.1:5000/employees', this.state)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
}

render() {
  const {id} = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
        <div>
          <input 
          type="number" 
          name="id" 
          value={id} 
          onChange={this.changeHandler}
          placeholder="Employee ID"
          style={{width: '10%', textAlign: 'Left', margin:3}}
          />
        </div>
        <button
         type="submit"
         style={{margin:5}}
        >
        Delete</button>
      </form>
    </div>
  )
 }
}

class GetNameForms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
}

changeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios
  .get('http://127.0.0.1:5000/employees-like?name=John', this.state)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
}

render() {
  const {name} = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
        <div>
          <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={this.changeHandler}
          placeholder="Employee Name"
          style={{width: '10%', textAlign: 'Left', margin:3}}
          />
        </div>
        <button
         type="submit"
         style={{margin:5}}
        >
        Submit</button>
      </form>
    </div>
  )
 }
}

class GetRoleForms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      role: ''
    }
}

changeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios
  .get('http://127.0.0.1:5000/employees-roles?role=Manager', this.state)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
}

render() {
  const {role} = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
        <div>
          <input 
          type="text" 
          name="role" 
          value={role} 
          onChange={this.changeHandler}
          placeholder="Employee Role"
          style={{width: '10%', textAlign: 'Left', margin:3}}
          />
        </div>
        <button
         type="submit"
         style={{margin:5}}
        >
        Submit</button>
      </form>
    </div>
  )
 }
}


class App extends Component {

  handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log('foi')
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    console.log('foi')
  }

  render() {
    return (
      <div className="App">
      
      <FlexForm />
      
      </div>

    );
  }
}

export default App;
