import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/logo.png';

const DesktopWelcome = styled.div`
  @media (max-width: 2500px) {
    display: flex;
    justify-content: space-between;
    // flex-direction: row;
  }
  @media (max-width: 414px) {

  }
`
const DesktopSide = styled.div`
  // display: flex;
  // flex-direction: column;
  min-width: 350px;
  height: 100vh;
  margin: 0 auto;
  background: rgb(20, 18, 30);
  // top: 0;
  // bottom: 0;
  // position: absolute;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  overflow: hidden;
 

  .links {
    height: 100%;
    display: block;
    flex-direction: column;
    justify-items: center;
    align-content: stretch;
    margin-top: 60%;
  }

  .logo {
    // width: 100%;
    display: inline-block;
    // padding: 20px;
    box-sizing: border-box;
  }
  .title {
    font-size: 22px;
    color: #ba112e;
    display: inline-block;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .text {
    font-size: 20px;
    color: white;
    text-align: left;
    padding: 0 0px 20px 30px;
  }
  .text:hover{
    
    background: rgb(47, 44, 75);
   }

  @media (max-width: 414px) {
    display: none;
  }
`
const HeaderContent = styled.div`
  @media (max-width: 2500px) {
    padding-left: 35px;
    padding-right: 20px;
    padding-top: 40px;

    p {
      padding-right: 30px;
    }
  }

  @media (max-width: 414px) {
    padding-left: 10px;
    padding-right: 10px;

    p {
      padding-right: 30px;
    }
  }
`;

const MainContent = styled.div`
@media (max-width: 2500px) {
  padding-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .row-one {
    display: flex;
    justify-content: center;
  }

  .row-two {
    display: flex;
    justify-content: center;
  }

  .box {
    color: white;
    font-size: 18px;
    height: 160px;
    width: 250px;
    border-radius: 5px;
    line-height: 160px;
    vertical-align: middle;
    padding: 10px 20px 20px 20px;
    margin: 10px 10px 10px 10px;
  }
  .android {
    background: rgb(20, 18, 31);
  }
  .android:hover {
    transform: scale(1.01);
  }
  .fullstack {
    background: rgb(47, 44, 75);
  }
  .fullstack:hover {
    transform: scale(1.01);
  }
  .datas {
    background: rgb(59, 181, 230);
  }
  .datas:hover {
    transform: scale(1.01);
  }
  .uxd {
    background: rgb(20, 18, 31);
  }
  .uxd:hover {
    transform: scale(1.01);
  }
  .ios {
    background: rgb(12, 61, 120);
  }
  .ios:hover {
    transform: scale(1.01);
  }
  .cs {
    background: rgb(47, 98, 169);
  }
  .cs:hover {
    transform: scale(1.01);
  }
}
  @media (max-width: 414px) {
    padding-top: 30px;
    text-align: center;

    .row-one {
      display: block;
      justify-content: center;
    }
  
    .row-two {
      display: block;
      justify-content: center;
    }

    .box {
      color: white;
      width: auto;
      font-size: 18px;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
      vertical-align: middle;
      padding: 10px 10px 10px 10px;
      margin: 10px 10px 20px 10px;
      overflow: hidden;
    }
    .android {
      background: rgb(20, 18, 30);
    }
    .fullstack {
      background: rgb(46, 45, 73);
    }
    .datas {
      background: rgb(95, 180, 225);
      margin-bottom: 10px;
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

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: '',
      count: [],
    }
    console.log("data here", props.data)
    
  }

  componentDidMount() {

    axios.get("https://api.sheety.co/1ca8f077-96e2-4abf-9456-cd2783dcabc8")
    .then((response) => {

      let sectionArr = [];
      let countArr = [];
      let count = 0;
      let section = response.data[0].section;
      response.data.forEach((item, index) => {
        if (JSON.stringify(item.section) !== JSON.stringify(section)) {
          sectionArr.push(section)
          section = item.section;
          countArr.push(count)
          count = 1;
        } else {
          count++;
        }
      });
      this.props.data[0].sections = this.props.data[0].sections.concat(sectionArr);
  
    })
    .catch(error => {
        console.log("Error parsing data", error);
    });

  }

  render() {
  return (
    <DesktopWelcome>
      <DesktopSide>
        <div>
          <img className="logo" src={logo} alt="logo"/>
          <div className="title">Lambda Flash Cards</div>
        </div>
        <div className="links">
          <Link to="/" style={{ textDecoration: 'none' }}><div className="text" >Home</div></Link>
          <Link to="/android_development" style={{ textDecoration: 'none' }}><div className="text" >Android Development</div></Link>
          <Link to="/full_stack" style={{ textDecoration: 'none' }}><div className="text" >Full Stack Web</div></Link>
          <Link to="/data_science" style={{ textDecoration: 'none' }}><div className="text" >Data Science</div></Link>
          <Link to="/ux_design" style={{ textDecoration: 'none' }}><div className="text" >User Experience Design</div></Link>
          <Link to="/ios_development" style={{ textDecoration: 'none' }}><div className="text" >iOS Development</div></Link>
          <Link to="/computer_science" style={{ textDecoration: 'none' }}><div className="text" >Computer Science</div></Link>
        </div>
      </DesktopSide>
      <div>
        <HeaderContent>
          <h1>Lambda Flash Cards</h1>
          <p>
          </p>
        </HeaderContent>
        <MainContent>
          <div className="row-one">
              <Link to="/android_development" style={{ textDecoration: 'none' }}><div className="box android">Android Development</div></Link>
              <Link to="/full_stack" style={{ textDecoration: 'none' }}><div className="box fullstack">Full Stack Web Development</div></Link>
              <Link to="/data_science" style={{ textDecoration: 'none' }}><div className="box datas">Data Science</div></Link>
          </div>
          <div className="row-two">
              <Link to="/ux_design" style={{ textDecoration: 'none' }}><div className="box uxd">User Experience Design</div></Link>
              <Link to="/ios_development" style={{ textDecoration: 'none' }}><div className="box ios">iOS Development</div></Link>
              <Link to="/computer_science" style={{ textDecoration: 'none' }}><div className="box cs">Computer Science</div></Link>
          </div>
        </MainContent>
      </div>
    </DesktopWelcome>
  );
}
}

export default WelcomePage;
