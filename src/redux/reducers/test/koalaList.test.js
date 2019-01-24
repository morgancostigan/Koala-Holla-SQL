import koalaList from '../koalaList';

test('reducer has initial state', () => {
    let action = {
        type: 'any type',
        payload: null,
    };
    expect(koalaList(undefined, action)).toEqual([]);
});
test('SET_KOALA_LIST sets array', () => {
    const koalaArray = [
        {name: 'name'},
        {name: 'name2'},
    ];
    let action = {
        type: 'SET_KOALA_LIST',
        payload: koalaArray,
    };
    expect(koalaList(null, action)).toEqual(koalaArray);
});