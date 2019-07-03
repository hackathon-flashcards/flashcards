import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

// --------- Imported Components ------------ //

import Header from '../header/Header';

// -------- Styled Components -------------- //

const FlashcardContent = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 3rem;
        margin-top: 2rem;
    }

    @media (max-width: 500px) {
        width: 93.5%;
    }
`;

const PreviousSectionButton = styled.div`
    background-color: #d4dfe8;
    width: 160px;
    height: 27px;
    border-radius: 5px;
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: flex-start;

    .fas {
        font-size: 14px;
        color: black;
    }

    p {
        font-size: 1.4rem;
        color: black;
    }
`;

const Card = styled.div`
    margin-top: 25px;
    width: 375px;
    height: 308px;
    background-color: #ffffff;
    border-radius: 5px;

    @media (max-width: 500px) {
        width: 100%;
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
        font-size: 1.6rem;
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
        font-size: 1.4rem;
    }
`;

const CardCount = styled.div`
    width: 100%;
    margin: 3rem 0 2rem 0;
    display: flex;
    justify-content: center;

    span {
        margin: 0 0.2rem;
        font-weight: bold;
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
    margin: 10px 0;
    width: 337px;
    height: 40px;
    background-color: #2f2c4b;
    border-radius: 5px;
    display: flex;
    align-items: center;
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
                <div>
                    <Header />
                    <FlashcardContent>
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
                    </FlashcardContent>
                </div>
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
