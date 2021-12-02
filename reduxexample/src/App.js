import './App.css';
import React from 'react';
import {connect} from 'react-redux';

import ContactView from './components/ContactView';
import { createContact, deleteContact } from './redux/ActionCreators';

class App extends React.Component {
  nameRef = React.createRef();
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact =  {
      name : this.nameRef.current.value
    }
    this.nameRef.current.value = "";
    this.props.createContact(contact);
  }

  deleteContact(e, index) {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {
    return <div>
      <h1>Contact Names</h1>
      <form onSubmit={this.handleSubmit}>
         <input type="text" ref={this.nameRef} /> 
         <button type="submit">Add</button>
      </form>
      <ul>
        {
          this.props.contacts.map( (contact, i) => {
           return <ContactView 
              contact={contact} 
              index={i} 
              deleteContact={(e,index) => this.deleteContact(e,index)} />
          })
        }
     </ul>
    </div>
  }
}
// state from redux to component as props
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(createContact(contact)),
    deleteContact : index => dispatch(deleteContact(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
