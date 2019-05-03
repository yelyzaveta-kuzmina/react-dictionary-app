import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 95aaf71ffaa899878c170fe8a27099f998056961a3117147d45abf6a678a7439'
  }
});
