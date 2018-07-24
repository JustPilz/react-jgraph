import React, { Component, Fragment } from 'react';
import helper from '@helpers/helper';
import Drag from '@helpers/drag';
import Draw from '@helpers/draw';
//import './style.less';
import '../styleCommon/common.less';
import Workspace from '@Components/Workspace';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.drag = new Drag({
      log: this.log,
    });

    this.draw = new Draw();
  }

  log = p => {
    console.log('p', p);
  };

  onMouseDown = e => {
    console.log('========================');
    console.log('shiftKey', e.shiftKey);
    if (e.shiftKey) {
      console.log('рисуем');
      this.draw.drawMouseDown(e);
    } else {
      console.log('перемещаем');
      this.drag.dragMouseDown(e);
    }
  };

  render() {
    return (
      <div className="graph">
        <div
          tabIndex={1}
          className="node n1"
          onMouseDown={e => this.onMouseDown(e)}
        />
        <div className="node n2" onMouseDown={e => this.onMouseDown(e)} />
        <div className="edge" />
      </div>
    );
  }
}

export default App;
