import request from 'superagent';

const apiUrl = 'http://localhost:8080/api/images';

export const post = (newSteven) => {
    return request.post(apiUrl)
        .send(newSteven)
        .then((res) => {
            return res.body;
        });
};