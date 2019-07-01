import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import logo from '../../assets/logo.png';

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
    }
}
`

const Header = () => {
  return (
    <Nav>
      <img className="logo" src={logo} alt="logo"/>
      <div className="menu">
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
    </Nav>
  );
};

export default Header;
