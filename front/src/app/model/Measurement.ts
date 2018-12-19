export interface Measurement {
  readonly id: number;
  readonly temperature: number;
  readonly humility?: number;
  readonly measurementTime: Date;
}
