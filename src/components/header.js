import React from 'react'
import Navigation from './navigation.js'
import AUmainNav, { AUmainNavContent } from '@gov.au/main-nav'
import AUheader, { AUheaderBrand } from '@gov.au/header'

export default () => (
  <AUheader>
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <AUheaderBrand
            title="blog.data.gov.au"
            subline="Telling the story of open data in Australia"
            link="/"
            brandImage="http://placehold.it/256x80"
            brandImageAlt="Insert alternate text here"
          />
        </div>
      </div>
    </div>
  </AUheader>
)

const isLinkActive = link => {
  return link === location.pathname;
};

