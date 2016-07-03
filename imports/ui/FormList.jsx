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
    };
  }

  handleAdd(){
    this.setState({num : this.state.num+1});
    newId = (this.state.num+1).toString();
    newForm = "货物" + newId;
    allforms = this.state.name.concat([newForm]);
    this.setState({name :allforms});
    console.log(this.props.children);
  }

  handleDel(i){
    allforms = this.state.name;
    allforms.splice(i,1);
    this.setState({name :allforms});
  }

  handleZong(o,i){
    zongji = o.state.zongji + i;
    console.log(zongji);
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
            <ToolbarTitle text={this.state.zongji} />
            <ToolbarTitle text="元人民币" />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default FormList;
