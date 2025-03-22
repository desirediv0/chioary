export const metadata = {
    title: "Dashboard - Adyashakti",
    description: "Dashboard for Adyashakti",
};


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background">
            {/* <Sidenav /> */}
            <main className="md:pl-56 pt-4 md:pt-0">
                <div className="container mx-auto p-4 md:p-8">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
