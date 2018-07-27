import React from 'react';
import ReactDOM from 'react-dom';

import Projects from './containers/Projects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <Projects/>,
    document.querySelector("#page-wrapper")
  );
registerServiceWorker();
