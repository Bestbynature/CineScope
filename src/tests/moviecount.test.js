jest.mock('../index.js');

const { database } = require('../index.js');

test('sample testing of jest', () => {
    expect(1).toBe(1);
  });

  test('Getting the movie count', () => {
    let a = [
        {
            movieName: 'Jackie',
            movieId: 1,
            numberOfSeasons: 3
        },
        {movieName: 'Run for blood',
            movieId: 2,
            numberOfSeasons: 2},
        {movieName: 'Prisoners',
            movieId: 3,
            numberOfSeasons: 6}]

    expect(database(a)).toBe(a.length)
  });