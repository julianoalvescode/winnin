export function searchPosts(category) {
    return {
        type: '@posts/SEARCH_POSTS',
        payload: { category },
    };
}

export function loadMore(category) {
    return {
        type: '@posts/LOAD_MORE',
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
