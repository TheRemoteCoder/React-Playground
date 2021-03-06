// @flow

/**
 * @todo Load data from external source
 */

import React from 'react';

import TechnologyList from '../content/technology-list';
import UserCard from '../content/user-card';

const technologies: Array<string> = ['CSS', 'HTML', 'JS'];
const userInfo: any = {
  imageUrl: 'images/user.jpg',
  age: 200,
};

const Main = () => (
  <main>
    <p>Lorem ipsum dolor ...</p>
    <TechnologyList technologies={technologies} />
    <UserCard age={userInfo.age} imageUrl={userInfo.imageUrl} />
  </main>
);

export default Main;
