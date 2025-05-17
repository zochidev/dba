export interface Lesson {
  id: string;
  title: string;
  content: JSX.Element;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  chapters: Chapter[];
}