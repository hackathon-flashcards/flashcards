import React, { Component } from 'react';
import styled from 'styled-components';

// ----------- Components ------------------ //

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

class Flashcard extends Component {
    render() {
        return (
            <div>
                <Header />
                <FlashcardContent>
                    <h2>Advanced React</h2>
                </FlashcardContent>
            </div>
        );
    }
}

export default Flashcard;
