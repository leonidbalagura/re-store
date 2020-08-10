import React, { Component } from "react";
import BookListItem from "../book-list-item";

import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import { connect } from "react-redux";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id} className="book-list-item">
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = {
  booksLoaded,
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
