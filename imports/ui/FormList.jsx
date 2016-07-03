import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Form from './Form.jsx';

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 1,
      name :["货物1"],
    };
  }

  handleAdd(){
    this.setState({num : this.state.num+1});
    newId = (this.state.num+1).toString();
    newForm = "货物" + newId;
    allforms = this.state.name.concat([newForm]);
    this.setState({name :allforms});
  }

  handleDel(i){
    allforms = this.state.name;
    allforms.splice(i,1);
    this.setState({name :allforms});
  }

  render() {
    forms = function(formname){return (<Form father={this} handleDel={this.handleDel} num={this.state.name.indexOf(formname)} name={formname} />);}.bind(this);
    return (
      <div>
        {this.state.name.map(forms)}
        <FloatingActionButton secondary={true} onClick={this.handleAdd.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default FormList;
