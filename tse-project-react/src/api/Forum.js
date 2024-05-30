class ForumController {
    constructor(){
        this.url = "http://localhost:3000/api/v1/forum"
    };

    async getPosts(){
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

    async addPost(data){
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

    async updatePost(data){
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

    async deletePost(id){
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

    async getPost(id){
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

    async addComment(data){
        const response = await fetch(this.url + '/comment', {
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

    async deleteComment(id){
        const response = await fetch(this.url + `/comment/${id}`, {
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

  async updateComment(postId, commentId, data){
    const response = await fetch(`${this.url}/comment/${postId}/${commentId}`, {
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
}

    async likePost(id){
        const response = await fetch(this.url + `/like/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return {
            data: await response.json(),
            status: response.status
        };
    };

    async unlikePost(id){
        const response = await fetch(this.url + `/unlike/${id}`, {
            method: 'POST',
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