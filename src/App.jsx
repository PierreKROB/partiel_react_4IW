import './App.css'
import { lazy, Suspense } from 'react';

const DataTable = lazy(() => import('./Component/DataTable/DataTable.jsx'));

function App() {

  const fetchDataUser = async () => {
    const data = await fetch("https://dummyjson.com/users")
      .then(result => result.json())
      .then(result => result.users)

    console.log("fetchData result :", data)
    return data

  }

  const fetchDataRecipe = async () => {
    const data = await fetch("https://dummyjson.com/recipes")
      .then(result => result.json())
      .then(result => result.recipes)

    console.log("fetchData result :", data)
    return data

  }
  return (
    <>
      <Suspense fallback={<div>Chargement du composant ...</div>}>
        <DataTable columns={["id", "firstName", "lastName", "age"]} fetchData={fetchDataUser} fallback={"Chargement des Users"}/>

        <DataTable columns={["id", "name", "rating", "image"]} fetchData={fetchDataRecipe} fallback={"Chargement des Recettes"}/>
      </Suspense>

    </>
  );
}

export default App
