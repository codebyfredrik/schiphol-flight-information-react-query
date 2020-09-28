import axios from './axios';

const query = async (key: string) => {
  const { data } = await axios.get(key);
  return data;
};

export { query };
