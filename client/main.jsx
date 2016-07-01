import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Top from '../imports/ui/Top.jsx';
import Calc from '../imports/ui/Calc.jsx';

Meteor.startup(() => {
  injectTapEventPlugin();
  render(<Calc />,document.getElementById('app-container'));
});
