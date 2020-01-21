import React from 'react';
import Button from './Button';
import Form from './Form';


class App extends React.Component {
  render(){
    return (
      <div className='container'>
        {/* <Button text='Gaetan'/>
        <Button text='la POUTRE de bamako'/> */}
        <Form/>
      </div>
    );
  }
}
  

export default App;
