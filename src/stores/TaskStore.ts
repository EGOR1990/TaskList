import { Task } from '../models/Task';
export class TaskStore {
 private tasks: Task[] = [];
 private nextId: number = 1;
 constructor() {
 // Инициализация с некоторыми задачами
 this.tasks.push(new Task(this.nextId++, 'Изучить Vue.js'));
 this.tasks.push(new Task(this.nextId++, 'Создать проект на Vue'));
 }
 // Получить все задачи
 public getTasks(): Task[] {
 return this.tasks;
 }
 // Добавить новую задачу
 public addTask(title: string): void {
 this.tasks.push(new Task(this.nextId++, title));
 }

 // Удалить задачу по ID
 public removeTask(id: number): void {
 this.tasks = this.tasks.filter(task => task.id !==
id);
 }
 // Переключить состояние задачи
 public toggleTask(id: number): void {
 const task = this.tasks.find(task => task.id === id);
 if (task) {
 task.completed = !task.completed;
 }
 }
}