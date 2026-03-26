import "./DataTable.css";
import { useEffect, useState } from "react";

export default function DataTable({ columns, fetchData }) {
  console.log("columns :", columns)
  console.log("fetchData :", fetchData)
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const data = await fetchData();
      console.log("data :", data)
      setData(data)
    };
    data();
  }, [fetchData])

  return (
    <div>
      <h1>DataTable</h1>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}