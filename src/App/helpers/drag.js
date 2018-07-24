class Drag {
  constructor(props) {
    console.log('props', props);
    this.log = props.log;
  }
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;
  element = null;

  dragMouseDown = e => {
    this.element = e.target;
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = this.elementDrag;
  };

  elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    // set the element's new position:
    this.element.style.top = this.element.offsetTop - this.pos2 + 'px';
    this.element.style.left = this.element.offsetLeft - this.pos1 + 'px';
  };

  closeDragElement = () => {
    this.log(this.element.style.left);
    this.log(this.element.style.top);
    document.onmouseup = null;
    document.onmousemove = null;
  };
}

export default Drag;
