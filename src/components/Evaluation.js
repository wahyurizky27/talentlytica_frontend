import { useState } from "react";
import Image from "../assets/image/avatar.jpeg";

function Evaluation() {
  const optionInput = Array.from({ length: 10 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));

  const [data, setData] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 4 }, () => 1))
  );

  const handleChange = (value, row, col) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  const printData = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "Penilaian_Mahasiswa.json";
    link.click();
  };

  return (
    <div>
      {data.map((row, rowIndex) => (
        <div className="student" key={rowIndex}>
          <div className="row">
            <img src={Image} className="avatar"></img>{" "}
            <h3>Mahasiswa {rowIndex + 1}</h3>
          </div>
          {row.map((col, colIndex) => (
            <select
              key={colIndex}
              className="dropdown-input"
              value={col}
              onChange={(e) =>
                handleChange(Number(e.target.value), rowIndex, colIndex)
              }
              name={`penilaian${colIndex + 1}-${rowIndex + 1}`}
              id={`penilaian${colIndex + 1}-${rowIndex + 1}`}
            >
              {optionInput}
            </select>
          ))}
        </div>
      ))}
      <div className="buttonDiv">
        <button onClick={printData}>Simpan</button>
      </div>
    </div>
  );
}

export default Evaluation;
