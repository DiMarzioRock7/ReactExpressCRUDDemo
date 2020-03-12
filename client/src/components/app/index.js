import React, { Component } from 'react';
import Users from '../userslist';
import ButtonTable from "../buttontable";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonTable />
        <Users />

      </div>
    );
  }
}

export default App;
