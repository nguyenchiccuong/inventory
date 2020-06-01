import { Furniture } from "@/data/Furniture";

export interface InventoryState {
  inventory: Furniture[];
  archive: Furniture[];
  current: Furniture | null;
  selected: Furniture[];
  currentUpdates: Partial<Furniture>;
}

export enum mutation {
  CLEAR_INVENTORY = "CLEAR_INVENTORY",
  SET_CURRENT = "SET_CURRENT",
  CLEAR_CURRENT = "CLEAR_CURRENT",
  UPDATE_CURRENT = "UPDATE_CURRENT",
  ADD_UPDATES = "ADD_UPDATES",
  CLEAR_UPDATES = "CLEAR_UPDATES",
  SET_SELECTED = "SET_SELECTED",
  CLEAR_SELECTED = "CLEAR_SELECTED",
  ADD_SELECTED = "ADD_SELECTED",
}
