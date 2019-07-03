import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Nav = styled.div`

  @media (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    color: white;
    background-color: rgb(20, 18, 30);
    .logo {
      margin-left: 10px;
      padding-top: 7px;
      padding-bottom: 7px;
    }
    .menu {
      margin-right: 10px;
      // display: none;
    }
    .dropdown {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0, .7);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      z-index: 5;

      .cancel {
        align-self: flex-end;
        padding: 10px 10px 0px 0px;
        top: 0;
        position: absolute;
      }
      .text {
        color: white;
        font-size: 20px;
        padding: 15px;        
      }
    }
}
`

class Header extends Component {
  constructor(props) {
    super(props);

    this.menuButtonNode = React.createRef();
    this.dropdownBox = React.createRef();

    this.state = {
      visible: false,
      menu: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.saveMenuButtonRef = this.saveMenuButtonRef.bind(this);
    this.saveDropdownBoxRef = this.saveDropdownBoxRef.bind(this);
  }

  saveMenuButtonRef(element) {
    this.menuButtonNode = element;
  }
  saveDropdownBoxRef(element) {
    this.dropdownBox = element;
  }

  handleClick() {
    if (this.state.visible) {
      this.menuButtonNode.style.display = 'flex';
      this.dropdownBox.style.display = 'none';
      this.setState({
        visible: false
      })
    } else {
      this.menuButtonNode.style.display = 'none';
      this.dropdownBox.style.display = 'flex';
      this.setState({
        visible: true
      })
    }
  }

  render() {
  return (
    <Nav>
      <img className="logo" src={logo} alt="logo"/>
      <div className="menu" ref={this.saveMenuButtonRef} onClick={this.handleClick}>
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <g>
          <title>background</title>
          <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
          </g>
          <g>
          <title>Layer 1</title>
          <path fill="#f9f9f2" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z"/>
          </g>
        </svg>
      </div>
      <div className="dropdown" ref={this.saveDropdownBoxRef}>
        <svg className="cancel" onClick={this.handleClick} width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
            </g>
            <g>
              <title>Layer 1</title>
              <line strokeWidth="2px" strokeLinejoin="round" strokeLinecap="round" stroke="#ffffff" fill="none" id="svg_1" y2="25" y1="7" x2="25" x1="7" className="cls-1"/>
              <line stroke="#ffffff" strokeWidth="2px" strokeLinejoin="round" strokeLinecap="round" fill="none" id="svg_2" y2="7" y1="25" x2="25" x1="7" className="cls-1"/>
            </g>
        </svg>
        <Link to="/" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>Home</div></Link>
        <Link to="/android_development" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>Androind</div></Link>
        <Link to="/full_stack" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>Full Stack Web</div></Link>
        <Link to="/data_science" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>Data Science</div></Link>
        <Link to="/ux_design" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>User Experience</div></Link>
        <Link to="/ios_development" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>iOS Development</div></Link>
        <Link to="/computer_science" style={{ textDecoration: 'none' }}><div className="text" onClick={this.handleClick}>Computer Science</div></Link>
      </div>
    </Nav>
  );
}
};

export default Header;
