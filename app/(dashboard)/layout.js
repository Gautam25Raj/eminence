import UserLoginCheck from '@/components/IntialCheck/UserLoginChecker';
import CheckLogin from '@/components/layout/Login/CheckLogin';
import DashboardContainer from '@/components/layout/dashboard/DashboardContainer';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import Sidebar from '@/components/layout/dashboard/Sidebar';

export default function DashLayout({ children }) {
  return (
    <UserLoginCheck>
      <div className="p-3 bg-black h-screen w-screen overflow-x-hidden gap-3 flex relative">
        <Sidebar />

        <DashboardContainer>
          <PageHeader />
          {children}
        </DashboardContainer>

        <CheckLogin />
      </div>
    </UserLoginCheck>
  );
}
