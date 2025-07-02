const {
  applyFilter,
  search,
  getOptions,
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED
} = require('./filter');

const mocklist = [
  { id: 1, text: 'Learn Javascript', completed: false },
  { id: 2, text: 'Learn React', completed: true },
  { id: 3, text: 'Build a React App', completed: false }
];

test('applyFilter returns only completed items', () => {
  const result = applyFilter(mocklist, FILTER_COMPLETED);
  expect(result).toEqual([
    { id: 2, text: 'Learn React', completed: true }
  ]);
});
test('applyFilter returns only not completed items', () => {
  const result = applyFilter(mocklist, FILTER_COMPLETED);
  expect(result).not.toEqual([
    { id: 1, text: 'Learn Javascript', completed: false }
  ]);
});
test('applyFilter returns only not completed items', () => {
  const result = applyFilter(mocklist, FILTER_COMPLETED);
  expect(result).not.toEqual([
    { id: 3, text: 'Build a React App', completed: false }
  ]);
});
test('search function finds correct item', () => {
  const result = search(mocklist, 'Learn Javascript');
  expect(result).toEqual([
    { id: 1, text: 'Learn Javascript', completed: false }
  ]);
});
test('search function finds correct item', () => {
  const result = search(mocklist, 'Learn React');
  expect(result).toEqual([
    { id: 2, text: 'Learn React', completed: true }
  ]);
});
test('search function finds correct item', () => {
  const result = search(mocklist, 'Build a React App');
  expect(result).toEqual([
    { id: 3, text: 'Build a React App', completed: false }
  ]);
});
test('getOptions returns filter option labels', () => {
  const result = getOptions();
  expect(result).toEqual({
    all: 'All',
    active: 'Active',
    completed: 'Completed'
  });
});






