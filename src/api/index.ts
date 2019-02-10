import request from './request';

const endpoint = 'posts';

const api = {
  getFeed: (params: { id?: string | number }) => {
    const resource = params.id ? `${endpoint}?userId=${params.id}` : endpoint;
    return request.get(`${resource}`);
  },
};

export default api;
