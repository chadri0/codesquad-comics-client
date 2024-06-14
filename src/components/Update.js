import React, { useState, useEffect } from 'react';
import booksData from "../data/books";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [book, setBook] = useState({});
    const id = "608f68ce-d099-41e5-9961-cdd673257eb2";

    const {bookId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/8080/api/books/${bookId}`)
            .then((response) => response.json())
            .then((result) => {
                console.log("result :>>", result);
                setBook(result.data);
                navigate("/admin")
            })
            .catch((error) => console.log("error :>>", error));
    }, [bookId]);

    const updateSubmit = (e) => {
        e.preventDefault();
        console.log("Update submit handler ran.");
        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        // console.log(e.target.value) was returning "undefined" so I scoped the web for a better method to print out the input entries
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries

        fetch(`http://localhost:8080/api/books/update/${bookId}`, {
            method: "PUT",
            body: JSON.stringify(),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("result :>>", result);
            navigate("/admin");
        })
        .catch((error) => console.log("error :>>", error));
    };

    return (
      <div>
            <main>
        <h1>UPDATE COMIC</h1>
        <form action="#" className="update-comic-form" onSubmit={updateSubmit}>
            <div className="update-formfield">
           <label htmlFor="title">Title:</label>
           <input type="text" name="title" id="title" value={book.title} required/>
            </div>
            <div className="update-formfield">
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author" value={book.author} required/>
            </div>
            <div className="update-formfield">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher-select" required>
                    {booksData.map((book) => (
                        <option key={book._id} value={book.publisher}>{book.publisher}</option>
                    ))}
                </select>
            </div>
            <div className="update-formfield">
                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" value={book.genre} required/>
            </div>
            <div className="update-formfield">
                <label htmlFor="number-of-pages">Number of Pages:</label>
                <input type="text" name="number-of-pages" id="number-of-pages" value={book.pages} required/>
            </div>
            <div className="update-formfield">
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" value={book.rating} required/>
            </div>
            <div className="update-formfield">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea name="synopsis" id="synopsis" cols="28" rows="10" className="update-comic-synopsis" value={book.synopsis} required>synopsis value stored in database</textarea>
            </div>
            <button type="submit" className="update-comic-button">Submit</button>
        </form>
        </main>
      </div>
    )
   }

export default Update;