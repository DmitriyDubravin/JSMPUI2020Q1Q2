import { QuestionsSet, Enum } from "./interfaces";
import { enumToArray } from "./helpers";

export class Questionnaire {
  private questionsQuantity: number;
  private categories: string[];
  private questions: QuestionsSet;
  private currentCategory: string;

  constructor(categories: Enum, quantity: number) {
    this.categories = enumToArray(categories);
    this.questionsQuantity = quantity;

    this.generateQuestionsSet();
  }

  generateQuestionsSet() {
    const questions: QuestionsSet = this.categories.reduce(
      (acc: QuestionsSet, category: string) => ({ ...acc, [category]: [] }),
      {}
    );
    for (let i = this.questionsQuantity; i > 0; i--) {
      this.categories.forEach((category: string) => {
        questions[category] = [
          ...questions[category],
          this.createQuestion(category, i),
        ];
      });
    }
    this.questions = questions;
  }

  createQuestion(category: string, index: number): string {
    return `${category} Question ${index}`;
  }

  setCategory(number: number) {
    this.currentCategory = this.categories[number % this.categories.length];
    return this;
  }

  getCategory(): string {
    const category = this.currentCategory;
    console.log("The category is " + category);
    return category;
  }

  getQuestion(): string {
    const question = this.questions[this.currentCategory].pop();
    console.log(question);
    return question;
  }

  askQuestion() {
    this.getCategory();
    this.getQuestion();
  }

  evaluateAnswer(): boolean {
    return Math.floor(Math.random() * 10) === 7;
  }
}
