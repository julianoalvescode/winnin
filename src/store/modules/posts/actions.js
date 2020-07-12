export function searchPosts(category) {
    return {
        type: '@posts/SEARCH_POSTS',
        payload: { category },
    };
}

export function searchSuccess(items) {
    return {
        type: '@posts/SEARCH_SUCCESS',
        payload: { items },
    };
}

export function searchFailure() {
    return {
        type: '@video/SEARCH_FAILURE',
    };
}
