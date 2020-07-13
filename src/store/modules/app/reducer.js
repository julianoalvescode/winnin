import producer from 'immer';

const INITIAL_STATE = {
    theme: 'light',
};

export default function App(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@app/CHANGE_THEME':
            return producer(state, (draft) => {
                draft.theme = action.payload.theme;
            });
        default:
            return state;
    }
}
