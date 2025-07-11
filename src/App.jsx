import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task1 from "../containers/Task1";
import Task2 from "../containers/Task2";

function App() {
    return (
        <Router>
            <div className="flex gap-4 p-4">
                <Link to="/task1">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Task One</button>
                </Link>
                <Link to="/task2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded">Task Two</button>
                </Link>
            </div>

            <Routes>
                <Route path="/task1" element={<Task1 />} />
                <Route path="/task2" element={<Task2 />} />
            </Routes>
        </Router>
    );
}

export default App;
