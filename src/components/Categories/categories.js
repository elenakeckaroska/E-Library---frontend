import React from "react";



const categories = (props) => {
    return (
        <div>
            <div className="row mt-5 row-cols-3 justify-content-center">
                {props.categories.map((term) => {
                    return(
                        <div className="card text-white bg-dark mb-3 col mx-2" style={{width: "18rem"}}>
                            <div className="card-header">Card category</div>
                            <div className="card-body">

                                <p className="card-text">{term.toString().toLowerCase()}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        {/*<div className={"container mm-4 mt-5"}>*/}
        {/*    <div className={"row"}>*/}
        {/*        <div className={"row"}>*/}
        {/*            <table className={"table table-striped"}>*/}
        {/*                <thead>*/}
        {/*                <tr>*/}
        {/*                    <th scope={"col"}> Name </th>*/}
        {/*                </tr>*/}
        {/*                </thead>*/}
        {/*                <tbody>*/}
        {/*                {props.categories.map((term) => {*/}
        {/*                    return(*/}
        {/*                        <tr>*/}
        {/*                            <td>{term}</td>*/}
        {/*                        </tr>*/}
        {/*                    )*/}
        {/*                })}*/}
        {/*                </tbody>*/}
        {/*            </table>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        </div>
    );
}

export default categories;