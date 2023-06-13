import "./App.css";
import Evaluation from "./components/Evaluation";

function App() {
  return (
    <div className="App">
      <h1 className="title">Aplikasi Penilaian Mahasiswa</h1>
      <div className="table">
        <div className="header-table">
          <h3>
            Aspek <br></br> Penilaian 1
          </h3>
          <h3>
            Aspek<br></br> Penilaian 2
          </h3>
          <h3>
            Aspek <br></br>Penilaian 3
          </h3>
          <h3>
            Aspek <br></br>Penilaian 4
          </h3>
        </div>
        <Evaluation />
      </div>
    </div>
  );
}

export default App;
