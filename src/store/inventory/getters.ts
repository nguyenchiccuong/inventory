/* eslint no-shadow: ["error", { "allow": ["getters"] }] */
import { GetterTree } from "vuex";
import { Furniture } from "@/data/Furniture";
import { InventoryState } from "./types";
import { RootState } from "../types";

const getters: GetterTree<InventoryState, RootState> = {
  getInventory: (state: InventoryState): Furniture[] => state.inventory,
  getItem: (state: InventoryState) => (id: string): Furniture | undefined =>
    state.inventory.find((item: Furniture) => item.id === id),
  getItemIndex: (state: InventoryState, getters: any) => (
    id: string,
  ): number => {
    const item: Furniture = getters.getItem(state, id);
    return state.inventory.indexOf(item);
  },
};

export default getters;
