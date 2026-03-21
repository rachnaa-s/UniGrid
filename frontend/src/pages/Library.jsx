import React from "react";

const books = [
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    title: "Artificial Intelligence Basics",
    author: "Tom Taulli",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    title: "Data Science Handbook",
    author: "Jake VanderPlas",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Blockchain Revolution",
    author: "Don Tapscott",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    title: "Cybersecurity Essentials",
    author: "Charles Brooks",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
];

const Library = () => {
  return (
    <div className="library-container">

      {/* Hero */}
      <div className="library-hero">
        <div>
          <h1>E-Library</h1>
          <p>Access thousands of academic resources anytime, anywhere</p>
        </div>
        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da" />
      </div>

      {/* Categories */}
      <h2 className="section-title">Categories</h2>
      <div className="categories">
        <span>Programming</span>
        <span>AI & ML</span>
        <span>Data Science</span>
        <span>Cybersecurity</span>
        <span>Blockchain</span>
      </div>

      {/* Books */}
      <h2 className="section-title">Popular Books</h2>
      <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button>Read Now</button>
          </div>
        ))}
      </div>

      {/* Featured */}
      <div className="featured">
        <h2>Featured Collection</h2>
        <p>Explore curated academic collections and top-rated books</p>
        <button>Explore More</button>
      </div>

    </div>
  );
};

export default Library;