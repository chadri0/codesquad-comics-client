import React from 'react';
import booksData from "../data/books";

const Admin = () => {
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
                {booksData.map((book) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td><button className="admin-edit-button">EDIT</button></td>
                    <td><button className="admin-delete-button">DELETE</button></td>
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