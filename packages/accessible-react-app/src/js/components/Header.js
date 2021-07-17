import React from 'react';

import HomeIcon from './HomeIcon';
import PrimaryNav from './PrimaryNav';

const Header = () => (
  <>
    {/* SR talking point - aria-label for landmarks rotor (menu) */}
    <header aria-label="AnyCorp site" role="banner">
      <HomeIcon />
      <PrimaryNav ariaLabelText="Primary page links" />
    </header>
  </>
);

export default Header;
