// https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b

import { createContext, useState, useMemo, useEffect } from "react";

export const SnackBarContext = createContext();

const AUTO_DISMISS = 5000;

export function SnackbarProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const activeAlertIds = alerts.join(",");
  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS
      );
      return () => clearTimeout(timer);
    }
  }, [activeAlertIds]);

  const addAlert = (alert) => setAlerts((alerts) => [alert, ...alerts]);

  const value = useMemo(() => ({ addAlert }), [addAlert]);

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert) => (
        <div key={alert} style={{ border: "1px solid" }}>
          {alert}
        </div>
      ))}
    </SnackBarContext.Provider>
  );
}
