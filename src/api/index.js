import axios from 'axios'
const BASEURL = ''

export default async (url = '', params = {}, type = 'GET') => {
    type = type.toUpperCase()
    const promise = new Promise((resolve, reject) => {
        axios({
            method: type,
            url: BASEURL + url,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            data: type === 'POST' ? params : '',
            params: type === 'GET' ? params : '',
            validateStatus: function (status) {
                return status < 500; // Reject only if the status code is greater than or equal to 500
            }            
        }).then(res => {
            console.log(res)
            resolve(res)
            // if (url.indexOf('/reservations') > -1) {
            //     resolve(res)
            // } else {
            //     res.data["serveTime"] = res.headers.date;
            //     resolve(res.data)
            // }
        }).catch(error => {
            reject(error)
        })
    })
    return promise
}