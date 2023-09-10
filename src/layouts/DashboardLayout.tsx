import { Outlet } from 'react-router-dom';
import Wrapper from '@/assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '@/components';
import DashboardContextProvider from '@/context/DashboardContextProvider';

const DashboardLayout = () => {
  return (
    <DashboardContextProvider>
      <Wrapper>
        <main className="dashboard">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContextProvider>
  );
};

export default DashboardLayout;
