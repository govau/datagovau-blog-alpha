import React from 'react'
import AUmainNav, { AUmainNavContent } from '@gov.au/main-nav'

export default () => (
  <AUmainNav>
    <div className="container">
    <div className="row">
    <div className="col-md-12 main-nav-wrapper">
    <AUmainNavContent items={[
{ link: '/', text: 'Home', active: isLinkActive("/") },
{ link: '/about', text: 'About', active: isLinkActive("/about") }
    ]} />
    <AUmainNavContent items={[
{ link: 'https://search.data.gov.au/', text: 'data.gov.au' }
    ]} />
    </div>
    </div>
    </div>
  </AUmainNav>
)

const isLinkActive = link => {
  return link === location.pathname;
};

