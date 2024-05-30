class ResourceController {
    constructor(){
        this.url = "http://localhost:3000/api/v1/resource"
    };

    async getResources(){
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return {
            data: await response.json(),
            status: response.status
        };
    };

    async addResource(data){
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return {
            data: await response.json(),
            status: response.status
        };
    };

    async updateResource(data){
        const response = await fetch(this.url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return {
            data: await response.json(),
            status: response.status
        };
    };

    async deleteResource(id){
        const response = await fetch(this.url + `/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return {
            data: await response.json(),
            status: response.status
        };
    };

    async getResource(id){
        const response = await fetch(this.url + `/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return {
            data: await response.json(),
            status: response.status
        };
    };


}

export default new ResourceController();