import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Top extends Component {
  getStyles(){
    return {
      root:{
        backgroundColor: 'rgb(0, 188, 212)',
        textAlign: 'center',
      },
      text:{
        color: 'rgba(255, 255, 255, 255)',
        paddingTop: 20,
        marginBottom: 50,
      },
    }
  }
  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <h1 style={styles.text}>展会物流费用测算系统</h1>
        <h3 style={styles.text}>解读展会官方物流费率，预估您的参展物流成本</h3>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <RaisedButton label='测算体验' secondary={true} />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default Top;
