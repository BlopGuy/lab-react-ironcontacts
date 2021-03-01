import './App.css';
import Contacts from './contacts.json';
import React from 'react';

class App extends React.Component {
  state = {
    firstContacts: Contacts.slice(0, 5)
  }

  addRandom = () => {
    let randomContact = Contacts[Math.floor(Math.random() * (Contacts.length - 5)) + 5];

    this.setState((state) => {
      return {
        firstContacts: state.firstContacts.concat(randomContact)
      }
    })
  }

  renderContacts = () => {
    const { firstContacts } = this.state;
    return (
      firstContacts.map(contact => {
        return (
          <tr>
            <td><img src={contact.pictureUrl} alt='contactPic' className='contactPic' style={{ height: 100 }}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
        )
      })
    )
  }

  sortByName = () => {
    let sortContacts = (a, b) => (a.name > b.name ? 1 : -1);
    this.setState((state) => {
      return{
        firstContacts: state.firstContacts.slice().sort(sortContacts)
      }
    })
  }

  sortByPopularity = () => {
    let sortContacts = (a, b) => b.popularity - a.popularity;
    this.setState((state) => {
      return{
        firstContacts: state.firstContacts.slice().sort(sortContacts)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts
      </h1>
        <table >
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.renderContacts()}
          </tbody>
        </table>
        <button onClick={this.addRandom}>Add Random</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      </div>
    );
  }
}

export default App;
