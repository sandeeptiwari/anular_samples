import * as _ from 'lodash';
import { Lesson } from '../shared/model/lesson';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

export interface Observer{
    next(data:any);
}
export interface Observable{
    subscribe(obs: Observer);
    unsubscribe(obs:Observer);
}

interface Subject extends Observer, Observable{
    
}

class SubjectImpl implements Subject {
    private observers : Observer[] = [];
    next(data: any) {
        this.observers.forEach(obs => obs.next(data));
    }
    subscribe(obs: Observer) {
        this.observers.push(obs);
    }
    unsubscribe(obs: Observer) {
        _.remove(this.observers, elm => elm === obs);
    }
}


class DataStore {
    private lessons : Lesson[] = [];

    private  lessonListSubject = new SubjectImpl();

    public lessonList$ : Observable = {
        subscribe : obs => {
            this.lessonListSubject.subscribe(obs);
            obs.next(this.lessons);
        },
        unsubscribe:obs => this.lessonListSubject.unsubscribe(obs)
    };

    initializeLessonList(newList: Lesson[]){
        this.lessons = _.cloneDeep(newList);
        this.broadcast();
    }

    addLesson(lesson: Lesson): void {
        this.lessons.push(_.cloneDeep(lesson));
        this.broadcast();
      }

      deleteLesson(deleted: Lesson){
        _.remove(this.lessons, 
            lesson => lesson.id === deleted.id);
            this.broadcast();
      }

      toggleLessonViewed(toggled : Lesson){
        const lesson = _.find(this.lessons, lesson => lesson.id === toggled.id);
        lesson.complete = !lesson.complete;
        this.broadcast();
      }

      broadcast(){
        this.lessonListSubject.next(_.cloneDeep(this.lessons));
        
      }
}

export const store = new DataStore();