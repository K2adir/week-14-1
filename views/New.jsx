const React = require("react");

const New = () => {
  return (
    <>
      <h1>New stuff </h1>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        <br />
        Entry: <textarea name="entry" rows="5" cols="40"></textarea>
        <br />
        Ship is broken? <input type="checkbox" name="shipIsBroken" />
        <br />
        <button type="submit" value="create task">
          Submit Homie
        </button>
      </form>
    </>
  );
};

module.exports = New;
