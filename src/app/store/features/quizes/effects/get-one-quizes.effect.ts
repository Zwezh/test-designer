import { Injectable } from '@angular/core';
import { Question, QuestionsApiService, Quiz, QuizesApiService, Topic, TopicsApiService } from '@appApi';
import { QuizModel, TopicModel } from '@appStore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, zip } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { getOneQuizAction, getOneQuizFailureAction, getOneQuizSuccessAction } from '../actions';

@Injectable()
export class GetOneQuizEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
    private topicsApi: TopicsApiService,
    private questionsApi: QuestionsApiService
  ) {}

  getQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneQuizAction),
      switchMap(({ id }) =>
        zip(this.quizesApi.getQuiz$(id), this.topicsApi.getAllTopics$(id), this.questionsApi.getAllQuestions$(id)).pipe(
          map(([quiz, topics, questions]) =>
            getOneQuizSuccessAction({ quiz: this.getQuizModel(quiz, topics, questions) })
          ),
          catchError(() => of(getOneQuizFailureAction()))
        )
      )
    )
  );

  private getQuizModel(quiz: Quiz, apiTopics: Topic[], questions: Question[]): QuizModel {
    const topics = apiTopics.map((topic: Topic) => this.getTopicModel(topic, questions));
    return { ...quiz, topicList: topics };
  }

  private getTopicModel(topic: Topic, questionsApi: Question[]): TopicModel {
    const questions = questionsApi.filter((question: Question) => question.topicId === topic.id);
    return { ...topic, questionList: questions };
  }
}
