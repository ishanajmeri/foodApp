import BottomNavigation from "@components/common/bottomNavigation";

export default function OwlLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full">
            {children}
            <BottomNavigation />
        </div>
    );
}
