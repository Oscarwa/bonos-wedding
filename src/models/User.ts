export interface IUser {
  displayName: string | null;
  photoUrl: string | null;
  email: string | null;
  uid: string;
  canRsvp: boolean;
  rsvp?: IRsvp;
  admits?: number;
  isAdmin?: boolean;
}

export interface IRsvp {
  confirmed: boolean;
  confirmedOn?: Date;
  going?: boolean;
  plusOne?: IAttendee;
}

export interface IAttendee {
  name: string;
}
