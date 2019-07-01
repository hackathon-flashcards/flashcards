import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Link } from "react-router-dom";

const HeaderContent = styled.div`

  @media (max-width: 414px) {
    padding-left: 10px;
    padding-right: 10px;

    p {
      padding-right: 30px;
    }
  }
`;

const MainContent = styled.div`

  @media (max-width: 414px) {
    padding-top: 30px;
    text-align: center;

    .box {
      color: white;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
      vertical-align: middle;
      padding: 10px 10px 10px 10px;
      margin: 10px 10px 20px 10px;
    }
    .android {
      background: rgb(20, 18, 30);
    }
    .fullstack {
      background: rgb(46, 45, 73);
    }
    .datas {
      background: rgb(95, 180, 225);
    }
    .uxd {
      background: rgb(20, 18, 30);
    }
    .ios {
      background: rgb(26, 62, 116);
    }
    .cs {
      background: rgb(47, 98, 169);
    }
  }
`

const WelcomePage = () => {
  return (
    <div>
    <HeaderContent>
      <h1>Welcome</h1>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
         mollit anim id est laborum.
      </p>
    </HeaderContent>
    <MainContent>

        <Link to="/android_development" style={{ textDecoration: 'none' }}><div className="box android">Android Development</div></Link>
        <Link to="/full_stack" style={{ textDecoration: 'none' }}><div className="box fullstack">Full Stack Web Development</div></Link>
        <Link to="/data_science" style={{ textDecoration: 'none' }}><div className="box datas">Data Science</div></Link>
        <Link to="/uxdesign" style={{ textDecoration: 'none' }}><div className="box uxd">User Experience Design</div></Link>
        <Link to="/ios_development" style={{ textDecoration: 'none' }}><div className="box ios">iOS Development</div></Link>
        <Link to="/computer_science" style={{ textDecoration: 'none' }}><div className="box cs">Computer Science</div></Link>

    </MainContent>
    </div>
  );
};
export default WelcomePage;
