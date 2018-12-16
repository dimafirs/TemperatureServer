export interface Measurement {
  readonly id: number;
  readonly temperature: number;
  readonly pressure?: number;
  readonly measurementTime: Date;
}
