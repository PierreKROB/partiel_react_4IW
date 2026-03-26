import "./DataTable.css";
import { useEffect, useState } from "react";

export default function DataTable({ columns, fetchData, fallback }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Data : ", data)

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const data = await fetchData();
      setData(data)
      setLoading(false);
    };
    data();
  }, [fetchData])

  return (
    <div>
      <h1>DataTable</h1>
      {loading && <div>{fallback}</div>}
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