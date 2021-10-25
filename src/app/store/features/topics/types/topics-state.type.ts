import { Topic } from '@appApi';

export interface TopicsState {
  isLoading: boolean;
  topicList: Topic[];
}
