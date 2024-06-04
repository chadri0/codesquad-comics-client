import React, { useState, useEffect } from 'react';
import booksData from "../data/books";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      setBooks(booksData);
    }, []);

    return (
      <div>
        <section>
          <h1>CODESQUAD COMICS</h1>
          <p className="index-text">CodeSquad Comics is a collection of graphic novels read by Charlynne Ordonez. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta information about this collection. Login is only available to the site administrator at this time.</p>
        </section>


        <main>
        <h1>COMPLETE COLLECTION</h1>
        <div className="index-comic-collection">
          {books.map((book) => (
            <div className={`index-comic ${book.title}-comic`} key={book._id}>
              <a href="#"><img src={`./images/${book.image}`} alt={`${book.title}-comic-cover`} className="index-comic-cover"/></a>
              <br/>
              <em>{book.title}</em>
              by {book.author}
              <br/>
              {book.rating} stars
              <br/>
              <a href="#" className="index-details">Details</a>
            </div>
          ))}
        </div> 
        <div>
          <button className="index-button">DISPLAY MORE</button>
        </div>
      </main>
      </div>
    )
   }

export default Home;