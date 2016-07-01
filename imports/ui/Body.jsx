import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Body extends Component {
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
      card:{
        width: '33%',
      },
    }
  }
  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <div>
          <h3 style={styles.text}>解读展会官方物流费率，预估您的参展物流成本,解读展会官方物流费率，预估您的参展物流成本,解读展会官方物流费率，预估您的参展物流成本,</h3>
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Card style={styles.card}>
            <CardHeader title="立即注册"/>
            <CardMedia>
              <img src="http://www.material-ui.com/images/get-started.svg" />
            </CardMedia>
          </Card>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Card style={styles.card}>
            <CardHeader title="增值服务"/>
            <CardMedia>
              <img src="http://www.material-ui.com/images/get-started.svg" />
            </CardMedia>
          </Card>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Card style={styles.card}>
            <CardHeader title="联系我们"/>
            <CardMedia>
              <img src="http://www.material-ui.com/images/get-started.svg" />
            </CardMedia>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Body;
