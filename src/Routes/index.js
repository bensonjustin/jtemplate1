import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JHome1 from '../Components/Templates/JTemplate1/JHome1';
import JAbout1 from '../Components/Templates/JTemplate1/JAbout1';
import JPortfolio1 from '../Components/Templates/JTemplate1/JPortfolio1';
import JResume1 from '../Components/Templates/JTemplate1/JResume1';
import JContact1 from '../Components/Templates/JTemplate1/JContact1';

export const routes = [
  {
    path: '/',
    exact: true,
    component: JHome1
  },
  {
    path: '/templates/jtemplate1',
    exact: true,
    component: JHome1
  },
  {
    path: '/templates/jtemplate1/about',
    exact: true,
    component: JAbout1
  },
  {
    path: '/templates/jtemplate1/portfolio',
    exact: true,
    component: JPortfolio1
  },
  {
    path: '/templates/jtemplate1/resume',
    exact: true,
    component: JResume1
  },
  {
    path: '/templates/jtemplate1/contact',
    exact: true,
    component: JContact1
  }
];

const Routes = () => {
  return (
    <>
      {routes.map((route, i) => (
        <TransitionGroup>
          <CSSTransition
            key={`global_routes_${i}`}
            classNames="page"
            timeout={{
              enter: 1000,
              exit: 1000
            }}
          >
            <Route
              key={`global_routes_${i}`}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          </CSSTransition>
        </TransitionGroup>
      ))}
    </>
  );
};

export default Routes;
