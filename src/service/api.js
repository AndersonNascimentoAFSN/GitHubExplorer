import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/users',
});

export const getRepositoriesByUsername = async (username) => {
    const repositories = await instance.get(`/${username}/repos`);
    if (repositories.status === 200) {
        return repositories.data;
    }
    return [];
}

export default instance;