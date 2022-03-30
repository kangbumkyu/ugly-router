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

function Header() {
  const handleOnClick = (event, path) => {
    event.preventDefault();

    window.history.pushState({}, "", path);
  };
  return (
    <>
      <a href="/" onClick={(e) => handleOnClick(e, "/")}>
        Home
      </a>
      <a href="/movie" onClick={(e) => handleOnClick(e, "/movie")}>
        Movie
      </a>
      <a href="/tv" onClick={(e) => handleOnClick(e, "/tv")}>
        Tv
      </a>
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
