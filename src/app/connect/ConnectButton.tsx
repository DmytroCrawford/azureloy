'use client';

import { useAzure } from '../context/AzureContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'

export default function Connect() {
  const { isConnected, connect } = useAzure();
  const router = useRouter();

  const handleConnect = () => {
    // Logic to connect to the Azure portal
    console.log('Connecting to Azure portal...');
    connect();
    
    // Set a cookie to indicate the user is connected
    document.cookie = "azureConnected=true; path=/";

    // Redirect to the dashboard
    window.location.href = "/dashboard";
    router.push('/dashboard'); // Redirect to the dashboard page after connecting
  };

  if (isConnected) {
    router.push('/dashboard'); // Redirect to the dashboard if already connected
  }

  return (
    <div className="connect-page">
      <Button onClick={handleConnect}>Connect</Button>
    </div>
  );
}
