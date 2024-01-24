import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://iot.faradaydc.ru/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$host.interceptors.request.use(authInterceptor)

export {
    $host
}