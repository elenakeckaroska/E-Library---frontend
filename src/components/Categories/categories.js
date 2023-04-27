import React from "react";


const textFormat = (category) => {
    return (
        category.toString().charAt(0) + category.substring(1, category.length).toString().toLowerCase()
    );
}
const categories = (props) => {
    return (
        <div>
            <div className="row m-5 row-cols-3 justify-content-center">
                {props.categories.map((term) => {
                    return(
                        <div className="card border-dark m-3" style={{width: "15rem;"}}>
                            <div className="card-header">Book category</div>
                            <div className="card-body">

                                <p className="card-text">{textFormat(term)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default categories;