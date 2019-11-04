import React from 'react';
import {connect} from 'react-redux';
import times from 'lodash/times';
import chunk from 'lodash/chunk';

import Nav from './Nav';

import './Game.css';


const mapStateToProps = (state, {params: {gameId}}) => ({
  game: state.games.get(gameId),
});

const Game = ({game}) => {
  if (!game) {
    return <pre>{JSON.stringify(permute(4), null, '  ')}</pre>;
  }

  const cards = genCards(game);

  return (
    <Nav title={game.name}>
      <div className="game-cards">
        { cards.map((card, i) =>
          <Card card={card} key={i} />
        ) }
      </div>
    </Nav>
  );
};

export default connect(mapStateToProps)(Game);


const Card = ({card}) => {
  let odd = false;
  return (
    <div className="game-card">
      { card.map((row, y) =>
        <div className="game-card-row" key={y}>
          { row.map(word => {
            odd = !odd;
            return (
              <div className={'game-card-cell ' + (odd ? 'odd' : 'event')} key={word}>{word}</div>
            );
          }) }
        </div>
      ) }
    </div>
  );
};


function genCards({playerCount, size, words}) {
  const length = size * size;
  const combos = factorial(length);
  const choices = words.slice().concat(new Array(length - words.length));

  return times(playerCount, () => choose(length, combos).map(index => choices[index])).map(game => chunk(game, size));
}


function permute(size) {
  const total = factorial(size);
  return times(total, seed => choose(size, total, seed));
}

function choose(size, total = null, seed = null) {
  const choices = times(size);

  if (total === null) {
    total = factorial(size);
  }
  if (seed === null) {
    seed = random(0, total);
  }

  return times(size, index => {
    const choice = seed % (size - index);
    return choices.splice(choice, 1)[0];
  });
}

function factorial(number) {
  let result = number;
  while (number > 2) {
    number = number - 1;
    result = result * number;
  }
  return result;
}

function random(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}
