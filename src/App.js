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
  return (
    <>
      <a href="/">Home</a>
      <a href="/movie">Movie</a>
      <a href="/tv">Tv</a>
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
