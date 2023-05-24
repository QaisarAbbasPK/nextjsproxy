import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
}
