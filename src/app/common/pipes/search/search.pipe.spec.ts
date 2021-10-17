import { Quiz } from '@appApi';

import { SearchPipe } from './search.pipe';

describe('Pipe: Search', () => {
  const pipe = new SearchPipe();
  const expectedQuiz: Quiz = {
    id: 0,
    name: '',
    discipline: '',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 0
  };

  const expectedQuizCollection = [
    { ...expectedQuiz, name: 'Test 1' },
    { ...expectedQuiz, name: 'Test 2' },
    { ...expectedQuiz, name: 'Test 3' },
    { ...expectedQuiz, name: 'Test 22' }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Search "Test" value in list', () => {
    expect(pipe.transform(expectedQuizCollection, 'Test').length).toBe(4);
  });

  it('Search "Test 2" value in list', () => {
    expect(pipe.transform(expectedQuizCollection, 'Test 2').length).toBe(2);
  });

  it('Search "Test 3" value in list', () => {
    expect(pipe.transform(expectedQuizCollection, 'Test 3').length).toBe(1);
  });
});
