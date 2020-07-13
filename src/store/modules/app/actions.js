export function changeTheme(theme) {
    return {
        type: '@app/CHANGE_THEME',
        payload: { theme },
    };
}
