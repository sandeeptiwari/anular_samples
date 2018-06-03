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

const lessonListSubject = new SubjectImpl();
export let lessonList$ : Observable = {
    subscribe : obs => {
        lessonListSubject.subscribe(obs);
        obs.next(lesson);
    },
    unsubscribe:obs => lessonListSubject.unsubscribe(obs)
};

let lesson : Lesson[] = [];

export function initializeLesson(newList : Lesson[]){
    lesson = _.cloneDeep(newList);
    lessonListSubject.next(lesson);
}