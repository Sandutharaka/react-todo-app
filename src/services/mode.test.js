const getNextModeByKey = require('./mode').getNextModeByKey;
const {KEY_SLASH, KEY_N, KEY_ESCAPE} = require('keycode-js')
const {MODE_NONE, MODE_SEARCH, MODE_CREATE} = require('./mode');
test('getNextModeByKey returns MODE_SEARCH when current is MODE_NONE and key pressed is KEY_SLASH', () => {
    const result = getNextModeByKey(MODE_NONE, KEY_SLASH);
    expect(result).toBe(MODE_SEARCH);
});
test('getNextModeByKey returns MODE_CREATE when current is MODE_NONE and key pressed is KEY_N',()=>{
    const result = getNextModeByKey(MODE_NONE, KEY_N);
    expect(result).toBe(MODE_CREATE);
});
test('getNextModeByKey returns MODE_NONE when current is MODE_NONE and key pressed is KEY_ESCAPE',()=>{
    const result = getNextModeByKey(MODE_NONE, KEY_ESCAPE);
    expect(result).toBe(MODE_NONE);
});