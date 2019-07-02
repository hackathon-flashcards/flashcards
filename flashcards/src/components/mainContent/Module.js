import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TopContent = styled.div`

  @media (max-width: 414px) {
    padding-left: 10px;
    padding-right: 10px;
    box-sizing : border-box;
    h1 {
      
    }
    input {
      width: 100%;
      height: 55px;
      margin-right: 10px;
      margin: 0 auto;
      padding: 15px;
      border-radius: 5px;
      font-size: 18px;
      border: transparent;
      box-sizing : border-box;
      position: relative;
    }
    input:focus{
      outline: none;
    }
    input::placeholder {
      color: rgb(180, 180, 180);
    }
    .icon {
      position: absolute;
      right: 0;
      margin-right: 20px;
      margin-top: 10px;
    }
  }
`;
const MainContent = styled.div`

  @media (max-width: 414px) {

  }
`;

const Card = styled.div`

  @media (max-width: 414px) {
    background: rgb(214, 223, 231);
    margin: 20px 10px 20px 10px;
    border-radius: 5px;
    padding: 10px 0 10px 0;

    .first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px 15px 10px;
      p {
        margin: 0;
        font-size: 20px;
      }
      .number {
        font-size: 16px;
        padding-top: 3px;
      }
    }
    .p {
      padding: 10px;
      margin: 0px;
    }
  }
`


class Module extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: [],
      count: []
    }
  }

  componentDidMount() {
    axios.get("https://api.sheety.co/1ca8f077-96e2-4abf-9456-cd2783dcabc8")
        .then((response) => {

          let sectionArr = [];
          let countArr = [];
          let count = 0;
          let section = response.data[0].section;
          response.data.forEach(item => {
            if (JSON.stringify(item.section) !== JSON.stringify(section)) {
              sectionArr.push(section)
              section = item.section;
              countArr.push(count)
              count = 1;
            } else {
              count++;
            }
          });
          this.setState({section: sectionArr});
          this.setState({count: countArr});
        })
        .catch(error => {
            console.log("Error parsing data", error);
        });
    
  }


  render() {
    return (
      <div> 
        <TopContent>
          <h1>Full Stack Web</h1>
          <div>
          <input type="text" className="input" placeholder="Search..." />
          <svg className="icon" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <desc/>

            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
            </g>
            <g>
              <title>Layer 1</title>
              <path fill="#c8c8c8" id="search" d="m19.42712,20.42712c-1.38987,0.99036 -3.09047,1.57288 -4.92712,1.57288c-4.69442,0 -8.5,-3.80558 -8.5,-8.5c0,-4.69442 3.80558,-8.5 8.5,-8.5c4.69442,0 8.5,3.80558 8.5,8.5c0,2.34721 -0.95139,4.47221 -2.48959,6.01041l5.99736,5.99736c0.27506,0.27506 0.26837,0.71609 -0.00777,0.99223c-0.27807,0.27807 -0.72038,0.27962 -0.99223,0.00777l-6.08065,-6.08065l0,0zm-4.92712,0.57288c4.14214,0 7.5,-3.35786 7.5,-7.5c0,-4.14214 -3.35786,-7.5 -7.5,-7.5c-4.14214,0 -7.5,3.35786 -7.5,7.5c0,4.14214 3.35786,7.5 7.5,7.5l0,0z"/>
            </g>
          </svg>
          </div>
        </TopContent>
        <MainContent>
          <Card>
            <div className="first-row">
              <p></p>
              <p className="number"> Flashcards</p>
            </div>
            <p className="p">World's shortest summary about this topic here.</p>
          </Card>
        </MainContent>
      </div>
    );
  }
}

export default Module;