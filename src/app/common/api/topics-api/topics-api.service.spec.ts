import { TestBed } from '@angular/core/testing';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';

import { Topic } from './topics-api.interface';
import { TopicsApiService } from './topics-api.service';

describe('Service: TopicApi', () => {
  let service: TopicsApiService;

  const expectedId = 0;
  const expectedTopic: Topic = {
    id: 0,
    title: 'Test topic name',
    quizId: 1
  };

  const expectedTopicList = [expectedTopic, expectedTopic, expectedTopic];

  const dbServiceStub = {
    getByID: (): Observable<Topic> => of(expectedTopic),
    add: (): Observable<number> => of(expectedId),
    getAllByIndex: (): Observable<Topic[]> => of(expectedTopicList),
    update: (): Observable<Topic[]> => of(expectedTopicList),
    delete: (): Observable<Topic[]> => of(expectedTopicList)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicsApiService, { provide: NgxIndexedDBService, useValue: dbServiceStub }]
    });
    service = TestBed.inject(TopicsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have GET Topic from IndexedDB', () => {
  //   service.getTopic$(expectedTopic.id).subscribe((Topic: Topic) => {
  //     expect(Topic).toEqual(expectedTopic);
  //   });
  // });

  it('should add new Topic to IndexedDB', () => {
    const topic = { ...expectedTopic, id: expectedId } as Topic;
    service.addTopic$(topic).subscribe((result: Topic[]) => {
      expect(result).toEqual(expectedTopicList);
    });
  });

  it('should get all Topics from IndexedDB', () => {
    service.getAllTopics$(0).subscribe((TopicList: Topic[]) => {
      expect(TopicList).toEqual(expectedTopicList);
    });
  });

  // it('should update Topic from IndexedDB', () => {
  //   service.updateTopic$(expectedTopic).subscribe((result: Topic[]) => {
  //     expect(result).toEqual(expectedTopicList);
  //   });
  // });

  // it('should delete Topic from IndexedDB', () => {
  //   service.deleteTopic$(expectedTopic.id).subscribe((TopicList: Topic[]) => {
  //     expect(TopicList).toEqual(expectedTopicList);
  //   });
  // });
});
