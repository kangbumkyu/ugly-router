import { useEffect, useState } from "react";

function Home() {
  return <div>Home</div>;
}

function Movie() {
  return <div>Movie</div>;
}

function Tv() {
  return <div>Tv</div>;
}

function Route({ path, children }) {
  const [newPath, setNewPath] = useState(window.location.pathname);
  useEffect(() => {
    window.addEventListener("popstate", () => {
      setNewPath(window.location.pathname);
    });
  }, []);
  if (path === newPath) {
    return children;
  } else {
    return null;
  }
}

function Link({ to, children }) {
  const handleOnClick = (event, path) => {
    event.preventDefault();

    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return (
    <a href={to} onClick={(e) => handleOnClick(e, to)}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/tv">Tv</Link>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/movie">
        <Movie />
      </Route>
      <Route path="/tv">
        <Tv />
      </Route>
    </>
  );
}

export default App;
