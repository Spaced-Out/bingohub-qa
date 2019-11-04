import uniqueId from 'lodash/uniqueId';

import * as actions from './actions';


export default function bingohub(state = {}, action) {
  return {
    games: games(state.games, action),
  };
}

function games(games = new Map(), action) {
  switch (action.type) {
    case actions.ADD_GAME: {
      const game = action.game;
      const id = uniqueId();
      return new Map(games).set(id, {...game, id});
    }

    case actions.DELETE_GAME: {
      const newGames = new Map(games);
      newGames.delete(action.gameId);
      return newGames;
    }

    case actions.UPDATE_GAME: {
      const gameUpdate = action.game;
      const game = games.get(gameUpdate.id);

      const newGames = new Map(games);
      newGames.set(game.id, {...game, ...gameUpdate});

      return newGames;
    }

    default:
      return games;
  }
}

