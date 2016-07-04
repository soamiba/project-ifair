import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

class FormFoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zongjiText: "0"
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({zongjiText :this.props.zongjiText});
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="总计：" />
            <ToolbarTitle text={this.state.zongjiText} />
            <ToolbarTitle text="元人民币" />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default FormFoot;
