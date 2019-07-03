import React from 'react';
import WelcomePage from './WelcomePage';

const MainContent = (props) => {
    return (
      <WelcomePage data={props.data}/>
    );
};
export default MainContent;