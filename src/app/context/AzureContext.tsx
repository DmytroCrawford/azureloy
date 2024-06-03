'use client'

import { createContext, useContext, useState, ReactNode } from 'react';
//import { cookies } from 'next/headers'

type AzureContextType = {
  isConnected: boolean;
  connect: () => void;
};

const AzureContext = createContext<AzureContextType | undefined>(undefined);

export const AzureProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    // Logic to connect to Azure
    document.cookie = "azureConnected=true; path=/";
    //cookies().set('azureConnected', 'true')
    setIsConnected(true);
  };

  return (
    <AzureContext.Provider value={{ isConnected, connect }}>
      {children}
    </AzureContext.Provider>
  );
};

export const useAzure = () => {
  const context = useContext(AzureContext);
  if (context === undefined) {
    throw new Error('useAzure must be used within an AzureProvider');
  }
  return context;
};
