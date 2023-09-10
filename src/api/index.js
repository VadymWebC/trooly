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
        //
    }

    async post() {}

    async put() {}

    async delete() {}
}
