import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';

function App() {

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/user/1", { method: "POST" })
    console.log("data :", data)
    return data.json()

  }

  return (
    <>
      <DataTable columns={["id", "name"]} fetchData={fetchData} />
    </>
  );
}

export default App
