import producer from 'immer';

const INITIAL_STATE = {
    posts: null,
    active: null,
    limit: 4,
};

export default function Posts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@posts/SEARCH_SUCCESS':
            return producer(state, (draft) => {
                draft.posts = action.payload.items;
                draft.active = action.payload.category;
            });
        case '@posts/LOAD_MORE':
            return producer(state, (draft) => {
                draft.limit += 2;
            });
        default:
            return state;
    }
}
