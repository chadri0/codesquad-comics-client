import React, { useState, useEffect } from 'react';
import booksData from "../data/books";

function Home() {
    const [books, setBooks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect(() => {
    //   setBooks(booksData);
    // }, []);

    useEffect(() => {
      fetch(`http://localhost:8080/api/books`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.statusCode === 200) {
            setBooks(result.data)
          } else {
              throw new Error(result.error.message)
            }
        })
        .catch((error) => setErrorMessage(error.message));
    }, []);

    console.log("books :>> ", books);
    console.log("errorMessage :>> ", errorMessage);
    

    return (
      <div>
        <section>
          <h1>CODESQUAD COMICS</h1>
          <p className="index-text">CodeSquad Comics is a collection of graphic novels read by Charlynne Ordonez. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta information about this collection. Login is only available to the site administrator at this time.</p>
        </section>


        <main>
        <h1>COMPLETE COLLECTION</h1>
        <div className="index-comic-collection">
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            books && books.map((book) =>(
              <div className={`index-comic ${book.title}-comic`} key={book._id}>
              <a href="#"><img src={`./images/${book.image}`} alt={`${book.title}-comic-cover`} className="index-comic-cover" style={{ width: '200px' }}/></a>
              <br/>
              <em>{book.title} </em>
              by {book.author}
              <br/>
              {book.rating} stars
              <br/>
              <a href={`/book/${book._id}`} className="index-details">Details</a>
              </div>
            ))
          )}
          <div>
          <button className="index-button">DISPLAY MORE</button>
        </div>
        </div>
      </main>
      </div>
    )
   }

export default Home;