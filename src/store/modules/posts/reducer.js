import producer from 'immer';

const INITIAL_STATE = {
    posts: null,
    type: 'new',
    loading: false,
    limit: 6,
};

export default function Posts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@posts/SEARCH_SUCCESS':
            return producer(state, (draft) => {
                draft.posts = action.payload.items;
            });
        default:
            return state;
    }
}
