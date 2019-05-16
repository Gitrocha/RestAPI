import React, { Component } from 'react';
import Forms from './component/Forms'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      regtext: '',
      deltext: '',
      puttext: '',
      query1text: '',
      qury1htext:'',
      query2text: [],
      query2htext: '',
      form1: {name: '', age: '', newrole: ''},
      form2: {id: ''},
      form3: {id: '', role: ''},
      form4: {name: ''},
      form5: {role: ''}
          }
}

// FORM 1 POST TO API
name = (event) =>{
this.setState({form1: {...this.state.form1, name: event.target.value}})
};
age = (event) =>{
  this.setState({form1: {...this.state.form1, age: parseInt(event.target.value)}})
};
newRole = (event) =>{
  this.setState({form1: {...this.state.form1, newrole: event.target.value}})
};
// FORM 2 DELETE FROM API
id = (event) =>{
  this.setState({form2: {...this.state.form2, id: parseInt(event.target.value)}})
};
// FORM 3 UPDATE INFO
id2 = (event) =>{
  this.setState({form3: {...this.state.form3, id: parseInt(event.target.value)}})
  };
role = (event) =>{
  this.setState({form3: {...this.state.form3, role: event.target.value}})
  };
// FORM 4 SEARCH BY SIMILAR NAME
namelike = (event) =>{
  this.setState({form4: {...this.state.form4, name: event.target.value}})
};
// FORM 5 SEARCH BY SIMILAR NAME
rolelike = (event) =>{
  this.setState({form5: {...this.state.form5, role: event.target.value}})
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
  .then(res_json => this.setState({regtext: "Finished! " + res_json.Message}))
  .catch(error => this.setState({regtext: "Failed. Verify Employees API or connection. (" + error + ")"}))
}

submitdelete = e => {
  e.preventDefault()
  console.log(this.state)
  fetch(
    'http://127.0.0.1:5000/employees',
    {
      method: "DELETE",
      body: JSON.stringify(this.state.form2),
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
  .then(res_json => this.setState({deltext: res_json.Message}))
  .catch(error => this.setState({deltext: "Failed. Verify Employees API or connection. (" + error + ")"}))
}

submitrolechange = e => {
  e.preventDefault()
  console.log(this.state)
  fetch(
    'http://127.0.0.1:5000/employees',
    {
      method: "PUT",
      body: JSON.stringify(this.state.form3),
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
  .then(res_json => this.setState({puttext: res_json.Message}))
  .catch(error => this.setState({puttext: "Failed. Verify Employees API or connection. (" + error + ")"}))
}

getnames = e => {
  e.preventDefault()
  console.log(this.state)
  fetch(
    'http://127.0.0.1:5000/employees-like?name=' + this.state.form4.name,
    {
      method: "GET",
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
    .then(res_json => this.setState({query1text: res_json.Message.map((element, index) => (
      <p key={index} style={{margin:10}}>
    {element[0] + ' - ' + element[1] + ', ' + element[2] + ' (' + element[3] + ')'}
    </p>
    ))}))
    .then(this.setState({query1htext: 'EMPLOYEES FOUND'}))
    .catch(error => this.setState({query1text: "Failed. Verify Employees API or connection. (" + error + ")"}))
}

getroles = e => {
  e.preventDefault()
  console.log(this.state)
  fetch(
    'http://127.0.0.1:5000/employees-roles?role=' + this.state.form5.role,
    {
      method: "GET",
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
  .then(res_json => this.setState({query2text: res_json.Message.map((element, index) => (
    <p key={index} style={{margin:16}}>
  {element[0] + ' - ' + element[1]}
  </p>
  ))}))
  .then(this.setState({query2htext: 'ID - NAME'}))
  .catch(error => this.setState({query2text: "Failed. Verify Employees API or connection. (" + error + ")"}))
}


render() {
  return(
    <React.Fragment>


    <h1 style={{ width: '100%', textAlign: 'center', fontSize:30, background:'#25ce41', color:'white' }}>
    WELCOME TO <span style={{ color: 'green' }}>STONE</span> EMPLOYEES MANAGEMENT SYSTEM
    </h1>

    <span>&nbsp;</span>
    <span>&nbsp;</span>

    <p> ---------------------------------------------------------------------------------------------------- </p>
    <p><b style={{margin:20, fontSize:20}}>REGISTER, UPDATE AND REMOVE EMPLOYEES</b></p>
    <p> ---------------------------------------------------------------------------------------------------- </p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- REGISTER NEW EMPLOYEES</p>
    <Forms 
    submit={this.submitNewRole} 
    fields={[{placeholder: "Employee Name", type: "text", onChange: this.name, value: this.state.form1.name},
             {placeholder: "Age", type: "number", onChange: this.age, value: this.state.form1.age},
             {placeholder: "Employee Function", type: "text", onChange: this.newRole, value: this.state.form1.newrole}]} />
     
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     <b>{this.state.regtext}</b>
    </p>

    <p> ---------------------------------------------------------------------------------------------------- </p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- DELETE EMPLOYEES INFO FROM DATABASE</p>
    <Forms 
    submit={this.submitdelete} 
    fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.form2.id, type: "number"}]}
    />

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     <b>{this.state.deltext}</b>
    </p>
    
    <p> ---------------------------------------------------------------------------------------------------- </p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>-UPDATE EMPLOYEES INFO</p>
    <Forms
     submit={this.submitrolechange}
     fields={[{placeholder: "Employee ID", onChange: this.id2, value: this.state.form3.id, type: "number"},
          {placeholder: "New Role", onChange: this.role, value: this.state.form2.role, type: "text"}]}/>
    
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
      <b>{this.state.puttext}</b>
    </p>

    <span>&nbsp;</span>
    <p> ---------------------------------------------------------------------------------------------------- </p>
    <p><b style={{margin:20, fontSize:20}}>QUERY EMPLOYEES BY SIMILAR NAME OR ROLE</b></p>
    <p> ---------------------------------------------------------------------------------------------------- </p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- SEARCH EMPLOYEES BY NAME</p>
    <Forms submit={this.getnames} fields={[{placeholder: "First or last name", onChange: this.namelike, value: this.state.form4.name, type: "text"}]}/>

    <p style={{ width: '100%', textAlign: 'Left', margin:12}}>
    {this.state.query1htext}
    </p>
     {this.state.query1text}
    
    <span>&nbsp;</span>
    
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- SEARCH EMPLOYEES BY ROLES</p>
    <Forms submit={this.getroles} fields={[{placeholder: "Type Role", onChange: this.rolelike, value: this.state.form5.role, type: "text"}]}/>

    <p style={{ width: '100%', textAlign: 'Left', margin:12 }}>
    {this.state.query2htext}
    </p>
    {this.state.query2text}
    

    <span>&nbsp;</span>

    <footer style={{ width: '100%', height:'20px', textAlign: 'center', fontSize:12, background:'#80ff80', color:'white' }}>
    <i style={{margin:10, color:'#777f76'}}>* Employees Management System - Made using Javascript React and served by Python Flask RestAPI</i>
    </footer>

    </React.Fragment>

  )

 }
}

export default App;
