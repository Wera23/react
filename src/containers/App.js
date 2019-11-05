

import React, { Component } from 'react';
import classes from './App.css';
import stylki from '../componens/Persons/Person/Person.css';
import Persons from '../componens/Persons/Persons';

class App extends Component {
state = {
  persons: [
    { id: 'id1', name: 'Wera', age: 25 },
    { id: 'id2', name: 'Misia', age: 25 },
    { id: 'id3', name: 'Lulu', age: 18 }
  ],
  otherState: 'some other value',
  showPerson: false
}


togglePersonHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow})}

  //{ this.state.showPerson === true ? <div>....</div> : null} zwykly skrocony if. Plus onClick={this.togglePersonHandler}


/*switchNameHandler = (myName) => {
  this.setState({
    person: [
      { name: myName, age: 26 },
      { name: 'Misia', age: 26 },
      { name: 'Luiza', age: 18 }
    ]
  })}*/

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

   // const personIndex = this.state.persons.findIndex(p => {
     //  return p.id === id;
    //});

   
    

    this.setState({
      persons: [
        { name: 'Wera', age: 26 },
        { name: event.target.value, age: 26 },
        { name: 'Luiza', age: 18 }
      ]
    })
  }


  /* 
  
  if (this.state.showPerson) {
     persons = (
      <div>
      
      <Person name={this.state.person[0].name} age={this.state.person[0].age} />
      <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this, 'Wera!')} changed={this.nameChangedHandler} >My hobbies: Travel</Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/> 
      
      </div>

*/

  render() {

    /* usuwamy style inline
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue'

      style={style}

    };*/

    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
     persons = (

      <div>
        <Persons 
        persons={this.state.persons}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}
        />

      </div>

     /* <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age} 
          key={person.id} 
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
      
      </div>*/
     )

     btnClass = classes.Red;
     /*style.backgroundColor = 'red';*/
    
    }

    const assignedClasses = [];

    if (this.state.persons.length <=2) {
     assignedClasses.push( classes.border );
    }

    if (this.state.persons.length <=1) {
      assignedClasses.push( classes.red )
    }


   


    return (
   
      <div className={classes.App}>
       <h1 className={stylki.style}>Hi, I'm a RReact App</h1>
       <p className={assignedClasses.join(' ')}>Dziala!</p>
       <button className={btnClass}
       
       onClick={this.togglePersonHandler}>Toggle Person</button>
      { persons }
      </div>
    );
  }

}
export default App;




/*
import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {

state = {
  textInput: [
   {id: 'id1', content: '' }
  ]
}

inputChangedHandler = (event) => {
  this.setState({
    textInput: [
    {content: event.target.value } ]
  })
}

deleteCharHandler = (char, index) => {
 const text = this.state.textInput[0].content.split('');
 const arrEl = this.state.textInput[0].content;
 text.splice(index, 1);
 const updateText = text.join('');
 this.setState({arrEl: updateText })
}


  render() {

    const charList = this.state.textInput[0].content.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
    })


    return (
      <div className="App">
    
    <input type="text" onChange={this.inputChangedHandler} value={this.state.textInput[0].content} />
    <p>{ this.state.textInput[0].content }</p>
    <Validation inputLength={this.state.textInput[0].content.length} />
    { charList }
      </div>
    
    );
  }

}
export default App;

*/