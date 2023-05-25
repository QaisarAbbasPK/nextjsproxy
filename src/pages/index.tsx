import { GetServerSideProps } from 'next';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = response.data;

    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);

    return {
      props: { posts: [] },
    };
  }
};

export default Posts;
