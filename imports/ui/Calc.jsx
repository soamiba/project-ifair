import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Calc extends Component {
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
      selectfield:{
        backgroundColor: 'rgba(255, 255, 0, 255)',
        margin: 0,
      },
    }
  }

  constructor(props) {
    super(props);
    this.state = {selvalue: 1};
  }

  handleChange(e,k,p) {
    this.setState({selvalue: p});
  }

  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <h1 style={styles.text}>展会物流费用测算系统</h1>
        <h3 style={styles.text}>解读展会官方物流费率，预估您的参展物流成本</h3>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SelectField style={styles.selectfield} value={this.state.selvalue} onChange={this.handleChange.bind(this)}>
            <MenuItem value={1} primaryText="Chinajoy" />
            <MenuItem value={2} primaryText="Playstation展" />
            <MenuItem value={3} primaryText="vr展" />
            <MenuItem value={4} primaryText="成人用品展" />
            <MenuItem value={5} primaryText="婚庆展" />
          </SelectField>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Calc;
