import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import { CSSTransition } from 'react-transition-group';
import DefaultLayout from '../pages/__layouts/default';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = isAuthenticated();

  if (!signed && isPrivate) {
    return <Redirect to='/signin' />;
  }

  if (signed && !isPrivate) {
    return <Redirect to='/' />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout props={props}>
          <CSSTransition
            in={true}
            mountOnEnter={true}
            unmountOnExit={true}
            appear={true}
            timeout={1000}
            classNames='my-node'
          >
            <Component {...props} />
          </CSSTransition>
        </DefaultLayout>
      )}
    />
  );
}
