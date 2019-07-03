import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

// --------- Imported Components ------------ //

import Header from '../header/Header';

// -------- Styled Components -------------- //

const DesktopFlashcard = styled.div`
  @media (max-width: 2500px) {
    display: flex;
    justify-content: space-between;
    // flex-direction: row;
    .wrap {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media (max-width: 414px) {

  }
`
const DesktopSide = styled.div`
  min-width: 350px;
  height: 100vh;
  margin: 0 auto;
  background: rgb(20, 18, 30);
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

   @media (max-width: 1200px){
    min-width: 300px;
    height: 100vh;
    margin: 0 auto;
    background: rgb(20, 18, 30);
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
      transform: scale(1.05);
     }
   }

  @media (max-width: 414px) {
    display: none;
  }
`

const FlashcardContent = styled.div`
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;   

   .titlewrap {
     width: 100%;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-items: flex-start;
     padding-left: 40px;
   }
    .buttons {
      display: flex;
      flex-direction: row-reverse;
    }
    

    h2 {
        font-size: 30px;
        padding-top: 40px;
        left: 0;
    }
    @media (max-width: 414px) {
        width: 93.5%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 30px;
        }
        .buttons {
          display: block;
        }
        .titlewrap {
          width: auto;
          margin: 0;
          display: block;

        }
    }
`;

const PreviousSectionButton = styled.div`
    background-color: #d4dfe8;
    width: 160px;
    height: 27px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .fas {
        font-size: 14px;
        color: black;
    }

    p {
        font-size: 14px;
        color: black;
    }
`;

const Card = styled.div`
@media (max-width: 2500px) {
  margin-top: 45px;
  width: 500px;
  height: 408px;
  background-color: #ffffff;
  border-radius: 5px;
}
@media (max-width: 1200px) {
    margin-top: 45px;
    width: 375px;
    height: 308px;
    background-color: #ffffff;
    border-radius: 5px;
  }

@media (max-width: 414px) {
    margin-top: 25px;
    width: 375px;
    height: 308px;
    background-color: #ffffff;
    border-radius: 5px;
}
`;

const CardContent = styled.div`
    width: 100%;
    height: 308px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    p {
        font-size: 18px;
        line-height: 1.5;
        width: 90%;
    }
    @media (max-size: 414px) {
      width: 100%;
      height: 308px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
  
      p {
          font-size: 16px;
          line-height: 1.5;
          width: 90%;
      }
    }
`;

const SideIndicator = styled.div`
    text-transform: uppercase;
    opacity: 0.25;
    position: absolute;
    top: 0;
    right: 20px;

    p {
        font-size: 14px;
    }
`;

const CardCount = styled.div`
 @media (max-size: 1800px) {
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: center;

    span {
        margin: 0 2px;
        font-weight: bold;
        padding: 20px;
    }
  }
    @media (max-size: 414px) {
      width: 100%;
      margin-top: 12px;
      display: flex;
      justify-content: center;
  
      span {
          margin: 0 2px;
          font-weight: bold;
          padding: 0px;
      }
    }
`;

const BlockerButton = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(240, 244, 247, 0.8);
    pointer-events: none;
    transition: 0.3s all ease-in-out;
    display: ${props => (props.show ? 'inline' : 'none')};
    position: absolute;
    z-index: 2;
