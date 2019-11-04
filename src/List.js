import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router';

import {deleteGame} from './actions';

import Nav from './Nav';

import './List.css';


const mapStateToProps = state => ({
  games: Object.values(state.games),
});

const List = () => {
  const dispatch = useDispatch();
  const games = Array.from(useSelector(state => state.games).values());

  const handleClick = (gameId) => {
    const yes = confirm('Are you sure?'); // eslint-disable-line no-restricted-globals
    if (yes) {
      dispatch(deleteGame(gameId));
    }
  };

  return (
  <Nav>
    <div className="games">
      { games.map(game => (
        <div className="game" key={game.id}>
          <Link className="game-name" to={`/${game.id}`}>{game.name}</Link>
          <div className="game-info">
            <span className="game-playerCount">{game.playerCount} players</span>
            <span className="game-dot"> &middot; </span>
            <span className="game-playerCount">{game.size}x{game.size}</span>
          </div>
          <div className="game-actions">
            <span onClick={() => handleClick(game.id)}>delete</span>
          </div>
        </div>
      )) }
    </div>
  </Nav>
);
};

export default List;

