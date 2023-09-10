import { FC, PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';

interface DashboardContext {
  user: {
    name: string;
  };
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleShowSidebar: () => void;
  logoutUser: () => void;
}

const DashboardContext = createContext<DashboardContext>(null!);

export const useDashboardContext = () => useContext(DashboardContext);

const DashboardContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //temp
  const user = { name: 'John' };

  // placeholder
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  const value = {
    user,
    showSidebar,
    isDarkTheme,
    toggleDarkTheme,
    toggleShowSidebar,
    logoutUser,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
