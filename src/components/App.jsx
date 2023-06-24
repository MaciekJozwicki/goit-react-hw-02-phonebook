const { Component } = require('react');
const { default: ContactForm } = require('./ContactForm/ContactForm');
const { default: ContactList } = require('./ContactList/ContactList');
const { default: Filter } = require('./Filter/Filter');

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  update = () => {
    this.setState({ contacts: this.state.contacts });
  };
  updateFilter = pattern => {
    this.setState({ filter: pattern });
    console.log(this.state.filter);
  };
  delete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onUpdate={this.update} list={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter onUpdate={this.updateFilter} pattern={this.state.filter} />
        <ContactList
          onDelete={this.delete}
          list={this.state.contacts}
          pattern={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
