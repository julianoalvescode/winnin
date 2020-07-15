import producer from 'immer';

const INITIAL_STATE = {
    posts: null,
    active: null,
    limit: 10,
    limitPagination: 2,
    after: null,
};

export default function Posts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@posts/SEARCH_SUCCESS':
            return producer(state, (draft) => {
                draft.posts = action.payload.items;
                draft.active = action.payload.category;
                draft.after = action.payload.after;
            });
        case '@posts/LOAD_MORE':
            return producer(state, (draft) => {});
        default:
            return state;
    }
}
