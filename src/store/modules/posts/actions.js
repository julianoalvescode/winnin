export function searchPosts(category) {
    return {
        type: '@posts/SEARCH_POSTS',
        payload: { category },
    };
}

export function searchSuccess(items, category) {
    return {
        type: '@posts/SEARCH_SUCCESS',
        payload: { items, category },
    };
}

export function searchFailure() {
    return {
        type: '@video/SEARCH_FAILURE',
    };
}
