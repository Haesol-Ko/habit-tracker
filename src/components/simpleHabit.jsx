import React, {useCallback, useEffect, useRef, useState} from 'react';

/**
 *  🌟🌟🌟 function component는 prop이나 state가 업데이트되면 컴포넌트 전체가 반복해서 호출됨.
  */
const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    /**
     * React.createRef()는 계속 새로운 ref를 할당하게 됨!! useRef는 hook에서 값을 한번만 만들고 메모리에 저장해서 재사용! 계속 새로운 ref를 만들지 않음.
     */
    const spanRef = useRef();

    /**
     *  기존 함수는 계속 새로운 callback을 만들게 됨!! 메모를 써도 함수자체가 계속 변경돼서 컴포넌트가 계속 업데이트 되는 side Effect 발생
     *  => useCallback은 리액트가 알아서 캐시를 해서 동일한 콜백함수를 전달함!
     */
    const handleIncrement = useCallback(() => {
        setCount(count + 1 );
    });

    /**
     * mount, update 될 때 모두 탐!
     * 맨 처음 Mount 됐을 때만 타게 하고 싶다면 두번째 인자에 '[]'를 넣어주면 됨.
     */
    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    }, [count]);
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;