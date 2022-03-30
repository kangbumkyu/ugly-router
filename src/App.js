function Home() {
  return <div>Home</div>;
}

function Movie() {
  return <div>Movie</div>;
}

function Tv() {
  return <div>Tv</div>;
}

function App() {
  if (window.location.pathname === "/") {
    return <Home />;
  } else if (window.location.pathname === "/movie") {
    return <Movie />;
  } else if (window.location.pathname === "/tv") {
    return <Tv />;
  }
}

export default App;
