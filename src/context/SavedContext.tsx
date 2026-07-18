"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Opportunity } from "@/types/opportunity";


interface SavedContextType {

  savedOpportunities: Opportunity[];

  saveOpportunity: (opportunity: Opportunity) => void;

  removeOpportunity: (id: number) => void;

  isSaved: (id: number) => boolean;

  isLoaded: boolean;

}


const SavedContext = createContext<SavedContextType | undefined>(
  undefined
);



interface SavedProviderProps {
  children: ReactNode;
}



export function SavedProvider({
  children,
}: SavedProviderProps) {

  const [isLoaded, setIsLoaded] = useState(false);

  const [savedOpportunities, setSavedOpportunities] = useState<
    Opportunity[]
  >([]);



  // Load from LocalStorage

  useEffect(() => {

    const saved = localStorage.getItem(
      "kaaryab-saved"
    );


    if (saved) {

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSavedOpportunities(
        JSON.parse(saved)
      );

    }

  }, []);




  // Save to LocalStorage

  useEffect(() => {

    localStorage.setItem(
      "kaaryab-saved",
      JSON.stringify(savedOpportunities)
    );

  }, [savedOpportunities]);





  function saveOpportunity(
    opportunity: Opportunity
  ) {

        setSavedOpportunities((prev) => {

        const exists = prev.some(
          item => item.id === opportunity.id
        );

        if (exists) return prev;

        return [
          ...prev,
          opportunity
        ];

      });

  }





  function removeOpportunity(id: number) {

    setSavedOpportunities((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  }





  function isSaved(id: number) {

    return savedOpportunities.some(
      (item) => item.id === id
    );

  }





  return (

    <SavedContext.Provider
      value={{
        savedOpportunities,
        saveOpportunity,
        removeOpportunity,
        isSaved,
        isLoaded,
      }}
    >

      {children}

    </SavedContext.Provider>

  );

}





export function useSaved() {

  const context = useContext(
    SavedContext
  );


  if (!context) {

    throw new Error(
      "useSaved must be used inside SavedProvider"
    );

  }


  return context;

}