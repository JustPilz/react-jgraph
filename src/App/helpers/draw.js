class Draw {
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;
  element = null;

  drawMouseDown = e => {
    this.element = e.target;
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    console.log(e.shiftKey);
    console.log('draw x', this.element.offsetLeft);
    console.log('draw y', this.element.offsetTop);
    console.log(this.element.clientWidth);
    return;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDrawElement;
    // call a function whenever the cursor moves:
    document.onmousemove = this.elementDraw;
  };

  elementDraw = e => {
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

  closeDrawElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };
}

export default Draw;
