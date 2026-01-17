import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/catalog" element={<HomePage/>}/> */}
                {/* <Route path="/blog" element={<HomePage/>}/> */}
                {/* <Route path="/pages" element={<HomePage/>}/> */}
                {/* <Route path="/about" element={<HomePage/>}/> */}
            </Routes>
        </>
    )
};