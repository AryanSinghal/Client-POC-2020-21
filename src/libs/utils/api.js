import axios from 'axios';
import configuration from '../../configs/configuration';

const callAPI = async ({ method, url, body }) => {
  const { baseUrl } = configuration;
  try {
    const { data } = await axios({
      method,
      url: `${baseUrl}/${url}`,
      data: body,
      headers: {
        'authorization': localStorage.getItem('token')
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export { callAPI };
