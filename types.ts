export interface Thread {
  name: JSX.Element;
  subname: string;
  value: number;
}

export interface Data {
  name: string;
  threads: Thread[];
  totalWeight: number;
}

export interface ThreadWeight {
  name: JSX.Element;
  subname: string;
  weight: number;
}
