import './App.css'
import { lazy, Suspense } from 'react';

const DataTable = lazy(() => import('./Component/DataTable/DataTable.jsx'));

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
      <Suspense fallback={<div>Chargement du composant ...</div>}>
        <DataTable columns={["id", "firstName", "lastName", "age"]} fetchData={fetchData} />
      </Suspense>

    </>
  );
}

export default App
