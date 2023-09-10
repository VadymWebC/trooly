import { queryString as qs } from 'query-string'

const DOMAIN = 'http://localhost:3001/'

class ApiCall {
    constructor(domain) {
        this.domain = domain
    }

    async perform(url, data, config) {
        const request = await fetch(`${this.domain}/${url}`, {
            ...config,
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        })
        return await request.json()
    }

    async get(path, searchParams) {
        return await this.perform(`${path}/${qs.stringify(searchParams)}`)
    }

    async post(path, payload) {
        return this.perform(path, payload, {
            method: 'POST',
        })
    }

    async put(path, payload) {
        return this.perform(path, payload, {
            method: 'PUT',
        })
    }

    async delete(path) {
        return this.perform(path, {
            method: 'DELETE',
        })
    }
}
