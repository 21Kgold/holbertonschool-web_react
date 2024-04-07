import React from 'react';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {value => {
        return (
          <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {value.user.isLoggedIn && (<a>Contact us</a>)}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Footer;
