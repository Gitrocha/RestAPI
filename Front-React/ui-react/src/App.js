import React, { Component } from 'react';

class MyButton extends Component {
  render() {
    return (
    <button
     onClick={() => {this.props.handleclick(this.props.label);}}
    >
    {this.props.label}
    </button>
    )
  }
}

class MyLabel extends Component {
  render(){
    return <p>Cliquei no: {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }
  setLabelText = (labelText) => {
      this.setState({ labelText });
    }

  render() {
    return (
      <div className="App">
      <MyLabel text={this.state.labelText}/>
      <MyButton handleclick={this.setLabelText} label="Botão Adicionar Usuário"/>
      <MyButton handleclick={this.setLabelText} label="Botão Atualizar Empregado"/>
      <MyButton handleclick={this.setLabelText} label="Botão Remover Empregado"/>
      <MyButton handleclick={this.setLabelText} label="Botão Consultar Empregados"/>
      </div>
    );
  }
}

export default App;
