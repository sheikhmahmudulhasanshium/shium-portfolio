// MainLayout.tsx
import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <div className="fixed inset-y-0 left-0 z-30 p-4 bg-gray-400 w-[120px] dark:bg-slate-900">
        <NavigationSidebar />
      </div>
      <main className="flex-grow h-full ">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
