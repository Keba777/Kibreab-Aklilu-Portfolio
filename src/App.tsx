import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="md:grid grid-flow-col ">
        <aside className="bg-slate-600">aside</aside>
        <main className="bg-sky-400">main</main>
      </div>
    </>
  );
}

export default App;
