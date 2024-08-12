import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const onSetList = (list) => {
    setList([...list]);
  };

  return (
    <>
      <div id="header">
        <h2 className="title">
          OMR
          <span>Olympic Medal Results</span>
        </h2>

        <Form list={list} updateList={onSetList} />
      </div>

      <div id="content">
        <Table list={list} setList={setList} />
      </div>
    </>
  );
}

export default App;
