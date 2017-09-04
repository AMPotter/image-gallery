import request from 'superagent';

const apiUrl = 'http://localhost:8080/api/images';

export const post = (newSteven) => {
    return request.post(apiUrl)
        .send(newSteven)
        .then((res) => res.body);
};

export const getAll = () => {
    return request.get(apiUrl)
        .then(res => res.body);
};

export const remove = (id) => {
    return request.delete(`${apiUrl}/${id}`)
        .then(res => res.body);
};