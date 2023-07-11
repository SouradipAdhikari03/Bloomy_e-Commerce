import "./Category.scss";

import cat1 from "../../../assets/category/indoor-plant.webp"
import cat2 from "../../../assets/category/outdoor-plant.webp"
import cat3 from "../../../assets/category/insecticides.jpg"
import cat4 from "../../../assets/category/fertilizers.jpg"
import cat5 from "../../../assets/category/tools.avif"
import cat6 from "../../../assets/category/books.jpg"

const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} alt="" />
                </div>
                <div className="category">
                    <img src={cat2} alt="" />
                </div>
                <div className="category">
                    <img src={cat3} alt="" />
                </div>
                <div className="category">
                    <img src={cat4} alt="" />
                </div>
                <div className="category">
                    <img src={cat5} alt="" />
                </div>
                <div className="category">
                    <img src={cat6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;
