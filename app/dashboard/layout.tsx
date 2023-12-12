import SideNav from '../ui/dashboard/sidenav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="md-12 flex-grow p-6 md:overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
