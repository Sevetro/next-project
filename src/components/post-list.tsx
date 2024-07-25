interface PostList {
  children: React.ReactNode;
}

export const PostList = ({ children }: PostList) => {
  return <div className="bg-blue-600">{children}</div>;
};
