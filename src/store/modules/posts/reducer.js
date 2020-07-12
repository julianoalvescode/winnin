import producer from 'immer';

const INITIAL_STATE = {
    posts: null,
    active: null,
    loading: false,
    limit: 6,
};

export default function Posts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@posts/SEARCH_SUCCESS':
            return producer(state, (draft) => {
                draft.posts = action.payload.items;
                draft.active = action.payload.category;
            });
        default:
            return state;
    }
}
