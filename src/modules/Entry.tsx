export class Entry {
  constructor(
    public readonly title: string,
    public readonly isComplete: boolean = false
  ) {}

  selected() {
    return new Entry(this.title, !this.isComplete);
  }
}
