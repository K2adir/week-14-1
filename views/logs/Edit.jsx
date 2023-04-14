const React = require("react");
const DefaultLayout = require("../layout/Default");

function Edit(props) {
  const { logs } = props;
  return (
    <DefaultLayout title="Ship Registry">
      <h2>Edit Ship</h2>
      <form method="POST" action={`/logs/${logs._id}/?_method=PUT`}>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title" defaultValue={logs.title} />
        <br />
        <label htmlFor="entry">Entry</label>
        <input type="text" name="entry" id="entry" />
        <br />
        <label htmlFor="shipIsBroken">Ready to Fly</label>
        <input type="checkbox" name="shipIsBroken" id="shipIsBroken" />
        <br />
        <input type="submit" value="Edit Log" />
        <a href="/logs">Back</a>
      </form>
    </DefaultLayout>
  );
}

module.exports = Edit;
