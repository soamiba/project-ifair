import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


import Form from './Form.jsx';

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 1,
      name :["货物1"],
      zongjiText : "0",
      xiaojis :[{num:0,xiaoji:0}]
    };
  }

  handleZongji() {
    var sum = 0;
    calcZong = function(xiaojis){sum += xiaojis.xiaoji;};
    this.state.xiaojis.map(calcZong);
    sumText = sum.toFixed(2);
    this.setState({zongjiText: sumText});
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
    this.setState({xiaojis :allXiaojis},function(){this.handleZongji();});
  }

  handleDel(i){
    allforms = this.state.name;
    allforms.splice(i,1);
    this.setState({name :allforms});

    allXiaojis = this.state.xiaojis;
    allXiaojis.splice(i,1);
    this.setState({xiaojis :allXiaojis},function(){this.handleZongji();});
  }

  handleZong(o,n,i){
    allXiaojis = o.state.xiaojis;
    allXiaojis[n].xiaoji = i;
    o.setState({xiaojis :allXiaojis},function(){o.handleZongji();});
  }

  render() {
    forms = function(formname){return (<Form key={formname} father={this} handleZong={this.handleZong} handleDel={this.handleDel} num={this.state.name.indexOf(formname)} name={formname} />);}.bind(this);
    return (
      <div refs="zongji">
        {this.state.name.map(forms)}
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <FloatingActionButton secondary={true} onClick={this.handleAdd.bind(this)}>
              <ContentAdd />
            </FloatingActionButton>
            <ToolbarSeparator style={{backgroundColor:0}}/>
            <ToolbarTitle text="总计：" />
            <ToolbarTitle text={this.state.zongjiText} />
            <ToolbarTitle text="元人民币" />
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="导出为PDF" secondary={true} />
            <RaisedButton label="保存到我的物流单" secondary={true} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default FormList;
