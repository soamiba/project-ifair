import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Top from './Top.jsx';
import Calc from './Calc.jsx';
import FormList from './FormList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zongji: 0,
      zongjiText: '0',
    };
  }

  handleZong(i) {
    this.setState({zongjiText :i});
  }

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
