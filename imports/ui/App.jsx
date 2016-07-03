import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Top from './Top.jsx';
import Calc from './Calc.jsx';
import FormList from './FormList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}><Top /></MuiThemeProvider>
        <br />
        <MuiThemeProvider muiTheme={getMuiTheme()}><FormList /></MuiThemeProvider>
      </div>
    );
  }
}

export default App;
