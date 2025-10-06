"use client";

import { useState, useEffect } from 'react';
import { WifiOff, Wifi, RefreshCw, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const OfflineIndicator = () => {
  // Tracks the actual browser connection status.
  const [isOnline, setIsOnline] = useState(true);
  
  // Controls the visibility of the temporary "Back Online" stripe.
  const [showBackOnlineStripe, setShowBackOnlineStripe] = useState(false);

  // This effect manages the browser's online/offline event listeners.
  useEffect(() => {
    // Set the initial connection status.
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      // Action: Just set the state to show the stripe. The other effect will handle the timer.
      setShowBackOnlineStripe(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      // Action: Immediately hide the stripe if the user goes offline.
      setShowBackOnlineStripe(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // This effect is dedicated to making the "Back Online" stripe temporary.
  // It runs whenever `showBackOnlineStripe` changes.
  useEffect(() => {
    // If the stripe is not meant to be shown, do nothing.
    if (!showBackOnlineStripe) {
      return;
    }

    // Side Effect: When the stripe is shown, set a timer to hide it.
    const timerId = setTimeout(() => {
      setShowBackOnlineStripe(false);
    }, 3000); // Hide after 3 seconds

    // Cleanup: If the component unmounts or if `showBackOnlineStripe` becomes false
    // (e.g., user goes offline again quickly), clear the timer to prevent a memory leak.
    return () => clearTimeout(timerId);
  }, [showBackOnlineStripe]);


  return (
    <>
      {/* 
        STATE 1: PERSISTENT OFFLINE MODAL
        This is the only UI shown when offline.
      */}
      {!isOnline && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 p-4 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 text-center">
            <WifiOff className="size-16 text-destructive" />
            <h1 className="text-3xl font-bold">You Are Currently Offline</h1>
            <p className="max-w-md text-muted-foreground">
              Please check your internet connection to continue.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 size-4" />
                Go Back
              </Button>
              <Button onClick={() => window.location.reload()}>
                <RefreshCw className="mr-2 size-4" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 
        STATE 2: TEMPORARY "BACK ONLINE" STRIPE
        Its visibility is now managed by the dedicated useEffect hook.
      */}
      <div
        className={cn(
          "fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-2 bg-emerald-600 p-4 text-sm font-medium text-white shadow-lg transition-transform duration-300 ease-in-out",
          showBackOnlineStripe ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <Wifi className="size-5" />
        <span>You are back online.</span>
      </div>
    </>
  );
};

export default OfflineIndicator;