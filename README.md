# wanted_pre_onboarding

```js
/src
	App.js
	App.css
	/components
		Toggle.js
		Tab.js
		Slider.js
		Input.js
		Dropdown.js
```

<br /> <br />

# 구현한 방법과 이유

## Toggle.js
: toggle이라는 변수를 useState를 사용해서 토글버튼의 왼쪽(left)영역, 오른쪽(right)영역을 클릭했을 때, 클릭한 영역의 value(left, right)로 영역을 구분하여 따라 상태값을 false, true로 변동되도록 설정했다. toggle값에 따라서 토글 버튼안의 타원(`<Circle>`)의 className을 변경(`on<-->off`) 하도록하여 위치 변경을 시켰다. ` transition: all 0.6s ease-out;`으로 이동되는 것이 움직이는 것이 슬라이드동작으로 나타나게 하였다. useState를 사용한 이유는 리액트는 state가 수정이 일어나면 state가 포함된 DOM을 재렌더링 해주기 때문에 값이 변동될 때마다 화면에 바로 나타낼 수 있기 때문이다.

<br /> 

## Tab.js
: 위의 토글버튼 구현과 유사한 방법으로 구현하였다. select라는 변수를 useState를 사용한 상태값으로 설정한다. select를 클릭한 메뉴 영역의 data-value값으로 변동되도록 설정한다. 스타일컴포넌트를 이용하여 Underline컴포넌트에 select값을 props로 넘겨주고 select에 따라 margin-left값이 변하도록하여 선택한 메뉴 밑으로 Underline이 이동하도록 한다. 스타일 컴포넌트를 사용한 이유는 JS파일에 작성된 변수를 props로 넘겨주어 css에서 사용할 수 있어서 동적으로 css를 활용하기 편리하기때문에 사용하게 되었다. 

<br /> 

## Slider.js
: 슬라이드 값이 나타나는 영역(`<div>`)과 슬라이드를 움직이는 Slide컴포넌트를 구성한다. Slide컴포넌트 내부에는 뼈대가 되는 구조들(슬라이드영역의 회색부분, 슬라이드 밑에 ~%를 나타낸 부분)을 먼저 입력하고 LineBar컴포넌트를 입력하였다. LineBar는 마우스가 클릭,드래그되는 것에 따라 색이 채워지는 효과를 나타내는 영역이다. 이 것을 마지막에 쓴 이유는 슬라이드영역의 회색부분 위로 올라와야하기 때문이다. LineBar에 스타일을 `position: relative; top: -54px;`을 입력하여 회색영역 위로 덮어지게 만들어준다. 
LineBar영역에서 onMouseDown 이벤트가 발생하게 되면 move상태값을 true로 변경한다. onMouseUp 이벤트가 발생하게 되면 move는 false가 된다. 이는 클릭+드래그일때만 LineBar의 넓이가 넓어지도록 관리하기 위해서이다. 즉, onMouseMove 이벤트가 일어나면 move의 상태값이 true일때만 lineWidth의 상태값을 변경하여 mouse위치에 따라 Slide가 채워지게 된다.
mouse가 움직이면 e.clientX를 측정하여 창의 왼쪽끝에서 mouse의 위치를 측정하고, 이것에 lineBar가 창의 왼쪽으로부터 떨어진 정도( `document.getElementById('lineBar').getClientRects()[0].x` )를 빼준다. 그럼 lineBar내에서 mouse의 x 위치를 알 수 있는데 이를 계산하여 Slide의 채워지는 정도를 표현한다.

<br /> 

## Input.js
: input태그에 이메일을 입력받아서 그 값을 정규표현식을 사용하여 match 메소드를 통해 입력된 이메일주소 형식의 맞고 틀림을 확인하였다. correct에 이것의 상태값을 저장하여 img태그에 correct값이 true라면 파란체크icon의 주소가 입력되도록, false라면 검은체크icon이 입력되도록 하여 시각적으로 이메일주소형식이 옳은지를 확인할 수 있도록 하였다. 그리고 이메일input에 onBlur라는 이벤트를 사용하여 입력한이메일주소형식이 틀린채로 다른 곳으로 focus가 이동되면 spanState가 true가 되어 이메일 입력박스 하단에 빨간색 주의 문구가 나타나도록하였다. 패스워드도 input태그로 입력가능하게 하였고, 오른쪽에 위치한 icon 클릭에 따라 viewPassword라는 상태값이 변하여 input의 type 값을 'text' 또는 'password'로 변동되게 하였다. 따라서 input에 입력된 값이 'password'면 노출되지 않게 되고, 'text'면 노출되게 된다.  

<br /> 

## Dropdown.js
: SelectBox를 클릭하면 dropMenu의 상태값이 true가 되어 DropMenu가 나타나게 된다. DropMenu는 검색창영역과 리스트 영역으로 나뉘게 된다. input에 입력된 검색어에 따라 리스트는 필터되게 되는데, list에 배열의 형태로 리스트에 뿌려지는 값을 할당해놓고 list.map을 통해 검색어(searchWord)가 포함된 리스트값만 나타나게 한다. 이 때 포함여부는 includes 메소드를 사용한다. 검색어를 입력하지 않았을 시('')를 따로 if문으로 설정해, 이때는 리스트에 원래 값이 모두 나타나게 한다.
리스트 중의 한 값을 선택하면 selected 상태값에 이 값을 저장하여 SelectBox에 나타나게하고, dropMenu 상태값이 false가 되어 DropMenu를 사라지게 한다. 

<br /> 

<br /> <br />

# 구현하면서 어려웠던 점, 해결 과정과 방법 
: `Slider.js`를 구현할 때가 가장 힘들었는데, 드래그한 만큼의 위치에 따라 bar의 넓이를 변경시켜주어야하는 점이 어려웠다. 이전에 draggable box 구현을 공부하면서 mouse와 관련된 여러 이벤트를 공부했던 것이 도움이 되어 onMouseDown, onMouseUp, onMouseMove 이벤트를 이용해서 문제를 해결할 수 있었다. 채워지는 linebar가 회색바 위로 정확하게 겹쳐저야하는 부분은 크롬 개발자모드를 이용해서 px값을 조절하면서 값을 얻어낼 수 있었다.



		
		
