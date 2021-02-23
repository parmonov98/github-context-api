import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  // console.log(alert);

  return (
    alert != null ?
      (
        <div className={`alert alert-${alert.type}`}>
          <i className="fa fa-info-circle"></i>
          {alert.message}
        </div>
      )
      : ''
  )
}



export default Alert;