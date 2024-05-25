import React from 'react';

const Update = () => {
    return (
      <div>
            <main>
        <h1>UPDATE COMIC</h1>
        <form action="#" className="update-comic-form">
            <div className="update-formfield">
           <label htmlFor="title">Title:</label>
           <input type="text" name="title" id="title" value="title value stored in database"/>
            </div>
            <div className="update-formfield">
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author" value="author value stored in database"/>
            </div>
            <div className="update-formfield">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher-select">
                    <option value="boom-box">BOOM! Box</option>
                    <option value="dc-comics">DC Comics</option>
                    <option value="harry-n-abrams">Harry N. Abrams</option>
                    <option value="icon-books">Icon Books</option>
                    <option value="image-comics">Image Comics</option>
                    <option value="marvel">Marvel</option>
                    <option value="simon-and-schuster">Simon & Schuster</option>
                    <option value="top-shelf-productions">Top Shelf Productions</option>
                    <option value="vix-media-llc">VIZ Media LLC</option>
                    <option selected disabled>publisher value stored in database</option>
                </select>
            </div>
            <div className="update-formfield">
                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" value="genre data stored in database"/>
            </div>
            <div className="update-formfield">
                <label htmlFor="number-of-pages">Number of Pages:</label>
                <input type="text" name="number-of-pages" id="number-of-pages" value="pages stored in database"/>
            </div>
            <div className="update-formfield">
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" placeholder="rating stored in database"/>
            </div>
            <div className="update-formfield">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea name="synopsis" id="synopsis" cols="28" rows="10" className="update-comic-synopsis">synopsis value stored in database</textarea>
            </div>
        </form>    
            <button className="update-comic-button">Submit</button>
    </main>
      </div>
    )
   }

export default Update;