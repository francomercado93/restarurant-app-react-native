import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer vptEoKzFHW_Vk3EURYvzqF5D9KBW85bRf-ilUVryFAG_eo_V2thRye_D1VqJQM9FCzHYE1wC85yRcYbOmBJFa7kdEq2gHborMGIKoZKZDE8ZUNceNScqXv4_5h0vXnYx'
    }
})