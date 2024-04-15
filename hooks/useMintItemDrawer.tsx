import { useState } from "react";
import { createContext, useContext } from "react";

export const MintItemDrawerContext = createContext({
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
      }}
    >
      {children}
    </MintItemDrawerContext.Provider>
  );
}
