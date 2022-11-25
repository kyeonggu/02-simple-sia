import {useLocation} from "react-router-dom";

const Department_get = () => {
    const location = useLocation();             // 현재 URL의 정보를 저장한다.
    const {search} = location;                  // 현재 URL의 ? 부터시작하는 모든 정보를 가져온다.
    const query = new URLSearchParams(search);  // 현재 URL의 정보를 가져온다.
    const params = Object.fromEntries(query);   // 가져온 URL 정보를 JSON 형태로 변환해서 저장한다.
    const {id, msg} = params;                   // params에 저장된 정보들을 각각 id, msg라는 변수에 저장한다.

    const departmentList = {
        item: [
            {id: 101, dname : "컴퓨터공학과", loc : "1호관"},
            {id: 102, dname : "멀티미디어학과", loc : "2호관"},
        ]
    }

    let departmentItem = departmentList.item.find((v, i) => v.id === parseInt(id));             // departmentList에서 id값이 해당 URL의 아이디와 일치하는 지 비교한다.

    if (!departmentItem) {                                                                      // 만약 일치하지 않는다면 존재하지 않는다는 DOM을 return 한다.
        return (<h3>존재하지 않습니다.</h3>)
    }
    
    return (
        <>
            <h2>{departmentItem.dname}</h2>
            <p>{departmentItem.id}</p>
            <p>{departmentItem.loc}</p>
        </>
    )
}

export default Department_get