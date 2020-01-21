import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  firstname: '',
                  skill: ''
                };

  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
  
  alert('Vous dites bonjour à ' + this.state.name);
  }

    render(){
        return(
          <div>
          <label>Nom</label>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                  name='name'
                  className='form-control' 
                  value={this.state.name} 
                  onChange={this.handleChange} 
            />
            <label>Prenom</label>
            <textarea type="text"
                  name='firstname'
                  className='form-control' 
                  value={this.state.firstname} 
                  onChange={this.handleChange}>

            </textarea>
            <label>Compétences</label>
            <select className='form-control'
                  name='skill' 
                  value={this.state.skill} 
                  onChange={this.handleChange}
            >
              <option value="">-- --</option>
              <option value="Dev">Dev</option>
              <option value="Integrateur">Integrateur</option>
              
            </select>
  
            <button>Envoyer</button>
          </form>
  
          {this.state.name.length > 0 && <h1>Bonjour {this.state.name} {this.state.firstname} {this.state.skill}</h1>}
        </div>
        )
    }
} 

export default Form;