declare interface IHelloTestCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'HelloTestCommandSetStrings' {
  const strings: IHelloTestCommandSetStrings;
  export = strings;
}
