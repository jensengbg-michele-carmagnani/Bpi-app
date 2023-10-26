import { create } from "zustand";
import { persist } from "zustand/middleware";
enum STEPS {
  START = 0,
  LOCATIONPAIN = 1,
  PAINASSESSMENT = 2,
  CAPABILITIESASSESSMENT = 3,
  RESULTS = 4,
}
type Data = {
  bodylocation: string;
  maxPain24h: string;
  minPain24h: string;
  avaragePain24h: string;
  instantPain: string;
  therapyDescribe: string;
  painRelieveTherapy24h: string;
  generalLife: string;
  mood: string;
  walkingCapability: string;
  ordinaryWorkTime: string;
  relationship: string;
  sleeping: string;
  enjoyLife: string;
};
type State = {
  step: STEPS;
  userData: Data;
};
type Action = {
  setData: (data: { [key: string]: string }) => void;
  onBack: () => void;
  onNext: () => void;
  resetStep: () => void;
};

const useZStore = create<Action & State>()(
  persist(
    (set) => ({
      userData: {
        bodylocation: "",
        maxPain24h: "",
        minPain24h: "",
        avaragePain24h: "",
        instantPain: "",
        therapyDescribe: "",
        painRelieveTherapy24h: "",
        generalLife: "",
        mood: "",
        walkingCapability: "",
        ordinaryWorkTime: "",
        relationship: "",
        sleeping: "",
        enjoyLife: "",
      },
      step: STEPS.START,
      setData: (data: { [key: string]: string }) => {
        return (state: State) => ({ ...state.userData, ...data });
      },
      onBack: () => set((state) => ({ step: state.step - 1 })),
      onNext: () => set((state) => ({ step: state.step + 1 })),
      resetStep: () => set((state) => ({ step: (state.step = 0) })),
    }),
    { name: "bpi_Storage" }
  )
);

export default useZStore;
