import axios from 'redaxios';

import { BASE_URL } from '../config';
import { PostDocument } from '../types/post.type';

const getPosts = async (): Promise<PostDocument[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data.posts;
  } catch (error) {
    return [];
  }
};

const getPostById = async (id: string): Promise<PostDocument | null> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};

export { getPosts, getPostById };
