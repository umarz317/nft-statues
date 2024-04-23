import { createContext, useContext, useState } from "react";

type StatueType = {
  title: string;
  material: string;
  height: number;
  weight: number;
  price: number;
  image: any;
  _id: string;
};

type ContextType = {
  title: string;
  setTitle: (title: string) => void;
  height: number;
  setHeight: (height: number) => void;
  price: number;
  setPrice: (price: number) => void;
  material: string;
  setMaterial: (material: string) => void;
  weight: number;
  setWeight: (weight: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  fromBuyNow: boolean;
  setFromBuyNow: (open: boolean) => void;
  isOpenMint: boolean;
  setOpenMint: (open: boolean) => void;
  isOpenMintForm: boolean;
  setOpenMintForm: (open: boolean) => void;
  statuesValue: StatueType[];
  setStatuesValue: (statues: StatueType[]) => void;
  currentSelectedStatue: number;
  setCurrentSelectedStatue: (number: number) => void;
  selectedNFT: any;
  setSelectedNFT: any;
  isOpenSelectNFT: boolean;
  setOpenSelectNFT: (open: boolean) => void;
};

export const MintItemDrawerContext = createContext<ContextType>({
  title: "",
  setTitle: (title: string) => {},
  height: 0,
  setHeight: (height: number) => {},
  price: 0,
  setPrice: (price: number) => {},
  material: "",
  setMaterial: (material: string) => {},
  weight: 0,
  setWeight: (weight: number) => {},
  loading: false,
  setLoading: (loading: boolean) => {},
  isOpen: false,
  setOpen: (open: boolean) => {},
  fromBuyNow: false,
  setFromBuyNow: (open: boolean) => {},
  isOpenMint: false,
  setOpenMint: (open: boolean) => {},
  isOpenMintForm: false,
  setOpenMintForm: (open: boolean) => {},
  statuesValue: [],
  setStatuesValue: (statues: StatueType[]) => {},
  currentSelectedStatue: -1,
  setCurrentSelectedStatue: (number: number) => {},
  selectedNFT: {},
  setSelectedNFT: (selectedNFT: any) => {},
  isOpenSelectNFT: false,
  setOpenSelectNFT: (open: boolean) => {},
});

export function useMintItemDrawer() {
  return useContext(MintItemDrawerContext);
}

export default function MintItemDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState("");
  const [height, setHeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [fromBuyNow, setFromBuyNow] = useState(false);
  const [isOpenMint, setOpenMint] = useState(false);
  const [isOpenMintForm, setOpenMintForm] = useState(false);
  const [statuesValue, setStatuesValue] = useState<StatueType[]>([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [isOpenSelectNFT, setOpenSelectNFT] = useState(false);
  const [currentSelectedStatue, setCurrentSelectedStatue] =
    useState<number>(-1);

  return (
    <MintItemDrawerContext.Provider
      value={{
        title,
        setTitle,
        height,
        setHeight,
        price,
        setPrice,
        material,
        setMaterial,
        weight,
        setWeight,
        loading,
        setLoading,
        isOpen,
        setOpen,
        fromBuyNow,
        setFromBuyNow,
        isOpenMint,
        setOpenMint,
        isOpenMintForm,
        setOpenMintForm,
        statuesValue,
        setStatuesValue,
        currentSelectedStatue,
        setCurrentSelectedStatue,
        selectedNFT,
        setSelectedNFT,
        isOpenSelectNFT,
        setOpenSelectNFT,
      }}
    >
      {children}
    </MintItemDrawerContext.Provider>
  );
}
