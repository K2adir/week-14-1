const React = require("react");

function NotFound() {
  return (
    <>
      <h1>You got 404'd my dude</h1>
      <img src="https://picsum.photos/600/500" alt="" />
      <br />
      <button>
        <a href="/fruits">Go back</a>
      </button>
    </>
  );
}

module.exports = NotFound;
