import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

// -------- Styled Components -------------- //
const DesktopModule = styled.div`
    @media (max-width: 1900px) {
        display: flex;
        justify-content: space-between;
        // flex-direction: row;
        .main-wrap {
            width: 100%;
        }
    }
    @media (max-width: 414px) {
    }
`;
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
    .text:hover {
        transform: scale(1.05);
    }

    @media (max-width: 414px) {
        display: none;
    }
`;
const TopContent = styled.div`
    padding-left: 20px;
    padding-right: 10px;
    box-sizing: border-box;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 30px;
    }

    .text-field {
        justify-self: center;
        margin: 0 auto;
    }

    div {
        box-sizing: border-box;
        background-color: #ffffff;
        width: 475px;
        height: 55px;
        padding: 15px;
        border-radius: 5px;
        margin-right: 10px;
        position: relative;

        input {
            width: 94%;
            height: 100%;
            margin: 0 auto;
            font-size: 18px;
            border: transparent;
            position: relative;
        }
        input:focus {
            outline: none;
        }
        input::placeholder {
            color: rgb(180, 180, 180);
        }
        .fas,
        .far {
            position: absolute;
            right: 0;
            top: 18%;
            margin-right: 20px;
            margin-top: 10px;
            color: rgb(180, 180, 180);
        }

        .far {
            color: #000000;
            cursor: pointer;
        }
    }

    @media (max-width: 414px) {
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;

        h1 {
            margin-bottom: 10px;
        }
        .text-field {
            justify-self: center;
            margin: 0;
        }
        div {
            width: 100%;
            height: 40px;
            padding: 0.5rem 1rem;
            margin: 0 auto;
            input {
                width: 90%;
                font-size: 1.4rem;
                height: 100%;
            }
            .fas,
            .far {
                top: 5%;
            }
        }
    }
`;

const MainContent = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        color: black;
    }

    @media (max-width: 414px) {
        display: block;
        flex-wrap: none;
    }
`;

