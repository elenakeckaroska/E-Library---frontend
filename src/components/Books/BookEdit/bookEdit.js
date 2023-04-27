import React from "react";
import {useHistory} from "react-router-dom";

const BookEdit = (props) => {
    const history = useHistory();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "CLASSICS",
        author: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== props.book.name ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, author, availableCopies);
        history.push("/books")

    }
    console.log(formData)

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book title</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.book.name}
                               onChange = {handleChange}

                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" className="form-control" onChange = {handleChange}>
                            {props.categories.map((term) => {
                                if (props.book.category !== undefined)
                                    return <option defaultValue={props.book.category}
                                                   value={term}>{term}</option>
                                else
                                    return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <select name="author" id="author" className="form-control" onChange = {handleChange}>
                            {props.authors.map((term) =>{
                                if(props.book.author !== undefined && props.book.author.id === term.id)
                                    return  <option selected={props.book.author.name + " " + props.book.author.surname}
                                                    value={term.id}>
                                        {term.name + " " + term.surname}</option>
                                else
                                    return  <option value={term.id}>{term.name + " " + term.surname}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               ={props.book.availableCopies}
                               onChange = {handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;