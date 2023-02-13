import { createContext, useEffect, useState } from 'react';
import { getPosts } from './helpers/post';
import Routes from './Routes';
import { PostDocument } from './types/post.type';
import { PostsContextType } from './types/postsContext.type';

export const PostsContext = createContext({} as PostsContextType);

function App() {
  const [posts, setPosts] = useState<PostDocument[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();

      setPosts(posts);
      setIsLoadingPosts(false);
    };
    fetchPosts();
  }, []);
  return (
    <PostsContext.Provider value={{ posts, isLoadingPosts }}>
      <>
        <Routes />
      </>
    </PostsContext.Provider>
  );
}

export default App;
