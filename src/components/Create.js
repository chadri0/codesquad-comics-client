import React from 'react';

function Create() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submit handler ran.")
        console.log(e.target.value);
    };

    return (
      <div>
        <main>
        <h1>CREATE A NEW COMIC</h1>
        <form action="#" className="create-comic-form" onSubmit={handleSubmit}>
            <div className="create-formfield">
                <label htmlFor="title">Title:</label>  
                <input type="text" name="title" id="title" placeholder="Title" required/>
            </div>
            <div className="create-formfield">
                <label htmlFor="author">Author:</label>     
                <input type="text" name="author" id="author" placeholder="Author" required/>
            </div>
            <div className="create-formfield">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher-select" className="create-comic-publisher">
                    <option selected disabled>Select</option>
                    <option value="boom-box">BOOM! Box</option>
                    <option value="dc-comics">DC Comics</option>
                    <option value="harry-n-abrams">Harry N. Abrams</option>
                    <option value="icon-books">Icon Books</option>
                    <option value="image-comics">Image Comics</option>
                    <option value="marvel">Marvel</option>
                    <option value="simon-and-schuster">Simon & Schuster</option>
                    <option value="top-shelf-productions">Top Shelf Productions</option>
                    <option value="viz-media-llc">VIZ Media LLC</option>
                </select>
            </div>
            <div className="create-formfield">
                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" placeholder="Genre" required/>
            </div>            
            <div className="create-formfield">
                <label htmlFor="number-of-pages">Number of Pages:</label>
                <input type="text" name="number-of-pages" id="number-of-pages" placeholder="Number of pages" required/>
            </div>
            <div className="create-formfield">
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" placeholder="number (0-5)" required/>
            </div>
            <div className="create-formfield">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea name="synopsis" id="synopsis" cols="20" rows="10" placeholder="Synopsis" className="create-comic-synopsis" required></textarea>
            </div>
        </form>
            <button type="submit" className="create-submit-button">Submit</button>
    </main>
      </div>
    )
   }

export default Create;