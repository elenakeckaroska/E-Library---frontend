import axios from "../custom-axios/axios";
import books from "../components/Books/BooksList/books";

const ELibraryService = {
    fetchCategories: () => {
        return axios.get("/categories")
    },

    fetchBooks : () => {
        return axios.get("/books")
    },

    fetchAuthors : () => {
        return axios.get("/authors")
    },

    addProduct: (name, category, author, availableCopies) => {
        return axios.post("/books/add",{
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        })
    },

    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`,{
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        })
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },

    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },

    borrowBook: (id) => {
        return axios.put(`/books/borrow/${id}`)
    }
}

export default ELibraryService;