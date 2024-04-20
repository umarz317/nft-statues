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
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isOpenMint: boolean;
  setOpenMint: (open: boolean) => void;
  isOpenMintForm: boolean;
  setOpenMintForm: (open: boolean) => void;
  statuesValue: StatueType[];
  setStatuesValue: (statues: StatueType[]) => void;
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
  isOpen: false,
  setOpen: (open: boolean) => {},
  isOpenMint: false,
  setOpenMint: (open: boolean) => {},
  isOpenMintForm: false,
  setOpenMintForm: (open: boolean) => {},
  statuesValue: [],
  setStatuesValue: (statues: StatueType[]) => {},
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
  const [isOpen, setOpen] = useState(false);
  const [isOpenMint, setOpenMint] = useState(false);
  const [isOpenMintForm, setOpenMintForm] = useState(false);
  const [statuesValue, setStatuesValue] = useState<StatueType[]>([]);

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
        isOpen,
        setOpen,
        isOpenMint,
        setOpenMint,
        isOpenMintForm,
        setOpenMintForm,
        statuesValue,
        setStatuesValue,
      }}
    >
      {children}
    </MintItemDrawerContext.Provider>
  );
}
