export interface Duration {
  value: number;
  name: string;
}

export const DURATIONS: Duration[] =
  [
    {value: 3, name: '3 hours'},
    {value: 6, name: '6 hours'},
    {value: 12, name: '12 hours'},
    {value: 24, name: 'day'},
    {value: 168, name: 'week'}
  ];
