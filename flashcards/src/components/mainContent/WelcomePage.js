import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';
// import FullStack from './FullStack';

const HeaderContent = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  p {
    padding-right: 30px;
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
padding-top: 30px;
text-align: center;


.box {
  color: white;
  font-size: 18px;
  height: 40px;
  max-width: 450px;
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

  @media (max-width: 414px) {
    padding-top: 30px;
    text-align: center;

    .box {
      color: white;
      font-size: 18px;
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
        {/* <Link to="/full_stack" ><div className="box fullstack">Full Stack Web Development</div></Link> */}

        <Link to="/data_science" style={{ textDecoration: 'none' }}><div className="box datas">Data Science</div></Link>
        <Link to="/ux_design" style={{ textDecoration: 'none' }}><div className="box uxd">User Experience Design</div></Link>
        <Link to="/ios_development" style={{ textDecoration: 'none' }}><div className="box ios">iOS Development</div></Link>
        <Link to="/computer_science" style={{ textDecoration: 'none' }}><div className="box cs">Computer Science</div></Link>

    </MainContent>
    </div>
  );
}
}

export default WelcomePage;
