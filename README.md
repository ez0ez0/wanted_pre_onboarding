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

# Toggle.js

- 구현한 방법과 이유
: toggle이라는 변수를 useState를 사용해서 토글버튼의 왼쪽(left)영역, 오른쪽(right)영역을 클릭했을 때, 클릭한 영역의 value(left, right)로 영역을 구분하여 따라 상태값을 false, true로 변동되도록 설정했다. toggle값에 따라서 토글 버튼안의 타원(`<Circle>`)의 className을 변경(`on<-->off`) 하도록하여 위치 변경을 시켰다. ` transition: all 0.6s ease-out;`으로 이동되는 것이 움직이는 것이 슬라이드동작으로 나타나게 하였다. useState를 사용한 이유는 리액트는 state가 수정이 일어나면 state가 포함된 DOM을 재렌더링 해주기 때문에 값이 변동될 때마다 화면에 바로 나타낼 수 있기 때문이다.

<br /> <br />

# Tab.js

- 구현한 방법과 이유
: 위의 토글버튼 구현과 유사한 방법으로 구현하였다. select라는 변수를 useState를 사용한 상태값으로 설정한다. select를 클릭한 메뉴 영역의 data-value값으로 변동되도록 설정한다. 스타일컴포넌트를 이용하여 Underline컴포넌트에 select값을 props로 넘겨주고 select에 따라 margin-left값이 변하도록하여 선택한 메뉴 밑으로 Underline이 이동하도록 한다. 스타일 컴포넌트를 사용한 이유는 JS파일에 작성된 변수를 props로 넘겨주어 css에서 사용할 수 있어서 동적으로 css를 활용하기 편리하기때문에 사용하게 되었다. 

<br /> <br />

# Slider.js

- 구현한 방법과 이유에 대한 간략한 내용, 구현하면서 어려웠던 점과 해결 과정과 방법
: toggle이라는 변수를 useState를 사용해서 토글버튼의 왼쪽(left)영역, 오른쪽(right)영역을 클릭했을 때, 클릭한 영역에 따라 상태값을 false, true로 변동되도록 설정했다. toggle값에 따라서 토글 버튼안의 타원(`<Circle>`)의 className을 변경(`on<-->off`) 하도록하여 위치 변경을 시켰다. ` transition: all 0.6s ease-out;`으로 이동되는 것이 움직이는 것이 슬라이드동작으로 나타나게 하였다.

<br /> <br />

# Input.js

- 구현한 방법과 이유
: input태그에 이메일을 입력받아서 그 값을 정규표현식을 사용하여 match 메소드를 통해 입력된 이메일주소 형식의 맞고 틀림을 확인하였다. correct에 이것의 상태값을 저장하여 img태그에 correct값이 true라면 파란체크icon의 주소가 입력되도록, false라면 검은체크icon이 입력되도록 하여 시각적으로 이메일주소형식이 옳은지를 확인할 수 있도록 하였다. 그리고 이메일input에 onBlur라는 이벤트를 사용하여 입력한이메일주소형식이 틀린채로 다른 곳으로 focus가 이동되면 spanState가 true가 되어 이메일 입력박스 하단에 빨간색 주의 문구가 나타나도록하였다. 패스워드도 input태그로 입력가능하게 하였고, 오른쪽에 위치한 icon 클릭에 따라 viewPassword라는 상태값이 변하여 input의 type 값을 'text' 또는 'password'로 변동되게 하였다. 따라서 input에 입력된 값이 'password'면 노출되지 않게 되고, 'text'면 노출되게 된다.  

<br /> <br />

# Dropdown.js

- 구현한 방법과 이유에 대한 간략한 내용, 구현하면서 어려웠던 점과 해결 과정과 방법
: toggle이라는 변수를 useState를 사용해서 토글버튼의 왼쪽(left)영역, 오른쪽(right)영역을 클릭했을 때, 클릭한 영역에 따라 상태값을 false, true로 변동되도록 설정했다. toggle값에 따라서 토글 버튼안의 타원(`<Circle>`)의 className을 변경(`on<-->off`) 하도록하여 위치 변경을 시켰다. ` transition: all 0.6s ease-out;`으로 이동되는 것이 움직이는 것이 슬라이드동작으로 나타나게 하였다.

<br /> <br />


		
		
