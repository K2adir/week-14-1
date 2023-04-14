const React = require("react");
const DefaultLayout = require("../views/layout/Default");

function Index(props) {
  const { logs } = props;

  return (
    <DefaultLayout title="Ships">
      <nav>
        <a href="/logs/new">Register</a>
      </nav>

      <h1>Index Page</h1>

      <ul>
        {logs.map((log) => {
          return (
            <li key={log._id}>
              The <a href={`/logs/${log._id}`}>{log.title}</a> is {log.entry}{" "}
              {log.shipIsBroken ? "Ready for Combat" : "Damaged"}
              <a href={`/logs/${log._id}/edit`}>
                <button>Edit</button>
              </a>
              <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
              </form>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
}

module.exports = Index;
