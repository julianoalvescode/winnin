const INITIAL_STATE = {
    posts: null,
    type: 'new',
};

export default function Posts(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
