import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Categories from "../Categories/categories";
import ELibraryService from "../../repository/eLibraryRepository";
import Header from "../Header/header";
import Books from "../Books/BooksList/books";
import BookAdd from "../Books/BookAdd/bookAdd";
import books from "../Books/BooksList/books";
import BookEdit from "../Books/BookEdit/bookEdit";


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        categories : [],
        books : [],
        authors : [],
        selectedBook : {}
    }
  }

  render() {
      return (
        <Router>
            <Header></Header>
            <main>
              <div className={"container"}>
                <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>}/>


                  <Route path={"/books/edit/:id"} exact render={() => <BookEdit authors={this.state.authors}
                                                                          categories={this.state.categories}
                                                                                onEditBook={this.editBook}
                                                                                book={this.state.selectedBook}/>}/>

                  <Route path={"/books/add"} exact render={() => <BookAdd authors={this.state.authors}
                                                                          categories={this.state.categories}
                                                                          onAddBook={this.addBook}/>}/>

                  <Route path={"/books"} exact render={() => <Books books={this.state.books}
                                                                    onEdit={this.getBook}
                                                                    onDelete={this.deleteBook}
                                                                    onBorrow={this.markAsTakenBook}/>}/>
                  <Route path={"/"} exact render={() => <Books books={this.state.books}
                                                                    onEdit={this.getBook}
                                                                    onDelete={this.deleteBook}
                                                                    onBorrow={this.markAsTakenBook}/>}/>

              </div>
            </main>
        </Router>
    )
  }

  loadCategories = () => {
    ELibraryService.fetchCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          })
        })
  }
  loadBooks = () => {
      ELibraryService.fetchBooks()
          .then((data) => {
              this.setState({
                  books: data.data
              })
          })

  }
  loadAuthors = () => {
      ELibraryService.fetchAuthors()
          .then((data) => {
              this.setState({
                  authors: data.data
              })
          })
  }
  addBook = (name, category, author, availableCopies) => {
      ELibraryService.addProduct(name, category, author, availableCopies)
          .then(() => {
              this.loadBooks();
          })
  }

    editBook = (id, name, category, author, availableCopies) => {
        ELibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) => {
      ELibraryService.getBook(id)
          .then((data) => {
              this.setState({
                  selectedBook : data.data
              })
          })
    }

    deleteBook = (id) => {
      ELibraryService.deleteBook(id)
          .then(() => {
              this.loadBooks();
          })
    }

    markAsTakenBook = (id) => {
      ELibraryService.borrowBook(id)
          .then(() => {
              this.loadBooks();
          })
    }

  componentDidMount() {
    this.loadCategories();
    this.loadBooks();
    this.loadAuthors();
  }
}

export default App;
