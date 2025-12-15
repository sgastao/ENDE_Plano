export interface ObjectiveData {
  objective: string;
  status: string;
  meta: string;
  strategicTarget: string;
}

export interface MeasureData {
  id: string;
  name: string;
  description: string;
  start: string;
  meta: string;
}

export interface PillarData {
  id: string;
  title: string;
  description: string;
  objectives: ObjectiveData[];
  measures: MeasureData[];
}