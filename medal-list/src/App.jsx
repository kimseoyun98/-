import React, { useState } from "react";
import "./App.css";
import MedalForm from "./MedalForm";

// const MedalForm = ({ countryName, setCountryName, gold, setGold, silver, setSilver, bronze, setBronze, onAdd, onUpdate }) => {
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <label>
//               국가명:
//               <input
//                 type="text"
//                 value={countryName}
//                 placeholder="국가명을 입력하세요"
//                 onChange={(e) => setCountryName(e.target.value)}
//               />
//             </label>
//           </td>
//           <td>
//             <label>
//               금메달:
//               <input
//                 type="number"
//                 value={gold}
//                 placeholder="메달 수를 입력하세요"
//                 className="bottom border"
//                 onChange={(e) => setGold(Number(e.target.value))}
//               />
//             </label>
//           </td>
//           <td>
//             <label>
//               은메달:
//               <input
//                 type="number"
//                 value={silver}
//                 placeholder="메달 수를 입력하세요"
//                 className="bottom border"
//                 onChange={(e) => setSilver(Number(e.target.value))}
//               />
//             </label>
//           </td>
//           <td>
//             <label>
//               동메달:
//               <input
//                 type="number"
//                 value={bronze}
//                 placeholder="메달 수를 입력하세요"
//                 className="bottom border"
//                 onChange={(e) => setBronze(Number(e.target.value))}
//               />
//             </label>
//           </td>
//           <td>
//             <button className="button" onClick={onAdd}>
//               추가
//             </button>
//             <button className="button" onClick={onUpdate}>
//               업데이트
//             </button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const resetForm = () => {
    setCountryName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const isExistingCountry = countries.some(
    (country) => country.name === countryName
  );

  const addCountry = () => {
    if (!countryName.trim()) {
      alert("국가명을 입력해주세요.");
      return;
    }

    const existingCountry = countries.find(
      (country) => country.name === countryName
    );

    if (!existingCountry) {
      const newCountry = {
        id: new Date().getTime(),
        name: countryName,
        gold,
        silver,
        bronze,
      };
      setCountries([...countries, newCountry]);
    } else {
      alert("이미 존재하는 국가명입니다. 업데이트 버튼을 사용해 주세요.");
    }

    resetForm();
  };

  const updateCountry = () => {
    if (!countryName.trim()) {
      alert("국가명을 입력해주세요.");
      return;
    }

    const existingCountry = countries.find(
      (country) => country.name === countryName
    );

    if (existingCountry) {
      const updatedCountries = countries.map((country) =>
        country.name === countryName
          ? { ...country, gold, silver, bronze }
          : country
      );
      setCountries(updatedCountries);
      alert(`${countryName}의 메달 수가 업데이트되었습니다.`);
    } else {
      alert("존재하지 않는 국가입니다. 추가 버튼을 사용해 주세요.");
    }

    resetForm();
  };

  const deleteCountry = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold);

  return (
    <div className="container">
      <h1>🥇2024 파리올림픽🥇</h1>
      <MedalForm
        countryName={countryName}
        setCountryName={setCountryName}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        onAdd={addCountry}
        onUpdate={updateCountry}
        isUpdateMode={isExistingCountry} // 국가가 존재하면 업데이트 버튼 활성화
      />
      <div>
        {sortedCountries.length === 0 ? (
          <p>💥 메달을 추가해보세요! 💥</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {sortedCountries.map((country) => (
                <tr key={country.id}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    <button onClick={() => deleteCountry(country.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default App;
