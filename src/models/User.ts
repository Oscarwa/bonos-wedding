export interface User {
  displayName: string | null;
  photoUrl: string | null;
  email: string | null;
  uid: string;
  canRsvp: boolean;
  rsvp?: Attendee[];
}

export interface Attendee {
  name: string;
  phone: string;
}
