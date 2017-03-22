import React from 'react';
import ReactDOM from 'react-dom';

import('./js/firstEntryPoint').then((firstEntryPoint) => {
  const FirstEntryPoint = firstEntryPoint.default;

  ReactDOM.render(
    <FirstEntryPoint />,
    document.getElementById('firstEntry'),
  );
});

import('./js/secondEntryPoint').then((secondEntryPoint) => {
  const SecondEntryPoint = secondEntryPoint.default;

  ReactDOM.render(
    <SecondEntryPoint />,
    document.getElementById('secondEntry'),
  );
});
