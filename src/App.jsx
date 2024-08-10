import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Table from "./components/Table";
import "./App.css";

function App() {
  // 국가
  const [country, setCountry] = useState("");
  const handleSetCountry = (e) => {
    setCountry(e.target.value);
  };

  // 금메달
  const [goldMedal, setGoldMedal] = useState(0);
  const handleSetGold = (e) => {
    setGoldMedal(e.target.value);
  };

  // 은메달
  const [silverMedal, setSilverMedal] = useState(0);
  const handleSetSilver = (e) => {
    setSilverMedal(e.target.value);
  };

  // 동메달
  const [bronzeMedal, setBronzeMedal] = useState(0);
  const handleSetBronze = (e) => {
    setBronzeMedal(e.target.value);
  };

  // Add 버튼
  const [medalList, setMedalList] = useState([]);
  const handleAddMedalList = (e) => {
    setCountry("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
    setMedalList([
      ...medalList,
      {
        country: country,
        gold: goldMedal,
        silver: silverMedal,
        bronze: bronzeMedal,
      },
    ]);
  };

  const handleModifyMedalList = (e) => {
    medalList.map((list) => {
      if (list.country === country) {
        list.gold = goldMedal;
        list.silver = silverMedal;
        list.bronze = bronzeMedal;
      }
    });
    setCountry("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };
  return (
    <>
      <div id="header">
        <h2 className="title">
          OMR
          <span>Olympic Medal Results</span>
        </h2>

        <div id="inputArea">
          <Input type={"text"} onChange={handleSetCountry} value={country} />
          <Input type={"number"} onChange={handleSetGold} value={goldMedal} />
          <Input
            type={"number"}
            onChange={handleSetSilver}
            value={silverMedal}
          />
          <Input
            type={"number"}
            onChange={handleSetBronze}
            value={bronzeMedal}
          />
          <Button onClick={handleAddMedalList} name={"국가 추가"} />
          <Button onClick={handleModifyMedalList} name={"업데이트"} />
        </div>
      </div>

      <Table medalList={[...medalList]} setMedalList={setMedalList} />
    </>
  );
}

export default App;
