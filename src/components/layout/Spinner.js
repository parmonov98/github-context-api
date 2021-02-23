import React , { Fragment}from 'react';

import spinner from './spinner.gif';

// console.log(spinner);

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={{width: "120px", margin: "0 auto", display: "block"}}/>
    </Fragment>
  )
}

export default Spinner;