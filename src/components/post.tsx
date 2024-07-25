import { Post as PrismaPost } from "@prisma/client";
import React from "react";

interface PostWithAuthor extends PrismaPost {
  author: { name: string | null } | null;
}

interface Props {
  post: PostWithAuthor;
}

const Post = ({ post }: Props) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      <h2>title: {post.title}</h2>
      <small>By {authorName} </small>
      <div>content: {post.content}</div>
    </div>
  );
};

export default Post;
