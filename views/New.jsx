const React = require("react");

const New = () => {
  return (
    <>
      <h1>New stuff </h1>
      <form action="/logs" method="POST">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="entry">Entry</label>
          <textarea id="entry" name="entry"></textarea>
        </div>
        <div>
          <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
          <label htmlFor="shipIsBroken">Ship is broken</label>
        </div>
        <div>
          <button type="submit">Create Log</button>
        </div>
      </form>
    </>
  );
};

module.exports = New;
