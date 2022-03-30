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
  if (path === window.location.pathname) {
    return children;
  } else {
    return null;
  }
}

function Link({ to, children }) {
  const handleOnClick = (event, path) => {
    event.preventDefault();

    window.history.pushState({}, "", path);
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
