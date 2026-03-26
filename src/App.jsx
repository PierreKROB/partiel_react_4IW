import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';

function App() {

  return (
    <>
      <DataTable columns={["id", "name"]} fetchData={async() => {
        const data = await fetch("http://localhost:3000/user/1")
        console.log("data :", data)
        return data
        
      }} />
    </>
  );
}

export default App
