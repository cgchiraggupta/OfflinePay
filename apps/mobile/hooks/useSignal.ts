import { useState, useEffect } from "react";

type SignalStatus = "strong" | "moderate" | "weak";

// Placeholder - replace with actual signal detection when implemented
export function useSignal() {
  const [status, setStatus] = useState<SignalStatus>("strong");

  useEffect(() => {
    // TODO: Integrate with actual network signal detection
    setStatus("strong");
  }, []);

  const isWeak = status === "weak";

  return { status, isWeak };
}