const Card = styled.div`
    box-sizing: border-box;
    background: rgb(214, 223, 231);
    margin: 20px 70px;
    border-radius: 5px;
    width: 320px;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    :hover {
        transform: scale(1.05);
    }
    .first-row {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        font-weight: bold;

        p {
            font-size: 18px;
        }

        p:first-child {
            width: 70%;
        }

        .number {
            font-size: 14px;
            color: #ba112e;
        }
    }

    @media (max-width: 414px) {
        background: rgb(214, 223, 231);
        margin: 20px 10px;
        border-radius: 5px;
        padding: 10px 0;
        width: auto;
        height: 100px;

        .first-row {
            display: flex;
            justify-content: space-between;
            align-content: center;
            margin: 0 auto;
            padding: 0 10px;

            .number {
                font-size: 14px;
                color: #ba112e;
            }
        }

        @media (max-width: 414px) {
            background: rgb(214, 223, 231);
            margin: 20px 10px 20px 10px;
            border-radius: 5px;
            padding: 10px 0 10px 0;
            max-width: 475px;

            :hover {
                transform: scale(1.1);
            }

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
                    color: #ba112e;
                }
            }
            .p {
                padding: 10px;
                margin: 0px;
            }
        }
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

// -------- Module Component --------------- //

class Module extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: [],
            flashcards: [],
            searchText: ''
        };
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props.data);
    }

    handleClick(item) {
        console.log('ITEM ', item);
        console.log('STATE', this.state);
        let index = this.state.section.indexOf(item);
        console.log('INDEX', index);
        this.props.data[0].section = item;
        this.props.data[0].module = this.props.module;
        this.props.data[0].flashcards = this.state.flashcards[index];
        this.props.data[0].path = this.props.url;
        console.log('PROPS', this.props.data);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    resetSearch = event => {
        event.preventDefault();
        this.setState({
            searchText: ''
        });
    };

    componentDidMount() {
        const fswUrl =
            'https://api.sheety.co/1ca8f077-96e2-4abf-9456-cd2783dcabc8';
        const dsUrl =
            'https://api.sheety.co/d83bb79c-314f-4a4f-b2d0-4771f7733e23';
        const andUrl =
            'https://api.sheety.co/a53cb220-8c60-4bf2-9896-1b0a2dfab162';
        const iOSUrl =
            'https://api.sheety.co/5322bd02-41bc-41c2-b914-62b031897e7d';
        const uxUrl =
            'https://api.sheety.co/4f638b06-ad67-4190-beb4-673d13ff8f2a';
        const csUrl =
            'https://api.sheety.co/95cbfcbd-f627-4c55-a33f-e87d5bea22f7';

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

        axios
            .get(currentUrl)
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
                        if (
                            response.data[i].question &&
                            response.data[i].answer
                        ) {
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

                        if (
                            response.data[i].question &&
                            response.data[i].answer
                        ) {
                            flashcardArray[currentIndex].push([
                                response.data[i].question,
                                response.data[i].answer
                            ]);
                        }
                    }
                }
                this.setState({
                    section: sectionArray,
                    flashcards: flashcardArray
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (this.state.flashcards.length > 0 && this.state.section.length > 0) {
            return (
                <DesktopModule>
                    <DesktopSide>
                        <div>
                            <img className="logo" src={logo} alt="logo" />
                            <div className="title">Lambda Flash Cards</div>
                        </div>
                        <div className="links">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <div className="text">Home</div>
                            </Link>
                            <Link
                                to="/android_development"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="text">Android Development</div>
                            </Link>
                            <Link
                                to="/full_stack"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="text">Full Stack Web</div>
                            </Link>
                            <Link
                                to="/data_science"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="text">Data Science</div>
                            </Link>
                            <Link
                                to="/ux_design"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="text">
                                    User Experience Design
                                </div>
                            </Link>
                            <Link
                                to="/ios_development"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="text">iOS Development</div>
                            </Link>
                            <Link
                                to="/computer_science"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="text">Computer Science</div>
                            </Link>
                        </div>
                    </DesktopSide>
                    <div className="main-wrap">
                        <TopContent>
                            <h1>{this.props.module}</h1>
                            <div className="text-field">
                                <input
                                    type="text"
                                    name="searchText"
                                    placeholder="Search..."
                                    value={this.state.searchText}
                                    onChange={this.handleInputChange}
                                />
                                {this.state.searchText === '' ? (
                                    <i className="fas fa-search" />
                                ) : (
                                    <i
                                        className="far fa-times-circle"
                                        onClick={this.resetSearch}
                                    />
                                )}
                            </div>
                        </TopContent>
                        <MainContent>
                            {this.state.section
                                .filter(cardstack => {
                                    if (
                                        this.state.searchText !== '' &&
                                        cardstack
                                    ) {
                                        return cardstack
                                            .toLowerCase()
                                            .includes(
                                                this.state.searchText.toLowerCase()
                                            );
                                    } else {
                                        return cardstack;
                                    }
                                })
                                .map((item, index) => (
                                    <Link
                                        to={`/${
                                            this.props.url
                                        }/flashcard/${index + 1}`}
                                        key={index}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Card
                                            onClick={() =>
                                                this.handleClick(item)
                                            }
                                        >
                                            <div className="first-row">
                                                <p>{item}</p>
                                                <p className="number">
                                                    {
                                                        this.state.flashcards[
                                                            index
                                                        ].length
                                                    }{' '}
                                                    Flashcards
                                                </p>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                        </MainContent>
                    </div>
                </DesktopModule>
            );
        } else {
            return (
                <>
                    <LoadingDiv>
                        <LoadingIcon />
                        <h2>Loading...</h2>
                        <p>
                            Taking too long? Click <a href="/">here</a> to go
                            back
                        </p>
                    </LoadingDiv>
                </>
            );
        }
    }
}

export default Module;
