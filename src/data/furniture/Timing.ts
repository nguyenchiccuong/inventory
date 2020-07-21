import * as firebase from "firebase/app";

export type Timestamp = firebase.firestore.Timestamp;

/**
 * Dates and timing information associated with a furniture item
 */
export default class Timing {
  public urgent: boolean;

  public pickupBy: Date | Timestamp;

  public dateOffered: Date | Timestamp;

  public dateAdded: Date | Timestamp;

  public confirmedPickupDate?: Date | Timestamp;

  public dateCollected?: Date | Timestamp;

  public dateDelivered?: Date | Timestamp;

  public constructor(
    urgent = false,
    pickupBy = new Date(),
    dateOffered = new Date(),
    dateAdded = new Date(),
    confirmedPickupDate?: Date | Timestamp,
    dateCollected?: Date | Timestamp,
    dateDelivered?: Date | Timestamp,
  ) {
    this.urgent = urgent;
    this.pickupBy = pickupBy;
    this.dateOffered = dateOffered;
    // TODO: just set this to `new Date()` - user shouldn't control this metadata
    this.dateAdded = dateAdded;
    if (confirmedPickupDate) this.confirmedPickupDate = confirmedPickupDate;
    if (dateCollected) this.dateCollected = dateCollected;
    if (dateDelivered) this.dateDelivered = dateDelivered;
  }

  static formatDate(date?: Date | Timestamp): string {
    if (!date) return "";
    if (date instanceof Date) return date.toISOString().substring(0, 10);
    return date.toDate().toISOString().substring(0, 10);
  }

  static inRange(date: Date, start: Date, end: Date): boolean {
    return start <= date && date <= end;
  }
}