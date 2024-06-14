import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import booksData from "../data/books";

const Admin = () => {
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
      fetch("http://localhost:8080/api/books")
        .then((response) => response.json())
        .then((result) => setBooks(result.data))
        .catch((error) => console.log("error :>>", error));
    }, []);

    const handleDeleteBook = (bookId) => {
      fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => console.log("result :>>", result))
        .catch((error) => console.log("error :>>", error))
    };

    return (
      <div>
        <main>
          <h1>ADMIN PAGE</h1>
          <div className="admin-new-comic-button">
            <button className="admin-button">ADD NEW COMIC</button>
          </div>
          <div className="table">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>COMIC TITLE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>
                      <button className="button-blue" onClick={() => navigate(`/books/${book._id}`)}>
                        UPDATE
                      </button>
                    </td>
                    <td>
                      <button className="button-yellow" onClick={() => handleDeleteBook(book._id)}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    )
   }

export default Admin;