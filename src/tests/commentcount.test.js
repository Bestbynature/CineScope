jest.mock('../index.js');

const { commentsFunction } = require('../index.js');

test('sample testing of jest', () => {
  expect(1).toBe(1);
});

test('Getting the comment count', () => {
  const data = [
    {
      movieName: 'Jackie',
      movieId: 1,
      numberOfSeasons: 3,
    },
    {
      movieName: 'Run for blood',
      movieId: 2,
      numberOfSeasons: 2,
    },
    {
      movieName: 'Prisoners',
      movieId: 3,
      numberOfSeasons: 6,
    },
  ];
  expect(commentsFunction(data)).toBe(data.length);
});