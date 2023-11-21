import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const PostItem = ({
  title,
  content,
  category,
  author,
  date,
  readTime,
  views,
}) => {
  return (
    <div className="post-info">
      <h2>
        {title}
        <button style={{ backgroundColor: "rgb(220, 175, 11)" }}>
          <ThumbUpOffAltIcon style={{ color: "white" }} />
        </button>
      </h2>
      <p>{content}</p>
      <div className="posting">
        <div className="post-v">
          <h3>
            <span>{category}</span>&nbsp;by {author}
          </h3>
        </div>
        <div className="post-views">
          <h4>
            {date} . {readTime} mins Read . {views} Views
          </h4>
        </div>
      </div>
    </div>
  );
};

const Post = () => {
  const posts = [
    {
      title: "A Changing World Order",
      content:
        "The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including",
      category: "musing",
      author: "anujgosalia",
      date: "August 2",
      readTime: "2",
      views: "102",
    },
    {
      title: "Indian v/s Australia",
      content:
        "Think about it - this cricket series was akin to therapy Lavying out childhood trauma up top, working with it slowly and surely over two m...",
      category: "thought",
      author: "anujgosalia",
      date: "January 21",
      readTime: "1",
      views: "156",
    },
    {
      title: "Write To Build",
      content: "Writing is the first steps to create: \n- stories \n- products \n- companies",
      category: "thought",
      author: "anujgosalia",
      date: "November 18",
      readTime: "1",
      views: "288",
    },
  ];

  const totalPosts = posts.length;

  return (
    <div className="post-content">
      <div className="post-button">
        <button>
          <h1>{totalPosts} Posts</h1>
        </button>
      </div>
      <div className="post-hr">
        <hr color="rgb(240, 235, 235)" />
      </div>

      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <PostItem {...post} />
          <hr color="rgb(240, 235, 235)" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Post;
