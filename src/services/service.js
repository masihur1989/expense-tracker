import axios from 'axios';

const baseURL = process.env.EXPENSE_TRACKER_API || 'http://localhost:1323/api/v1';
const client = axios.create({
    baseURL: `${baseURL}`,
    responseType: "json",
    maxRedirects: 0,
    validateStatus: function(status) {
        return status >= 200 && status <= 303;
    }
});

// GetAllDocs 
const GetAllDocs = (params) => {
    return client.request({
        url: `/${params.endpoint}`,
        method: 'get',
    });
}

export {
    GetAllDocs,
}