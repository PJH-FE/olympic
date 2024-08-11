import { useState } from "react";
import Button from "./Button";

function Table({ list, setList }) {
  const [sortBy, setSortBy] = useState("gold");
  const handleSetSort = (e) => {
    setSortBy(e.target.value);
  };

  const deleteList = (medal) => {
    const delResult = list.filter((delCountry) => {
      return delCountry.country !== medal.country;
    });

    const sure = confirm("정말 삭제하시겠습니까?");
    if (sure) {
      console.log(delResult);
      setList(delResult);
      localStorage.setItem("medal", JSON.stringify(delResult));
    }
  };

  // 리스트 출력
  const writeMedalList = list
    .sort((a, b) => {
      return b[sortBy] - a[sortBy];
    })
    .map((medal) => (
      <tr id={medal.country} key={medal.country}>
        <td>{medal.country}</td>
        <td>{medal.gold}</td>
        <td>{medal.silver}</td>
        <td>{medal.bronze}</td>
        <td>
          <Button
            onClick={() => {
              deleteList(medal);
            }}
          >
            삭제
          </Button>
        </td>
      </tr>
    ));

  if (list.length === 0) {
    return <p>등록된 국가가 없습니다.</p>;
  }

  return (
    <>
      <select name="sortBy" id="sortBy" onChange={handleSetSort}>
        <option value="gold">정렬 방법</option>
        <option value="total">총 메달 갯수</option>
        <option value="gold">금메달 갯수</option>
        <option value="silver">은메달 갯수</option>
        <option value="bronze">동메달 갯수</option>
      </select>

      <table>
        <thead>
          <tr>
            <th width="30%" scope="col">
              국가
            </th>
            <th width="20%" scope="col">
              금메달
            </th>
            <th width="20%" scope="col">
              은메달
            </th>
            <th width="20%" scope="col">
              동메달
            </th>
            <th width="10%" scope="col"></th>
          </tr>
        </thead>
        <tbody>{writeMedalList}</tbody>
      </table>
    </>
  );
}

export default Table;
