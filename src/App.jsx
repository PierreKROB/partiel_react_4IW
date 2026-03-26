import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';

function App() {

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/users")
      .then(result => result.json())
      .then(result => result.users)

    console.log("fetchData result :", data)
    return data

  }

  return (
    <>
      <DataTable columns={["id", "firstName", "lastName", "age"]} fetchData={fetchData} />
    </>
  );
}

export default App
