import { PostList } from "@/components/post-list";
import { LoginButton } from "@/components/login-button";
import prisma from "@/prisma/prisma";
import Post from "@/components/post";

const Home = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <main className="flex">
      <div className="bg-red-500 w-1/2">
        <h1>Public Feed</h1>
        <PostList>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </PostList>
      </div>

      <div className="justify-center items-center bg-green-500 w-1/2 flex">
        <LoginButton />
      </div>
    </main>
  );
};

export default Home;
