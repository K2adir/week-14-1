const React = require("react");

function Show(props) {
  return (
    <div>
      <h1>{props.log.title}</h1>
      <p>{props.log.entry}</p>
      <p>{props.log.shipIsBroken ? "Ship is broken" : "Ship is not broken"}</p>
    </div>
  );
}

module.exports = Show;
