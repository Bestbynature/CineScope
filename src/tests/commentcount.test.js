jest.mock('../index.js');

const { commentsFunction } = require('../index.js');

test('sample testing of jest', () => {
  expect(1).toBe(1);
});

test('Getting the comment count', () => {
  const data = [
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
  ];
  expect(commentsFunction(data)).toBe(data.length);
});