import React, {Component} from 'react'


export default class Forms extends Component{ 
    render(){
        return(
            <div>
            <form onSubmit={this.props.submit}>
              <div>
                {this.props.fields.map((input_field, index) =>(
                        <input key={index}
                        type= {input_field.type} 
                        value={input_field.value} 
                        onChange={input_field.onChange}
                        placeholder={input_field.placeholder}
                        style={{width: '10%', textAlign: 'Left', margin:3}}
                        />
                ))}
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