'use client';

import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    workbox: Workbox;
  }
}

const PWAController = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const wb = window.workbox as Workbox;
      wb.addEventListener('waiting', () => {
        if (window.confirm('A newer version of this web app is available, reload to update?')) {
          wb.addEventListener('controlling', () => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.',
          );
        }
      });
      wb.register();
    }
  }, []);
  return <></>;
};

export default PWAController;
