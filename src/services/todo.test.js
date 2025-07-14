const { getAll, getItemById, updateStatus, addToList } = require('./todo');
const {
  applyFilter,
  search,
  getOptions,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
  FILTER_ALL
} = require('./filter');
const {KEY_SLASH, KEY_N, KEY_ESCAPE} = require('keycode-js')
const {MODE_NONE, MODE_SEARCH, MODE_CREATE} = require('./mode');
const mocklist = [
  { id: 1, text: 'Learn Javascript', completed: false },
  { id: 2, text: 'Learn React', completed: true },
  { id: 3, text: 'Build a React App', completed: false }
];
test ('return all items from getAll',()=>{
    const result = getAll(); // Call the function
    expect(result).toEqual([{ id: 1, text: 'Learn Javascript', completed: false },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Build a React App', completed: false }]);
});
test ('return item 2 using itemId',()=>{
    const result = getItemById(2);
    expect(result).toEqual({ id: 2, text: 'Learn React', completed: false });
});
test ('return item 1 using itemId',()=>{
    const result = getItemById(1);
    expect(result).toEqual({ id: 1, text: 'Learn Javascript', completed: false });
});
test ('return item 3 using itemId',()=>{
    const result = getItemById(3);
    expect(result).toEqual({ id: 3, text: 'Build a React App', completed: false });
});
test('return update items', () => {
    const items = [
        { id: 1, text: 'Learn Javascript', completed: false },
        { id: 2, text: 'Learn React', completed: false },
        { id: 3, text: 'Build a React App', completed: false }
    ];
    const updated = updateStatus(items, 3, true);
    expect(updated).toEqual([
        { id: 1, text: 'Learn Javascript', completed: false },
        { id: 2, text: 'Learn React', completed: false },
        { id: 3, text: 'Build a React App', completed: true }
    ]);
});
test('add new item to the list', () => {
    const newItem = addToList([], { // Pass empty list and new item data
        text: 'Test React App',
        completed: false
    });
    expect(newItem).toEqual([
        { id: 4, text: 'Test React App', completed: false }
    ]);
});

