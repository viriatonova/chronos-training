import SessionContext from '../contexts/SessionContext';
import { useContext } from 'react';

function useSessions() {
  return useContext(SessionContext);
}

export default useSessions;
