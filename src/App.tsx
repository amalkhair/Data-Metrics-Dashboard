import { useEffect } from "react";
import M from "materialize-css";
import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import ByLanguage from "./Pages/Publications/ByLanguage.tsx";
import ByLicense from "./Pages/Publications/ByLicense.tsx";
import ByResearchField from "./Pages/Publications/ByResearchField.tsx";
import ByType from "./Pages/Publications/ByType.tsx";
import OverTime from "./Pages/Publications/OverTime.tsx";
import './index.css'
import './App.css'
function FAQ() {
    return null;
}

function App() {
    useEffect(() => {
        // Initialize Materialize JS components
        M.AutoInit();
    }, []);

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/by-language" element={<ByLanguage />} /> {/* New route */}
                <Route path="/by-license" element={<ByLicense />} />
                <Route path="/by-research-field" element={<ByResearchField />} />
                <Route path="/by-type" element={<ByType />} />
                <Route path="/over-time" element={<OverTime />} />
                <Route path="/by-license" element={<ByLicense />} />



            </Routes>
            {/*<Footer/>*/}

        </div>
    );
}

export default App;
