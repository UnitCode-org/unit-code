import { RefObject } from "react";
import { create } from "zustand";

type IndexRefStore = {
  aboutUsRef: RefObject<HTMLDivElement> | null;
  setAboutUsRef: (ref: RefObject<HTMLDivElement>) => void;
  contactUsRef: RefObject<HTMLDivElement> | null;
  setContactUsRef: (ref: RefObject<HTMLDivElement>) => void;
};

export const useIndexRefStore = create<IndexRefStore>((set) => ({
  aboutUsRef: null,
  setAboutUsRef: (aboutUsRef) => set({ aboutUsRef }),
  contactUsRef: null,
  setContactUsRef: (contactUsRef) => set({ contactUsRef }),
}));
