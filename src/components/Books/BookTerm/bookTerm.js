import React from "react";
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.bookCategory}</td>
            <td>{props.term.author.name + " " + props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <div class="col">

                    <a title={"Delete"} className={"btn btn-danger mx-2"}
                       onClick={() => props.onDelete(props.term.id)}>
                        Delete
                    </a>
                    <Link className={"btn btn-info ml-2  mx-2"}  onClick={() => props.onEdit(props.term.id)}
                          to={`/books/edit/${props.term.id}`}>
                        Edit
                    </Link>
                    <a className={"btn btn-outline-info mx-2"} onClick={() => props.onBorrow(props.term.id)}>
                        Mark as taken
                    </a>
                </div>

            </td>
        </tr>
    )
}

export default bookTerm;