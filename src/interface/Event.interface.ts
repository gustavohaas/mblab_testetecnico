export interface IEvent {
  id: string
  name: string;
  location_name: string;
  date: Date;
  description?: string;
  time: string;
  organization: string;
  tickets: number;
}

export interface ICreateEvent {
  name: string;
  location_name: string;
  date: Date;
  description?: string;
  time: string;
  organization: string;
  tickets: number;
}