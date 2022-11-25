import {Link, Routes, Route} from "react-router-dom";

import MainSub1 from "./MainSub1";
import MainSub2 from "./MainSub2";

const About = () => {
    return (
        <>
            <h1>About.js임</h1>

            <Link to="sub1">서브1</Link>
            <Link to="sub2">서브2</Link>

            {/* 서브라우팅은 상대경로로 */}
            <Routes>
                <Route path="sub1" element={<MainSub1 />} />
                <Route path="sub2" element={<MainSub2 />} />
            </Routes>
        </>
    )
}

export default About;