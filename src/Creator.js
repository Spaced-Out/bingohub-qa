import React from 'react';
import {useDispatch} from 'react-redux';

import {addGame} from './actions';

import Nav from './Nav';
import GameForm from './GameForm';

import './Creator.css';


const Creator = ({onSubmit, router}) => {
  const dispatch = useDispatch();

  return (
    <Nav title="New">
      <GameForm
        submitLabel="Create"
        onSubmit={newGame => {
          dispatch(addGame(newGame));
          router.push('/');
        }}
        game={{}}
      />
    </Nav>
  );
};

export default Creator;

