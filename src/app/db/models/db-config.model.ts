import { DBConfig, ObjectStoreMeta } from 'ngx-indexed-db';

export class DbApiConfigModel {

  private teachersStore: ObjectStoreMeta = {
    store: 'teachers',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'position', keypath: 'position', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'lastName', keypath: 'lastName', options: { unique: false } },
      { name: 'patronymic', keypath: 'patronymic', options: { unique: false } },
      { name: 'password', keypath: 'password', options: { unique: false } }
    ]
  };

  private testsStore: ObjectStoreMeta = {
    store: 'tests',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'discipline', keypath: 'discipline', options: { unique: false } },
      { name: 'modifiedDate', keypath: 'modifiedDate', options: { unique: false } },
      { name: 'teacherId', keypath: 'teacherId', options: { unique: false } }
    ]
  };

  private topicsStore: ObjectStoreMeta = {
    store: 'topics',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'testId', keypath: 'testId', options: { unique: false } }
    ]
  };

  private questionsStore: ObjectStoreMeta = {
    store: 'questions',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'category', keypath: 'category', options: { unique: false } },
      { name: 'weight', keypath: 'weight', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'topicId', keypath: 'topicId', options: { unique: false } }
    ]
  };

  private fillAnswersStore: ObjectStoreMeta = {
    store: 'fillAnswers',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  private chooseAnswersStore: ObjectStoreMeta = {
    store: 'chooseAnswers',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'isCorrect', keypath: 'isCorrect', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  private comparisonAnswersStore: ObjectStoreMeta = {
    store: 'comparisonAnswers',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'comparisonDescription', keypath: 'comparisonDescription', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  private orderAnswersStore: ObjectStoreMeta = {
    store: 'orderAnswers',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'order', keypath: 'order', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  public get DB_CONFIG(): DBConfig {
    return {
      name: 'test-desinger-db',
      version: 1,
      objectStoresMeta: [
        this.teachersStore,
        this.testsStore,
        this.topicsStore,
        this.questionsStore,
        this.fillAnswersStore,
        this.chooseAnswersStore,
        this.comparisonAnswersStore,
        this.orderAnswersStore
      ]
    };
  }
}