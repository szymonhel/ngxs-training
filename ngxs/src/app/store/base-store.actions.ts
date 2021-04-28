export namespace Animal{
  export class Add {
    static readonly type = '[Zoo] Add Animal';
    constructor(public name: string) {}
  }
}

