import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';


import Form from './Form.jsx';

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 1,
      name :["货物1"],
      zongji : 0,
      zongjiText : "0",
      xiaojis :[{num:0,xiaoji:0}]
    };
  }

  componentDidUpdate() {
    var sum = 0;
    calcZong = function(xiaojis){sum += xiaojis.xiaoji;};
    this.state.xiaojis.map(calcZong);
    this.refs.zongji.text = sum;
  }

  handleAdd(){
    this.setState({num : this.state.num+1});
    newId = (this.state.num+1).toString();
    newForm = "货物" + newId;
    allforms = this.state.name.concat([newForm]);
    this.setState({name :allforms});

    newXiaoji = {};
    newXiaoji.num = this.state.num;
    newXiaoji.xiaoji = 0;
    allXiaojis = this.state.xiaojis.concat(newXiaoji);
    this.setState({xiaojis :allXiaojis});
  }

  handleDel(i){
    allforms = this.state.name;
    allforms.splice(i,1);
    this.setState({name :allforms});

    allXiaojis = this.state.xiaojis;
    allXiaojis.splice(i,1);
    this.setState({xiaojis :allXiaojis});
  }

  handleZong(o,n,i){
    allXiaojis = o.state.xiaojis;
    allXiaojis[n].xiaoji = i;
    o.setState({xiaojis :allXiaojis});
  }

  render() {
    forms = function(formname){return (<Form key={formname} father={this} handleZong={this.handleZong} handleDel={this.handleDel} num={this.state.name.indexOf(formname)} name={formname} />);}.bind(this);
    return (
      <div>
        {this.state.name.map(forms)}
        <FloatingActionButton secondary={true} onClick={this.handleAdd.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="总计：" />
            <ToolbarTitle refs="zongji" text="0" />
            <ToolbarTitle text="元人民币" />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default FormList;
