export interface Measurement {
  readonly id: number;
  readonly temperature: number;
  readonly humidity?: number;
  readonly measurementTime: Date;
}
