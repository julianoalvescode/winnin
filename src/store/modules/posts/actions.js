export function searchPosts(category) {
    return {
        type: '@posts/SEARCH_POSTS',
        payload: { category },
    };
}

export function loadMore(items, category, after) {
    return {
        type: '@posts/LOAD_MORE',
        payload: { items, category, after },
    };
}

export function searchSuccess(items, category, after) {
    return {
        type: '@posts/SEARCH_SUCCESS',
        payload: { items, category, after },
    };
}

export function searchFailure() {
    return {
        type: '@posts/SEARCH_FAILURE',
    };
}
