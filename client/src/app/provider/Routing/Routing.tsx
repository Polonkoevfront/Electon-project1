import { Route, Routes } from "react-router";
import { CartPage, CategoryPage, FullProduct, HomePage } from "../../pages";

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/fullproduct" element={<FullProduct />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
};