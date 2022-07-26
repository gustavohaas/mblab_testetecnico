export interface IEvent {
  id: string
  name: string;
  location_name: string;
  date: string;
  description?: string;
  time: string;
  organization: string;
  tickets: number;
}

export interface ICreateEvent {
  name: string;
  location_name: string;
  date: string;
  description?: string;
  time: string;
  organization: string;
  tickets: number;
}

export interface IUpdateEvent {
  name?: string;
  location_name?: string;
  date?: string;
  description?: string;
  time?: string;
  organization?: string;
}