`;

const NextButton = styled.div`
    margin: 20px 30px 20px 30px;    
    width: 337px;
    height: 40px;
    background-color: #2f2c4b;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;

    .fas {
        color: #ffffff;
        position: absolute;
        right: 10px;
        top: 13px;
    }

    p {
        font-size: 14px;
        color: #ffffff;
    }
    @media (max-width: 1200px) {
        margin: 20px 30px 20px 30px;
        // margin-bottom: 20px;
        width: 250px;
        height: 40px;
        background-color: #2f2c4b;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        position: relative;
        cursor: pointer;
    
        .fas {
            color: #ffffff;
            position: absolute;
            right: 10px;
            top: 13px;
        }
    
        p {
            font-size: 14px;
            color: #ffffff;
        }

    @media (max-width: 414px) {
      margin: 20px 30px 20px 30px;
      // margin-bottom: 20px;
      width: 150px;
      height: 40px;
      background-color: #2f2c4b;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      position: relative;
      cursor: pointer;
  
      .fas {
          color: #ffffff;
          position: absolute;
          right: 10px;
          top: 13px;
      }
  
      p {
          font-size: 14px;
          color: #ffffff;
      }
    }
`;

const BackButton = styled(NextButton)`
    flex-direction: row-reverse;
    cursor: pointer;

    .fas {
        right: auto;
        left: 10px;
    }
`;

const LoadingDiv = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #2f2c4b;
    }
`;

const spinning = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoadingIcon = styled.div`
    border: 10px solid #d4dfe8;
    border-top: 10px solid #2f2c4b;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spinning} 2s linear infinite;
`;

// -------- Flashcard Component ------------ //

class Flashcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            current: 0,
            front: '',
            back: '',
            page: ''
        };
        this.handleClick = this.handleClick.bind(this);
        console.log('PROPS??', this.props.data[0]);
    }

    handleClick(direction) {
        const { current, page } = this.state;
        const { flashcards } = this.props.data[0];

        if (direction === 'left' && current - 1 !== -1) {
            this.setState({
                ...this.state,
                current: current - 1,
                front: flashcards[current - 1][0],
                back: flashcards[current - 1][1],
                page: page - 1
            });
        } else if (direction === 'right' && current + 1 < flashcards.length) {
            this.setState({
                ...this.state,
                current: current + 1,
                front: flashcards[current + 1][0],
                back: flashcards[current + 1][1],
                page: page + 1
            });
        }
    }

    componentDidMount() {
        if (this.props.data[0].flashcards.length > 0) {
            this.setState({
                current: 0,
                front: this.props.data[0].flashcards[0][0],
                back: this.props.data[0].flashcards[0][1],
                page: 1
            });
        }
    }

    changeSide = () => {
        this.setState({ isFlipped: !this.state.isFlipped });
    };

    render() {
        if (
            this.state.front &&
            this.state.back &&
            this.props.data[0].flashcards.length > 0
        ) {
            const { isFlipped, front, back, page } = this.state;

            return (
                <DesktopFlashcard>
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
                <div className="wrap">
                    <Header />
            
                    <FlashcardContent>
                        <div className="titlewrap">
                        <h2>{this.props.data[0].section}</h2>
                        <Link
                            to={`/${this.props.data[0].path}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <PreviousSectionButton>
                                <i className="fas fa-arrow-left" />
                                <p>{this.props.data[0].module}</p>
                            </PreviousSectionButton>
                        </Link>
                        </div>
                        <div onClick={this.changeSide}>
                      
                            <ReactCardFlip
                                isFlipped={isFlipped}
                                flipSpeedBackToFront="2"
                                flipSpeedFrontToBack="2"
                            >
                                <Card key="front">
                                    <CardContent>
                                        <SideIndicator>
                                            <p>Front</p>
                                        </SideIndicator>
                                        <p>{front}</p>
                                    </CardContent>
                                </Card>
                                <Card key="back">
                                    <CardContent>
                                        <SideIndicator>
                                            <p>Back</p>
                                        </SideIndicator>
                                        <p>{back}</p>
                                    </CardContent>
                                </Card>
      
                            </ReactCardFlip>
                           
                        </div>
                        <CardCount>
                            <p>
                                <span>{page}</span> of{' '}
                                <span>
                                    {this.props.data[0].flashcards.length}
                                </span>
                            </p>
                        </CardCount>
                        <div className="buttons">
                          <NextButton onClick={() => this.handleClick('right')}>
                              <BlockerButton
                                  show={
                                      page !==
                                      this.props.data[0].flashcards.length
                                          ? false
                                          : true
                                  }
                              />
                              <i className="fas fa-arrow-right" />
                              <p>Next</p>
                          </NextButton>
                          <BackButton onClick={() => this.handleClick('left')}>
                              <BlockerButton show={page !== 1 ? false : true} />
                              <i className="fas fa-arrow-left" />
                              <p>Back</p>
                          </BackButton>
                        </div>
                    </FlashcardContent>
        
                </div>
            </DesktopFlashcard>
            );
        } else {
            return (
                <>
                    <Header />
                    <LoadingDiv>
                        <LoadingIcon />
                        <h2>Loading...</h2>
                        <p>
                            Taking too long? Click <a href="/">here</a> to go
                            home
                        </p>
                    </LoadingDiv>
                </>
            );
        }
    }
}

export default Flashcard;
