import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import FullStack from './FullStack';

const HeaderContent = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;

    h1 {
        font-size: 3rem;
        margin-top: 2rem;
    }

    p {
        padding-right: 3rem;
        margin-top: 5rem;
        font-size: 1.6rem;
        line-height: 1.5;
    }

    @media (max-width: 500px) {
        padding-left: 1rem;
        padding-right: 1rem;

        p {
            padding-right: 3rem;
        }
    }
`;

const MainContent = styled.div`
    padding-top: 3rem;
    text-align: center;

    .box {
        color: white;
        font-size: 18px;
        height: 7.2rem;
        max-width: 98%;
        border-radius: 5px;
        vertical-align: middle;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .android {
        background: rgb(20, 18, 30);
    }
    .android:hover {
        transform: scale(1.1);
    }
    .fullstack {
        background: rgb(46, 45, 73);
    }
    .fullstack:hover {
        transform: scale(1.1);
    }
    .datas {
        background: rgb(95, 180, 225);
    }
    .datas:hover {
        transform: scale(1.1);
    }
    .uxd {
        background: rgb(20, 18, 30);
    }
    .uxd:hover {
        transform: scale(1.1);
    }
    .ios {
        background: rgb(26, 62, 116);
    }
    .ios:hover {
        transform: scale(1.1);
    }
    .cs {
        background: rgb(47, 98, 169);
    }
    .cs:hover {
        transform: scale(1.1);
    }

    @media (max-width: 500px) {
        padding-top: 3rem;
        text-align: center;

        .box {
            margin: 1rem 1rem 2rem 1rem;
        }
    }
`;

class WelcomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: '',
            count: []
        };
        console.log('data here', props.data);
    }

    componentDidMount() {
        axios
            .get('https://api.sheety.co/1ca8f077-96e2-4abf-9456-cd2783dcabc8')
            .then(response => {
                let sectionArr = [];
                let countArr = [];
                let count = 0;
                let section = response.data[0].section;
                response.data.forEach((item, index) => {
                    if (
                        JSON.stringify(item.section) !== JSON.stringify(section)
                    ) {
                        sectionArr.push(section);
                        section = item.section;
                        countArr.push(count);
                        count = 1;
                    } else {
                        count++;
                    }
                });
                this.props.data[0].sections = this.props.data[0].sections.concat(
                    sectionArr
                );
            })
            .catch(error => {
                console.log('Error parsing data', error);
            });
    }

    render() {
        return (
            <div>
                <HeaderContent>
                    <h1>Welcome</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nisl est, malesuada at euismod et, porta a nunc.
                        Suspendisse eget urna dignissim augue fermentum varius
                        vitae sed nisi.
                    </p>
                </HeaderContent>
                <MainContent>
                    <Link
                        to="/android_development"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="box android">Android Development</div>
                    </Link>
                    <Link to="/full_stack" style={{ textDecoration: 'none' }}>
                        <div className="box fullstack">
                            Full Stack Web Development
                        </div>
                    </Link>
                    {/* <Link to="/full_stack" ><div className="box fullstack">Full Stack Web Development</div></Link> */}

                    <Link to="/data_science" style={{ textDecoration: 'none' }}>
                        <div className="box datas">Data Science</div>
                    </Link>
                    <Link to="/ux_design" style={{ textDecoration: 'none' }}>
                        <div className="box uxd">User Experience Design</div>
                    </Link>
                    <Link
                        to="/ios_development"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="box ios">iOS Development</div>
                    </Link>
                    <Link
                        to="/computer_science"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="box cs">Computer Science</div>
                    </Link>
                </MainContent>
            </div>
        );
    }
}

export default WelcomePage;
