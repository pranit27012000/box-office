import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({children}) => (
    
    <div>
      <Title title ="Box Office" subtitle ="Are you looking for a movies or actor?" />
      <Navs />
      {children}
    </div>
  )

export default MainPageLayout
