import { DBConfig, ObjectStoreMeta } from 'ngx-indexed-db';

import { StoreNamesConstants } from '../constants/storeNames.constants';

export class DbApiConfigModel {

  private teachersStore: ObjectStoreMeta = {
    store: StoreNamesConstants.TEACHERS_STORE,
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
    store: StoreNamesConstants.TESTS_STORE,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'discipline', keypath: 'discipline', options: { unique: false } },
      { name: 'createdDate', keypath: 'createdDate', options: { unique: false } },
      { name: 'modifiedDate', keypath: 'modifiedDate', options: { unique: false } },
      { name: 'teacherId', keypath: 'teacherId', options: { unique: false } }
    ]
  };

  private topicsStore: ObjectStoreMeta = {
    store: StoreNamesConstants.TOPICS_STORE,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'testId', keypath: 'testId', options: { unique: false } }
    ]
  };

  private questionsStore: ObjectStoreMeta = {
    store: StoreNamesConstants.QUESTIONS_STORE,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'category', keypath: 'category', options: { unique: false } },
      { name: 'weight', keypath: 'weight', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'topicId', keypath: 'topicId', options: { unique: false } }
    ]
  };

  private fillAnswersStore: ObjectStoreMeta = {
    store: StoreNamesConstants.FILL_ANSWERS_STORE,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  private chooseAnswersStore: ObjectStoreMeta = {
    store: StoreNamesConstants.CHOOSE_ANSWERS_STORE,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'isCorrect', keypath: 'isCorrect', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  private comparisonAnswersStore: ObjectStoreMeta = {
    store: StoreNamesConstants.COMPARISON_ANSWERS_STORE,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'comparisonDescription', keypath: 'comparisonDescription', options: { unique: false } },
      { name: 'questionId', keypath: 'questionId', options: { unique: false } }
    ]
  };

  private orderAnswersStore: ObjectStoreMeta = {
    store: StoreNamesConstants.ORDER_ANSWERS_STORE,
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