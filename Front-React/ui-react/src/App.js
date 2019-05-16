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
      query2text: '',
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
  this.setState({form1: {...this.state.form1,age: parseInt(event.target.value)}})
};
newRole = (event) =>{
  this.setState({form1: {...this.state.form1, newrole: event.target.value}})
};
// FORM 2 DELETE FROM API
id = (event) =>{
  this.setState({form2: {...this.state.form2, id: parseInt(event.target.value)}})
};

// role = (event) =>{
//   this.setState({form2: {...this.state.form1, role: event.target.value}})
// };

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


render() {
  return(
    <React.Fragment>

    <h1 style={{ width: '100%', textAlign: 'center', fontSize:30 }}>
    WELCOME TO <span style={{ color: 'green' }}>STONE</span> EMPLOYEES MANAGEMENT SYSTEM
    </h1>

    <span>&nbsp;</span>
    <span>&nbsp;</span>

    <p><b style={{margin:10}}>REGISTER, UPDATE AND REMOVE EMPLOYEES</b></p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- Register new employees</p>
    <Forms 
    submit={this.submitNewRole} 
    fields={[{placeholder: "Employee Name", type: "text", onChange: this.name, value: this.state.form1.name},
             {placeholder: "Age", type: "number", onChange: this.age, value: this.state.form1.age},
             {placeholder: "Employee Function", type: "text", onChange: this.newRole, value: this.state.form1.newrole}]} />
     
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     <b>{this.state.regtext}</b>
    </p>

    <p> ------------------------------------------------------------------- </p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- Delete employees info from database</p>
    <Forms 
    submit={this.submitdelete} 
    fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.form2.id, type: "number"}]}/>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     <b>{this.state.deltext}</b>
    </p>
    
    <p> ------------------------------------------------------------------- </p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- Update employees info</p>
    <Forms submit={this.submitRole} fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.form2.id, type: "number"},
          {placeholder: "New Role", onChange: this.role, value: this.state.form2.role, type: "text"}]}/>
    
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     {this.state.puttext}
    </p>


    <p><b style={{margin:10}}>QUERY EMPLOYEES BY SIMILAR NAME OR ROLE</b></p>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- Search employees by name</p>
    <Forms submit={this.submitRole} fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.form2.id, type: "number"},
          {placeholder: "New Role", onChange: this.role, value: this.state.form2.role, type: "text"}]}/>

    
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     {this.state.query1text}
    </p>
    
    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>- Search employees by role</p>
    <Forms submit={this.submitRole} fields={[{placeholder: "Employee ID", onChange: this.id, value: this.state.form2.id, type: "number"},
          {placeholder: "New Role", onChange: this.role, value: this.state.form2.role, type: "text"}]}/>

    <p style={{ width: '100%', textAlign: 'Left', margin:5 }}>
     {this.state.query2text}
    </p>

    </React.Fragment>

  )

 }
}

export default App;
