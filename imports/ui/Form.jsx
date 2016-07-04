import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cbm: 0,
      jinguan: false,
      chuguan: false,
      kongxiang: false,
      kaixiang: false,
      xiaoji: 0,
    };
  }

  handleChangChange(e) {
    this.setState({chang: e.target.value});
    kuan = this.state.kuan ? this.state.kuan : 0;
    gao = this.state.gao ? this.state.gao : 0;
    this.setState({cbm: e.target.value*kuan*gao});
  }
  handleKuanChange(e) {
    this.setState({kuan: e.target.value});
    chang = this.state.chang ? this.state.chang : 0;
    gao = this.state.gao ? this.state.gao : 0;
    this.setState({cbm: e.target.value*chang*gao});
  }
  handleGaoChange(e) {
    this.setState({gao: e.target.value});
    kuan = this.state.kuan ? this.state.kuan : 0;
    chang = this.state.chang ? this.state.chang : 0;
    this.setState({cbm: e.target.value*kuan*chang});
  }
  handleWeightChange(e){
    this.setState({weight: e.target.value});
  }
  handleCalcClick(e){
    cbm = this.state.cbm;
    weight = this.state.weight;
    cbm_rule = 30;
    weight_rule = 8000;
    jinguan = this.state.jinguan ? 70 : 0;
    chuguan = this.state.chuguan ? 70 : 0;
    kongxiang = this.state.kongxiang ? 50 : 0;
    kaixiang = this.state.kaixiang ? 50 : 0;
    chaozhong = weight > weight_rule ? (weight - weight_rule)/weight_rule : 0;
    chaocbm = cbm > cbm_rule ? (cbm -cbm_rule)/cbm_rule : 0;
    rmb = (((jinguan+chuguan)*(1+chaozhong)*(1+chaocbm)+kongxiang+kaixiang*2)*cbm).toFixed(2);
    this.setState({xiaoji: rmb});
    this.props.handleZong(this.props.father,this.props.num,rmb);
  }
  handleCheck(e,isChecked){
    this.setState({[e.target.name]: isChecked});
  }

  render() {
    return (
      <div>
        <Paper zDepth={2}>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle text={this.props.name} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
              <RaisedButton label="删除" primary={true} onClick={this.props.handleDel.bind(this.props.father,this.props.num)}/>
            </ToolbarGroup>
          </Toolbar>
          <div>
            <TextField
            hintText="请输入长度"
            floatingLabelText="长度(m)"
            value={this.state.chang}
            onChange={this.handleChangChange.bind(this)}
            />
            <TextField
            hintText="请输入宽度"
            floatingLabelText="宽度(m)"
            value={this.state.kuan}
            onChange={this.handleKuanChange.bind(this)}
            />
            <TextField
            hintText="请输入高度"
            floatingLabelText="高度(m)"
            value={this.state.gao}
            onChange={this.handleGaoChange.bind(this)}
            />
            <TextField
            disabled={true}
            hintText="CBM"
            floatingLabelText="CBM"
            value={this.state.cbm}
            />
            <TextField
            hintText="请输入重量"
            floatingLabelText="重量(kg)"
            value={this.state.weight}
            onChange={this.handleWeightChange.bind(this)}
            />
          </div>
          <div>
            <Checkbox name= "jinguan" checked={this.state.jinguan} label="进馆" onCheck={this.handleCheck.bind(this)}/>
            <Checkbox name= "chuguan" checked={this.state.chuguan} label="出馆" onCheck={this.handleCheck.bind(this)}/>
            <Checkbox name= "kongxiang" checked={this.state.kongxiang} label="空箱保存" onCheck={this.handleCheck.bind(this)}/>
            <Checkbox name= "kaixiang" checked={this.state.kaixiang} label="开箱装箱" onCheck={this.handleCheck.bind(this)}/>
          </div>
          <Divider />
          <div>
            <RaisedButton label="测算" primary={true} onMouseUp={this.handleCalcClick.bind(this)}/>
            <h3>小计：{this.state.xiaoji}人民币</h3>
          </div>
      </Paper>
    </div>
    );
  }
}

export default Form;
