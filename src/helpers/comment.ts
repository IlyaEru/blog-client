import axios from 'redaxios';

import { BASE_URL } from '../config';

import { Comment } from '../types/comment.type';

const getComments = async (): Promise<Comment[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/comments`);
    return data.comments;
  } catch (error) {
    return [];
  }
};
interface RequestData {
  postId: string;
  body: string;
  name?: string;
}
const createComment = async (
  postId: string,
  body: string,
  name?: string,
): Promise<Comment | null> => {
  const requestData: RequestData = {
    postId,
    body,
  };
  if (name) {
    requestData.name = name;
  }
  try {
    const { data } = await axios.post(`${BASE_URL}/comments`, requestData);

    return data.comment;
  } catch (error) {
    return null;
  }
};

const getPostsComments = async (postId: string): Promise<Comment[]> => {
  const comments = await getComments();

  return comments.filter((comment) => comment.post === postId);
};

export { getComments, createComment, getPostsComments };
