import React from "react";

const MedalForm = ({
  countryName,
  setCountryName,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
  onAdd,
  onUpdate,
  
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label>
              국가명:
              <input
                type="text"
                value={countryName}
                placeholder="국가명을 입력하세요"
                onChange={(e) => setCountryName(e.target.value)}
              />
            </label>
          </td>
          <td>
            <label>
              금메달:
              <input
                type="number"
                value={gold}
                placeholder="메달 수를 입력하세요"
                onChange={(e) => setGold(Number(e.target.value))}
                onFocus={(e) => e.target.value === '0' && setGold('')}
                onBlur={(e) => e.target.value === '' && setGold(0)}
              />
            </label>
          </td>
          <td>
            <label>
              은메달:
              <input
                type="number"
                value={silver}
                placeholder="메달 수를 입력하세요"
                onChange={(e) => setSilver(Number(e.target.value))}
                onFocus={(e) => e.target.value === '0' && setSilver('')} 
                onBlur={(e) => e.target.value === '' && setSilver(0)} 
              />
            </label>
          </td>
          <td>
            <label>
              동메달:
              <input
                type="number"
                value={bronze}
                placeholder="메달 수를 입력하세요"
                onChange={(e) => setBronze(Number(e.target.value))}
                onFocus={(e) => e.target.value === '0' && setBronze('')}
                onBlur={(e) => e.target.value === '' && setBronze(0)} 
              />
            </label>
          </td>
          <td>
            <button className="button" onClick={onAdd}>
              추가
            </button>
            <button className="button" onClick={onUpdate}>
              업데이트
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MedalForm;
