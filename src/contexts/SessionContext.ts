import React, { createContext } from 'react';
import Session from '../core/tasks/entities/Session.entitie';

type SessionContextProps = {
  sessions: Session[] | [];
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
};

const SessionContext = createContext<SessionContextProps>({
  sessions: [],
  setSessions: () => {},
});

export default SessionContext;
