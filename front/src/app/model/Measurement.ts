export interface Measurement {
  readonly id: number;
  readonly temperature: number;
  readonly pressure?: number;
  readonly date: Date;
}
