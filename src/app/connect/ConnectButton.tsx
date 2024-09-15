"use client";
import * as React from "react";

import { useAzure } from "../context/AzureContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function Connect() {
  const { isConnected, connect } = useAzure();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleConnect = () => {
    // Logic to connect to the Azure portal
    console.log("Connecting to Azure portal...");
    connect();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Set a cookie to indicate the user is connected
    document.cookie = "azureConnected=true; path=/";

    // Redirect to the dashboard
    window.location.href = "/dashboard";
    router.push("/dashboard"); // Redirect to the dashboard page after connecting
  };

  if (isConnected) {
    router.push("/dashboard"); // Redirect to the dashboard if already connected
  }

  return (
    <Button onClick={handleConnect} disabled={isLoading}>
      {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      Connect
    </Button>
  );
}
