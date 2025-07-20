import React, { useState } from 'react';
import SessionContext from '../contexts/SessionContext';
import Session from '../core/tasks/entities/Session.entitie';

function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<Session[]>([]);

  return (
    <SessionContext.Provider value={{ sessions, setSessions }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
