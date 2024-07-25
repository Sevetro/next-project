import { Post as PostType } from "@prisma/client";

export const Post = (post: PostType) => {
  return <div>{post.id}</div>;
};
