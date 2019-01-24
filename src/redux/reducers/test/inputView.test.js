import inputView from '../inputView';

test('reducer has initial state', () => {
    let action = {
        type: 'any type',
        payload: null,
    };
    expect(inputView(undefined, action)).toEqual(false);
});
test('SET_INPUT sets true', () => {
    let action = {
        type: 'SET_INPUT',
    };
    expect(inputView(null, action)).toEqual(true);
});
test('SET_LIST sets false', () => {
    let action = {
        type: 'SET_LIST',
    };
    expect(inputView(null, action)).toEqual(false);
});