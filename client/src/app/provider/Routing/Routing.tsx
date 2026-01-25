import { Route, Routes } from "react-router";
import { CartPage, CategoryPage, HomePage } from "../../pages";

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category" element={<CategoryPage />} />
                {/* <Route path="/blog" element={<HomePage/>}/> */}
                <Route path="/cart" element={<CartPage />} />
                {/* <Route path="/about" element={<HomePage/>}/> */}
            </Routes>
        </>
    )
};