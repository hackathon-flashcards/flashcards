import React, { Component } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

// --------- Imported Components ------------ //

import Header from '../header/Header';

// -------- Styled Components -------------- //

const FlashcardContent = styled.div`
    width: 93.5%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 30px;
    }
`;

const PreviousSectionButton = styled.div`
    background-color: #d4dfe8;
    width: 140px;
    height: 27px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .fas {
        font-size: 14px;
    }

    p {
        font-size: 14px;
    }
`;

const Card = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 308px;
    background-color: #ffffff;
    border-radius: 5px;
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
        font-size: 16px;
        line-height: 1.5;
        width: 90%;
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
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: center;

    span {
        margin: 0 2px;
        font-weight: bold;
    }
`;

const NextButton = styled.div`
    margin: 10px 0;
    width: 337px;
    height: 40px;
    background-color: #2f2c4b;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    position: relative;

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
`;

const BackButton = styled(NextButton)`
    flex-direction: row-reverse;

    .fas {
        right: auto;
        left: 10px;
    }
`;

// -------- Flashcard Component ------------ //

class Flashcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            current: '',
            front: '',
            back: ''
        };
        console.log("PROPS??", this.props.data[0])
    }

    componentDidMount() {
      if (this.props.data[0].flashcards.length > 0) {
      this.setState({
        current: this.props.data[0].flashcards[0],
        front: this.props.data[0].flashcards[0][0],
        back: this.props.data[0].flashcards[0][1]
      })
    }
    }

    changeSide = () => {
        this.setState({ isFlipped: !this.state.isFlipped });
    };

    render() {
      if (this.state.front && this.state.back && this.props.data[0].flashcards.length > 0) {
        const { isFlipped } = this.state;

        return (
            <div>
                <Header />
                <FlashcardContent>
                    <h2>{this.props.data[0].section}</h2>
                    <PreviousSectionButton>
                        <i className="fas fa-arrow-left" />
                        <p>{this.props.data[0].module}</p>
                    </PreviousSectionButton>
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
                                    <p>
                                        {/* Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed nisl est, malesuada
                                        at euismod et, porta a nunc. Suspendisse
                                        eget urna dignissim augue fermentum
                                        varius vitae sed nisi. */}
                                        {this.state.front}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card key="back">
                                <CardContent>
                                    <SideIndicator>
                                        <p>Back</p>
                                    </SideIndicator>
                                    <p>
                                        {/* Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed nisl est, malesuada
                                        at euismod et, porta a nunc. Suspendisse
                                        eget urna dignissim augue fermentum
                                        varius vitae sed nisi. */}
                                        {this.state.back}
                                    </p>
                                </CardContent>
                            </Card>
                        </ReactCardFlip>
                    </div>
                    <CardCount>
                        <p>
                            <span>1</span> of <span>4</span>
                        </p>
                    </CardCount>
                    <NextButton>
                        <i className="fas fa-arrow-right" />
                        <p>Next</p>
                    </NextButton>
                    <BackButton>
                        <i className="fas fa-arrow-left" />
                        <p>Back</p>
                    </BackButton>
                </FlashcardContent>
            </div>
        );
      } else {
        return <p>Loading...</p>
      }
    }
}

export default Flashcard;
