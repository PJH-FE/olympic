import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const Form = (props) => {
  // App.jsx로 리스트 전송
  const updateList = (list) => {
    props.updateList(list);
  };

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
    e.preventDefault();
    if (country.length === 0) {
      return alert("국가명을 입력해주세요.");
    } else if (!!document.getElementById(country.trim())) {
      return alert("이미 등록된 국가입니다.");
    }

    setCountry("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
    setMedalList([
      ...props.list,
      {
        country: country.trim(),
        gold: Number(goldMedal),
        silver: Number(silverMedal),
        bronze: Number(bronzeMedal),
        total: Number(goldMedal) + Number(silverMedal) + Number(bronzeMedal),
      },
    ]);

    document.getElementById("country").focus();

    const saveData = JSON.stringify([
      ...props.list,
      {
        country: country.trim(),
        gold: Number(goldMedal),
        silver: Number(silverMedal),
        bronze: Number(bronzeMedal),
        total: Number(goldMedal) + Number(silverMedal) + Number(bronzeMedal),
      },
    ]);

    localStorage.setItem("medal", saveData);
    updateList(JSON.parse(saveData));
  };

  const handleModifyMedalList = (e) => {
    e.preventDefault();
    if (document.getElementById("country").value.length === 0) {
      return alert("국가명을 입력해주세요.");
    }
    const matchCountry = medalList.filter((list) => {
      return list.country === country.trim();
    });
    if (matchCountry.length === 0) {
      alert("일치하는 국가가 없습니다.");
    } else {
      matchCountry[0].gold = Number(goldMedal);
      matchCountry[0].silver = Number(silverMedal);
      matchCountry[0].bronze = Number(bronzeMedal);
      matchCountry[0].total =
        Number(goldMedal) + Number(silverMedal) + Number(bronzeMedal);
    }

    setCountry("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);

    localStorage.setItem("medal", JSON.stringify(medalList));
    updateList(medalList);
  };

  window.onload = () => {
    const loadData = localStorage.getItem("medal");
    if (medalList.length === 0 && loadData !== null && loadData.length !== 0) {
      setMedalList(JSON.parse(loadData));
      updateList(JSON.parse(loadData));
    }
  };
  return (
    <form id="inputArea">
      <div className="inputBox">
        <label htmlFor="country">국가</label>
        <Input
          type={"text"}
          onChange={handleSetCountry}
          value={country}
          id={"country"}
          placeholder={"국가명을 입력하세요"}
        />
      </div>

      <div className="inputBox">
        <label htmlFor="country">금메달</label>
        <Input
          type={"number"}
          onChange={handleSetGold}
          value={goldMedal}
          id={"gold"}
        />
      </div>

      <div className="inputBox">
        <label htmlFor="silver">은메달</label>
        <Input
          type={"number"}
          onChange={handleSetSilver}
          value={silverMedal}
          id={"silver"}
        />
      </div>

      <div className="inputBox">
        <label htmlFor="bronze">동메달</label>
        <Input
          type={"number"}
          onChange={handleSetBronze}
          value={bronzeMedal}
          id={"bronze"}
        />
      </div>

      <div className="buttonArea">
        <Button onClick={handleAddMedalList}>국가 추가</Button>
        <Button onClick={handleModifyMedalList}>업데이트</Button>
      </div>
    </form>
  );
};
export default Form;
