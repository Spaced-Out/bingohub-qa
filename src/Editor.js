import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {updateGame} from './actions';

import Nav from './Nav';
import GameForm from './GameForm';


const Editor = ({router, params: {gameId}}) => {
  const dispatch = useDispatch();
  const game = useSelector(state => state.games.get(gameId));

  return (
    <Nav title={`${game.name} - Edit`}>
      <GameForm
        submitLabel="Save"
        onSubmit={newGame => {
          dispatch(updateGame(newGame));
          router.push('/');
        }}
        game={game}
      />
    </Nav>
  );
};

export default Editor;
