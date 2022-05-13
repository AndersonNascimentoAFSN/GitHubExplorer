import axios from 'axios';
// require('dotenv').config();

// const githubURL = process.env.REACT_APP_GITHUB_URL;
const githubURL = 'https://api.github.com';

export class GithubApi {
    static getInstance() {
        const instance = axios.create({ baseURL: githubURL });
        return instance;
    }

    static getRepositoriesByUsername(username) {
        const repositories = this.getInstance().get(`/users/${username}/repos`).
            then((data) => {
                if (data.status === 200) return data?.data;
                return [];
            });
        return repositories;
    }
}

// export const getRepositoriesByUsername = async (username) => {
//     const repositories = await instance.get(`/users/${username}/repos`);
//     if (repositories.status === 200) {
//         return repositories.data;
//     }
//     return [];
// }
// export default instance;