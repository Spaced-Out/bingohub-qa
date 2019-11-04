import * as React from 'react';


export default function GameForm({
  onSubmit,
  submitLabel,
  game,
}) {
  return (
    <form className="creator" onSubmit={event => {
      event.preventDefault();
      const form = event.currentTarget;
      onSubmit({
        ...game,
        name: form.name.value,
        size: parseInt(form.size.value),
        words: form.words.value.split(/[\n,]/).map(word => word.trim()),
        playerCount: parseInt(form.playerCount.value),
      });
    }}>
      <div className="left-col">
        <label>
          <div>Name</div>
          <input type="text" name="name" defaultValue={game.name} />
        </label>

        <label>
          <div>Size</div>
          <select name="size" defaultValue={game.size}>
            <option value="3">3x3</option>
            <option value="4">4x4</option>
            <option value="5">5x5</option>
          </select>
        </label>

        <label>
          <div>Words</div>
          <textarea name="words" defaultValue={game.words ? game.words.join(', ') : null}></textarea>
        </label>

        <button className="creator-submit">{submitLabel}</button>
      </div>

      <div className="right-col">
        <label>
          <div>Players</div>
          <input type="number" name="playerCount" defaultValue={game.playerCount} />
        </label>
      </div>
    </form>
  );
}
