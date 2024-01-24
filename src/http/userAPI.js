import {$host} from "./index";

export const login = async (email, password) => {
    return await $host.post('tokens', {email, password})
}

export const check = async () => {
    return await $host.post('tokens',)
}