import axios from 'axios';
// import { updateHeaders } from 'redux/actions/entities/authenticate/headers';

export default class ApiClient {
    constructor({ prefix = 'localhost:3000/api/v1' } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params) {
        return request({
            url: `${requestUrl}`,
            method: 'get',
            data: payload,
            params,
        });
    }

    put(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
        });
    }

    post(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
        });
    }

    delete(requestUrl) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
        });
    }
}
const request = ({
    url, method, data, params = {},
}) => {
    return axios({
        method,
        url,
        params,
        data,
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }
        }, (xhr) => {
            const response = { error: {} };
            response.error.statusCode = (xhr && xhr.response && xhr.response.status) || 500;
            response.error.status = 'error';
            response.error.toString = () => {
                let result = 'Bad response from server';
                if (xhr && xhr.response && xhr.response.data) {
                    const errors = xhr.response.data.errors || xhr.response.data.error;
                    if (errors && errors.full_messages) {
                        result = errors.full_messages.toString();
                    } else if (errors) {
                        result = errors.toString();
                    }
                } else {
                    result = xhr.message;
                }
                return result;
            };
            return response;
        });
};
