import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';

const Container = styled.div `
  background: rgb(241, 244, 247);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  // overflow: hidden;
`;

ReactDOM.render(<Container><App /></Container>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
