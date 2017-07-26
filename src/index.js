import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
  return <div>Test</div>;
}

ReactDOM.render(
  <Test d="d" c="c" b="b" a={true} />,
  document.getElementById('app'),
);
