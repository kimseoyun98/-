## 코드 설명

1. State Management

<State> React에서는 상태를 사용하여 컴포넌트의 데이터를 관리합니다. 상태가 변경되면 컴포넌트가 리랜더링됩니다.

- useState: 상태를 정의하고, 이를 업데이트하는 함수를 반환하는 hook.
- countries: 국가와 메달 정보를 저장하는 배열입니다.
- countryName, gold, silver, bronze: 사용자 입력을 저장하는 상태입니다.
- onUpdate: 업데이트 가능 모드 저장하는 상태입니다.

2. MedalForm

<Props> 부모 컴포넌트(App)로부터 전달받는 값입니다.

- countryName, setCountryName: 국가 이름을 입력받고 업데이트하는 함수입니다.
- gold, setGold: 금메달 수를 입력받고 업데이트하는 함수입니다.
- silver, setSilver: 은메달 수를 입력받고 업데이트하는 함수입니다.
- bronze, setBronze: 동메달 수를 입력받고 업데이트하는 함수입니다.
- onAdd, onUpdate: 추가와 업데이트 버튼 클릭 시 호출되는 함수입니다.
- onUpdate: 업데이트 함수를 나타냅니다.
- input: 사용자가 국가명과 메달 수를 입력합니다.
- e.target.value: onChange 이벤트가 발생하며 input 요소의 현재 입력된 값을 나타냅니다. 즉, 사용자가 <input> 필드에 입력한 텍스트가 e.target.value로 나타나게 됩니다.
- 버튼: 추가와 업데이트 버튼은 각각 onAdd와 onUpdate 함수를 호출합니다.
- onFocus: Focus 시 0을 비움
- onBlur: Focus 잃을 때 비어있으면 0으로 복원

3. addCountry

- alert: countryName이 비어 있으면 alert 표시합니다.
- 추가: countryName이 목록에 없으면 새 국가를 추가하고, 이미 존재하면 alert 표시합니다.

4. updateCountry

- alert: countryName이 비어 있으면 alert 표시합니다.
- 업데이트: countryName이 목록에 있으면 해당 국가의 메달 수를 업데이트합니다. 없으면 추가 버튼을 사용하라고 alert 표시합니다.

5. deleteCountry

- 국가 삭제: id에 해당하는 국가를 목록에서 필터링하여 제거합니다.

6. sortedCountries

- 정렬: 금메달 수를 기준으로 내림차순으로 정렬합니다.

## 요약

- input: 사용자가 국가명과 메달 수를 입력합니다.
- 추가 버튼 클릭: 새로운 국가를 목록에 추가하거나, 이미 목록에 있는 국가라면 기존 국가를 업데이트합니다.
- 업데이트 버튼 클릭: 기존 국가의 메달 수를 업데이트합니다.
- 삭제 버튼 클릭: 선택된 국가를 목록에서 삭제합니다.
- 목록 정렬: 금메달 수에 따라 국가 목록을 정렬합니다.
