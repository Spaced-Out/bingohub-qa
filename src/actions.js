/**
 * constants
 */

export const ADD_GAME = 'ADD_GAME';
export const DELETE_GAME = 'DELETE_GAME';


/**
 * action creators
 */

export function addGame(game) {
  return {
    type: ADD_GAME,
    game,
  };
}

export function deleteGame(gameId) {
  return {
    type: DELETE_GAME,
    gameId,
  };
}
