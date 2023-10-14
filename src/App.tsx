import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
