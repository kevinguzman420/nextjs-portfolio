import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Navbar from './Navbar';

const Layout = ({ children, footer=true }) => {

    const router = useRouter();

    // for the loader page
    useEffect(() => {

        const handleRouteChange = () => {
            // To init "NProgress"
            NProgress.start();
        }

        router.events.on("routeChangeStart", handleRouteChange);
    
        // To indicate "NProgress" finally
        router.events.on("routeChangeComplete", () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, []);

    return (
        <>
            <Navbar />

            <main className="container py-4">
                { children }
            </main>

            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Ryan Ray Portfolio</h1>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>All rights Reserved.</p>
                        </div>
                    </footer>
                )
            }
        </>
    )
}

export default Layout;
