import { useEffect } from 'react';
import { fallbackRequestName } from '../lib/fallbackRequestName';
import { useActiveEnvironment } from './useActiveEnvironment';
import { useActiveRequest } from './useActiveRequest';
import { useActiveWorkspace } from './useActiveWorkspace';

export function useSyncWindowTitle() {
  const activeRequest = useActiveRequest();
  const activeWorkspace = useActiveWorkspace();
  const activeEnvironment = useActiveEnvironment();
  useEffect(() => {
    let newTitle = activeWorkspace ? activeWorkspace.name : 'Yaak';
    if (activeEnvironment) {
      newTitle += ` [${activeEnvironment.name}]`;
    }
    if (activeRequest) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      newTitle += ` – ${fallbackRequestName(activeRequest)}`;
    }

    // TODO: This resets the stoplight position so we can't use it yet
    // invoke('cmd_set_title', { title: newTitle }).catch(console.error);
  }, [activeEnvironment, activeRequest, activeWorkspace]);
}
