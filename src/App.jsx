import DieGrid from "./components/DieGrid";
import Button from "./components/Button";

function App() {
  

  return (
    <main className="w-5/6 h-5/6 bg-brand-100 rounded-3xl my-32 mx-auto p-10 flex flex-col justify-center items-center">
      <h1 className="text-9xl">Tenzies</h1>
      <DieGrid />
      <Button />
    </main>
  )
}

export default App
