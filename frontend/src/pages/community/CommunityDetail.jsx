import React, { useState } from "react";


const initialPosts = [
  {
    id: 1,
    text: "How should I prepare for placements in 6 months?",
    author: "User123",
    comments: [
      { id: 1, text: "Start with DSA + projects", author: "Anon" },
      { id: 2, text: "Do mock interviews regularly", author: "Rahul" },
    ],
  },
  {
    id: 2,
    text: "Best resources for React?",
    author: "Anonymous",
    comments: [
      { id: 1, text: "Official docs + YouTube", author: "DevGuy" },
    ],
  },
];

export default function CommunityDetail() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handlePost = () => {
    if (!newPost) return;

    const post = {
      id: Date.now(),
      text: newPost,
      author: anonymous ? "Anonymous" : "You",
      comments: [],
      status: "pending",
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="discussion-container">

      <h2>💬 Discussion Board</h2>

      {/* CREATE POST */}
      <div className="post-box">
        <textarea
          placeholder="Ask something..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />

        <div className="post-actions">
          <label>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
            />
            Anonymous
          </label>

          <button onClick={handlePost}>Post</button>
        </div>

        <p className="note">⚠️ Requires admin approval</p>
      </div>

      {/* POSTS */}
      <div className="posts">
        {posts.map((p) => (
          <div key={p.id} className="post-card">

            <div className="post-header">
              <span className="author">{p.author}</span>
              {p.status === "pending" && (
                <span className="pending">Pending</span>
              )}
            </div>

            <p className="post-text">{p.text}</p>

            {/* COMMENTS */}
            <div className="comments">
              {p.comments.map((c) => (
                <div key={c.id} className="comment">
                  <span>{c.author}:</span> {c.text}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}