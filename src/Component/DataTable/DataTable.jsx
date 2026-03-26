import "./DataTable.css";

export default function DataTable({columns, fetchData}) {
  console.log("columns :", columns)
  console.log("fetchData :", fetchData)

  data = fetchData()
  console.log("data :", data)
  
  return(
    <div>
      <h1>DataTable</h1>
    </div>
  )
}