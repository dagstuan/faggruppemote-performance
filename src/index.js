import React from 'react';
import ReactDOM from 'react-dom';

import FirstEntryPoint from './js/firstEntryPoint';
import SecondEntryPoint from './js/secondEntryPoint';

ReactDOM.render(
  <FirstEntryPoint />,
  document.getElementById('firstEntry'),
);

ReactDOM.render(
  <SecondEntryPoint />,
  document.getElementById('secondEntry'),
);


































// import('./js/firstEntryPoint').then((firstEntryPoint) => {
//   const FirstEntryPoint = firstEntryPoint.default;
//
//   ReactDOM.render(
//     <FirstEntryPoint />,
//     document.getElementById('firstEntry'),
//   );
// });
//
// import('./js/secondEntryPoint').then((secondEntryPoint) => {
//   const SecondEntryPoint = secondEntryPoint.default;
//
//   ReactDOM.render(
//     <SecondEntryPoint />,
//     document.getElementById('secondEntry'),
//   );
// });
