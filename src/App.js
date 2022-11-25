import {Link, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Department_get from "./pages/Department_get";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="App">
      <div className="link-box">
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/test">[Test]</Link>
        <Link to="/department_get?id=101&msg=hello">컴공과</Link>
        <Link to="/department_get?id=102&msg=world">멀티미디어학과</Link>
      </div>

      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />

        {/* 서브라우팅 사용 */}
        <Route path="/about/*" element={<About />} />

        {/* GET 파라미터 사용 */}
        <Route path="/department_get" element={<Department_get />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
