import "./Search.scss";
import prod from "../../../assets/products/snake-plant.webp"

import {MdClose} from "react-icons/md"
const Search = ({setshowSearch}) => {
    return(
        <div className="search-modal">
            <div className="form-field">
                <input 
                    type="text"
                    autoFocus
                    placeholder="Search for your garden"
                />
                <MdClose onClick={()=>setshowSearch(false)} className="close-btn"/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <div className="name">Product name</div>
                            <div className="desc">Product desc</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Search;
