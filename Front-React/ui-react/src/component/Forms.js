import React, {Component} from 'react'


export default class Forms extends Component{ 
    render(){
        return(
            <div style={{position: 'relative', left: '00%'}}>

            <form onSubmit={this.props.submit}>
              
              <div>
                {this.props.fields.map((input_field, index) =>(
                        <input 
                        key={index}
                        type= {input_field.type} 
                        value={input_field.value} 
                        onChange={input_field.onChange}
                        placeholder={input_field.placeholder}
                        style={{width: '10%', textAlign: 'Left', margin:5}}
                        />
                ))}
              </div>
            
              <button type="submit" style={{background: 'green', color: 'white', margin:5, borderRadius: 8, fontSize: 14}}>
              SUBMIT
              </button>
            
            </form>
            <span>&nbsp;</span>
          </div>
        )
       
    }
}