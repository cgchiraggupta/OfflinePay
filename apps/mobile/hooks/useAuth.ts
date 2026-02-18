import { useState } from "react";

// Placeholder - replace with Clerk useAuth when integrated
export function useAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const signOut = () => {
    setIsSignedIn(false);
    setUserId(null);
  };

  return {
    isSignedIn,
    userId,
    signOut,
  };
}
