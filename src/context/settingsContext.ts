import React from 'react';
import { SettingsContextType } from 'types';

const SettingsContext = React.createContext<SettingsContextType>({
  onBoarded: false,
  enabledExposureNotifySystem: false,
  enabledNotifications: false,
  enableExposureNotiySystem: async (_allow: boolean) => {
    /* defined by the root ancestor component that uses this context. */
  },
  enableNotifications: async (_allow: boolean) => {
    /* defined by the root ancestor component that uses this context. */
  },
  setAsOnboared: async (_onboarded: boolean) => {
    /* defined by the root ancestor component that uses this context. */
  },
});

SettingsContext.displayName = 'UserSettingsContext';

export default SettingsContext;
