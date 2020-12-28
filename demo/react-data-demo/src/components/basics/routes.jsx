import React, { Fragment, useState } from 'react';
import Head from 'components/basics/head';
import MktNav from 'components/navs/mkt-nav';
import { Container, Row, Col } from 'components/basics/grids';

const MktRoute = (props) => {
	const { title = '', description = '', style, children } = props;

	return (
  	<Fragment>
      <Head title={title} description={description}/>
      <div id='route' className='mkt-route'>
        <MktNav />
        {children}
      </div>
    </Fragment>
	)
}

export { MktRoute }
