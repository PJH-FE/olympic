import React from "react";
import Button from "./Button";

function Table({ medalList, setMedalList }) {
  // 리스트 출력
  const writeMedalList = medalList
    .sort((a, b) => {
      return b.gold - a.gold;
    })
    .map((medal) => (
      <tr key={medal.country}>
        <td>{medal.country}</td>
        <td>{medal.gold}</td>
        <td>{medal.silver}</td>
        <td>{medal.bronze}</td>
        <td>
          <Button
            onClick={() => {
              setMedalList(
                medalList.filter((delCountry) => {
                  return delCountry.country !== medal.country;
                })
              );
            }}
            name={"X"}
          />
        </td>
      </tr>
    ));

  if (medalList.length === 0) {
    return <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">국가</th>
            <th scope="col">금메달</th>
            <th scope="col">은메달</th>
            <th scope="col">동메달</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>{writeMedalList}</tbody>
      </table>
    </>
  );
}

export default Table;
