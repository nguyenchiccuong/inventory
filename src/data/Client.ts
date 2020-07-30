import { Area } from "./Area";

export default interface Client {
  // metadata
  id: string;
  dateAdded: Date; // timestamp column
  lastUpdated: Date;

  // agency data
  dateOfReferral: Date;
  referringAgency: string;
  agencyContactName: string;
  agencyContactEmail: string;
  agencyContactPhone: string;

  // client data
  clientName: string;
  clientPhone: string;
  clientAddress: string;
  clientArea: Area;
  clientAreaOther: string;

  // request data
  comments: string;
  staffNotes: string;

  requestedFurniture: RequestedFurniture;
  reasonForNeed: NeedReason;
}

interface RequestedFurniture {
  queenOrFullBed: boolean;
  twinBed: boolean;
  couch: boolean;
  livingRoomChair: boolean;
  tableAndChairs: boolean;
  otherTables: boolean;
  dresser: boolean;
  crib: boolean;
  other: boolean;
}

interface NeedReason {
  leavingHomelessness: boolean;
  recentReleasedPrison: boolean;
  pregnantMember: boolean;
  childrenUnder18: boolean;
  hasDisability: boolean;
  isVeteran: boolean;
  isElderly: boolean;
  domesticViolence: boolean;
}

function randomPhone(): string {
  const first = Math.floor(Math.random() * 899 + 100);
  const second = Math.floor(Math.random() * 899 + 100);
  const third = Math.floor(Math.random() * 8999 + 1000);
  return `${first}-${second}-${third}`;
}

function randomBoolean(): boolean {
  return !!Math.floor(Math.random() * 2);
}

export function generateClient(): Client {
  return {
    id: URL.createObjectURL(new Blob())
      .toString()
      .split("/")
      .reverse()[0]
      .substring(0, 8),
    dateAdded: new Date(),
    lastUpdated: new Date(),

    dateOfReferral: new Date(),
    referringAgency: "Cornell",
    agencyContactName: "Andrew",
    agencyContactEmail: "andrew@cornell.edu",
    agencyContactPhone: randomPhone(),

    // client data
    clientName: "Johann Smith",
    clientPhone: randomPhone(),
    clientAddress: "123 ABC Rd",
    clientArea: Area.DowntownIthaca,
    clientAreaOther: "",

    // request data
    comments: "comment",
    staffNotes: "staff notes",

    requestedFurniture: {
      queenOrFullBed: randomBoolean(),
      twinBed: randomBoolean(),
      couch: randomBoolean(),
      livingRoomChair: randomBoolean(),
      tableAndChairs: randomBoolean(),
      otherTables: randomBoolean(),
      dresser: randomBoolean(),
      crib: randomBoolean(),
      other: randomBoolean(),
    },

    reasonForNeed: {
      leavingHomelessness: randomBoolean(),
      recentReleasedPrison: randomBoolean(),
      pregnantMember: randomBoolean(),
      childrenUnder18: randomBoolean(),
      hasDisability: randomBoolean(),
      isVeteran: randomBoolean(),
      isElderly: randomBoolean(),
      domesticViolence: randomBoolean(),
    },
  };
}

export function furnitureRequested(req: RequestedFurniture): string {
  let string = "";
  if (req.queenOrFullBed) {
    string += "Full Bed, ";
  }
  if (req.twinBed) {
    string += "Twin Bed, ";
  }
  if (req.couch) {
    string += "Couch, ";
  }
  if (req.livingRoomChair) {
    string += "Living Room Chair, ";
  }
  if (req.tableAndChairs) {
    string += "Table and Chairs, ";
  }
  if (req.dresser) {
    string += "Dresser, ";
  }
  if (req.crib) {
    string += "Crib, ";
  }
  if (req.other) {
    string += "Other, ";
  }
  if (string !== "") {
    string = string.substr(0, string.length - 2);
  }
  return string;
}

export function needReason(need: NeedReason): string {
  let string = "";
  if (need.leavingHomelessness) {
    string += "Leaving Homeless, ";
  }
  if (need.recentReleasedPrison) {
    string += "Recently Released from Prison, ";
  }
  if (need.pregnantMember) {
    string += "Pregnant Member, ";
  }
  if (need.childrenUnder18) {
    string += "Children U18, ";
  }
  if (need.hasDisability) {
    string += "Disability, ";
  }
  if (need.isVeteran) {
    string += "Veteran, ";
  }
  if (need.isElderly) {
    string += "Elderly, ";
  }
  if (need.domesticViolence) {
    string += "Domestic Violence, ";
  }
  if (string !== "") {
    string = string.substr(0, string.length - 2);
  }
  return string;
}
