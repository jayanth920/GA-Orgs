import React, { Component } from 'react';
import {Button, Form, Container, Header} from 'semantic-ui-react' // Some semantic-iu-react to get started
// Make sure you import the firebase database

class App extends Component {
  state = {
    notes: [],
    note : {
      title: '',
      body: ''
    }
  }
  
  componentDidMount(){
    // This is where you handle your snapshot subscription
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  handleDelete = (id) => {
    console.log('Delete a note by id: ', id)
  }

 
  render() {
    const {title, body} = this.state.note // Some ES6 Destructuring
    return (
    <div style={{textAlign: 'center'}}> 
      <h1>Notes App</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input 
          placeholder="Title" 
          name="title"
          value={title} 
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input 
          placeholder="Body" 
          name="body"
          value={body} 
          onChange={this.handleChange}/>
        </Form.Field>
        <Button primary>Create Note</Button>
      </Form>
      {
        this.state.notes.map( note => (
          <Container key={note.id} text>
            <Header as="h2">{note.title}</Header>
            <p>{note.body}</p>
            <Button onClick={() => this.handleDelete(note.id)}>Delete</Button>
          </Container>
        ))
      }
    </div>
    );
  }
}

export default App;
