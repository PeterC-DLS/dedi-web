import { create } from "zustand";
import NumericRange from "../calculations/numericRange";
import { quantityQ, ScatteringQuantity } from "./scatteringQuantities";

export interface ResultStore {
    selected: ScatteringQuantity;
    requestedRange: NumericRange;
    update: (results: Partial<ResultStore>) => void;
}

export const useResultStore = create<ResultStore>((set) => ({
    selected: quantityQ,
    requestedRange: new NumericRange(0, 1),
    update: (results: Partial<ResultStore>) => {
        set({ ...results });
    },

}));
