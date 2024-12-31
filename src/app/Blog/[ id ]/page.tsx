"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { blogsData } from "@/app/Data/Blogs";
import localFont from "next/font/local";
import Footer from "@/app/components/Footer";

const font = localFont({
  src: "../../fonts/ivy-mode-8.ttf",
});

const fontTwo = localFont({
  src: "../../fonts/MorgenHumble-DYB81.otf"
})

// Comment Section Component
const CommentSection = ({
  comments,
  newComment,
  setNewComment,
  handleAddComment,
  handleDeleteComment,
  likes,
  handleLike,
}: {
  comments: { text: string; id: number }[];
  newComment: string;
  setNewComment: (value: string) => void;
  handleAddComment: () => void;
  handleDeleteComment: (id: number) => void;
  likes: number;
  handleLike: () => void;
}) => {
  return (
    <div className="flex justify-center">
    <div className="border rounded-lg p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <h2 className={`${fontTwo.className}text-3xl font-bold mb-4`}>Comments</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border rounded-lg p-2 w-full max-w-sm text-black"
          placeholder="Add a comment..."
        />
        <div className="mt-4">
          <button
            onClick={handleAddComment}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Comment
          </button>
          <button
            onClick={handleLike}
            className="bg-blue-500 ml-4 text-white px-4 py-2 rounded"
          >
           &#128151; {likes}
          </button>
        </div>
      </div>
      <ul>
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex justify-between items-center mb-2 max-w-md mx-auto"
          >
            <span>{comment.text}</span>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
</div> 
  );
};

// Blog Page Component
const BlogPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const blog = blogsData.find((b) => b.id === id);

  const [comments, setComments] = useState<{ text: string; id: number }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(blog ? blog.likes : 0);

  const handleAddComment = () => {
    setComments([...comments, { text: newComment, id: Date.now() }]);
    setNewComment("");
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  if (!blog) {
    return <div className="text-center text-red-500 mt-10">Blog not found</div>;
  }

  return (
    <>
    <div className="p-8 bg-[#3C5E39] text-center text-[#C4d4a7]">
      <div className=" font-mono max-w-4xl mx-auto">
        <h1 className={`${font.className} text-3xl font-bold mb-4`}>
          {blog.title}
        </h1>
        <p className="text-lg mb-6 leading-10">{blog.content}</p>
      </div>
      <CommentSection
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
        handleDeleteComment={handleDeleteComment}
        likes={likes}
        handleLike={handleLike}
      />
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;

