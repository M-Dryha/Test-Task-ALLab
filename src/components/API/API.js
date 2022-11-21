import axios from 'axios';
axios.defaults.baseURL = 'https://api.json-generator.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

const TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const GetJobInfo = async () => {
  const response = await axios.get(
    `templates/ZM1r0eic3XEy/data/?access_token=${TOKEN}`
  );

  return response.data;
};

export default GetJobInfo;
