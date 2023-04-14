const React = require("react");

function Show(props) {
  const { logs } = props;
  return (
    <div>
      <h1>{logs.title}</h1>
      <p>{logs.entry}</p>
      <p>{logs.shipIsBroken ? "Ship is broken" : "Ship is not broken"}</p>
    </div>
  );
}

module.exports = Show;
