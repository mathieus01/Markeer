import React from 'react';
import { Switch, Route as RoutesComp } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/home';
import ListPatients from '../pages/patients/list-patients';
import DetailPatient from '../pages/patients/detail-patient';
import ListGroups from '../pages/groups/list-groups';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Schedule from '../pages/schedule';

const Routes = () => (
  <Switch>
    <RoutesComp exact path='/signup' component={Signup} />
    <RoutesComp exact path='/signin' component={Login} />
    <Route exact path='/' component={Home} isPrivate key='/' />
    <Route exact path='/patients' component={ListPatients} key='/patients' isPrivate />
    <Route exact path='/patients/:id' component={DetailPatient} key='/patients/id' isPrivate />
    <Route exact path='/groups' component={ListGroups} key='/groups' isPrivate />
    <Route exact path='/schedule' component={Schedule} key='/schedule' isPrivate />
  </Switch>
);

export default Routes;
