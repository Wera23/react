import React from 'react';
import classes from './Cocpit.css'


const cocpit = (props) => {

    let btnClass = '';
    if (props.showPerson) {
    btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (props.persons.length <=2) {
     assignedClasses.push( classes.border );
    }

    if (props.persons.length <=1) {
      assignedClasses.push( classes.red )
    }

    return(
      

        <div className={classes.Cocpit}>
             <h1 >Hi, I'm a RReact App</h1>
       <p className={assignedClasses.join(' ')}>Dziala!</p>
       <button className={btnClass}
       
       onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cocpit;