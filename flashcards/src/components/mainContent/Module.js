import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  a {
    color: black;
  }

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
        color: #BA112E;
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
      flashcards: [],
    }
    this.handleClick = this.handleClick.bind(this)
    console.log(this.props.data)
  }

  handleClick(item) {
   console.log('ITEM ', item);
   console.log('STATE', this.state);
   let index = this.state.section.indexOf(item);
   console.log('INDEX', index);
   this.props.data[0].section = item;
   this.props.data[0].module = this.props.module;
   this.props.data[0].flashcards = this.state.flashcards[index];
   console.log('PROPS', this.props.data)
  }

  componentDidMount() {
    const fswUrl = 'https://api.sheety.co/1ca8f077-96e2-4abf-9456-cd2783dcabc8';
    const dsUrl = 'https://api.sheety.co/d83bb79c-314f-4a4f-b2d0-4771f7733e23';
    const andUrl = 'https://api.sheety.co/a53cb220-8c60-4bf2-9896-1b0a2dfab162';
    const iOSUrl = 'https://api.sheety.co/5322bd02-41bc-41c2-b914-62b031897e7d';
    const uxUrl = 'https://api.sheety.co/4f638b06-ad67-4190-beb4-673d13ff8f2a';
    const csUrl = 'https://api.sheety.co/95cbfcbd-f627-4c55-a33f-e87d5bea22f7';

    let currentUrl = '';
    
    switch (this.props.module) {
      case 'Full Stack Web':
        currentUrl = fswUrl;
        break;
      case 'Data Science':
        currentUrl = dsUrl;
        break;
      case 'Android Development':
        currentUrl = andUrl;
        break;
      case 'iOS Development':
        currentUrl = iOSUrl;
        break;
      case 'UX Design':
        currentUrl = uxUrl;
        break;
      case 'Computer Science':
        currentUrl = csUrl;
        break;
      default:
        break;
    }

    axios.get(currentUrl)
    .then(response => {
                    /*
        SA: [
        'UI/GIT',
        'Advanced CSS',
        "React',
        "Whatever'
        ];
        FA: [
        [
          {question: bla, answer: bla},
          {question: bla, answer: bla},
          {question: bla, answer: bla}
        ],
        [
          {question: bla, answer: bla},
          {question: bla, answer: bla},
          {question: bla, answer: bla}
        ],
        [
          {question: bla, answer: bla},
          {question: bla, answer: bla},
          {question: bla, answer: bla}
        ],
        [
          {question: bla, answer: bla},
          {question: bla, answer: bla},
          {question: bla, answer: bla}
        ],
        ];
        */

      let sectionArray = [response.data[0].section];
      let flashcardArray = [[]];

      let currentSection = response.data[0].section;
      let currentIndex = 0;
      
      // go through each object???? in the response
      for (let i = 0; i < response.data.length; i++) {

          if (response.data[i].section === currentSection) {
            if (response.data[i].question && response.data[i].answer) {
              flashcardArray[currentIndex].push([
                response.data[i].question,
                response.data[i].answer
              ]);
            }
          } else {
            sectionArray.push(response.data[i].section);
            currentSection = response.data[i].section;
            flashcardArray.push([]);
            currentIndex++;

            if (response.data[i].question && response.data[i].answer) {
              flashcardArray[currentIndex].push([
                response.data[i].question,
                response.data[i].answer
              ]);
            }
          }              

      }
      this.setState({section: sectionArray, flashcards: flashcardArray});
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    if (this.state.flashcards.length > 0 && this.state.section.length > 0) {
      return (
        <div> 
        <TopContent>
          <h1>{this.props.module}</h1>
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
          {this.state.section.map((item, index) => (
            <Link to={`/${this.props.url}/flashcard/${index + 1}`} key={index} style={{ textDecoration: 'none' }}>
              <Card onClick={() => this.handleClick(item)}>
                <div className="first-row">
                  <p>{item}</p>
                  <p className="number">{this.state.flashcards[index].length} Flashcards</p>
                </div>
                <p className="p">World's shortest summary about this topic here.</p>
              </Card>
           </Link>

          ))};
        </MainContent>

      </div>
    );
    } else {
    return <p>Loading...</p>
    }
  }
}

export default Module;