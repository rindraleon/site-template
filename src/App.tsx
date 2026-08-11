import { RouterProvider, useRouter } from '@/lib/router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { Formations } from '@/pages/Formations';
import { Projets } from '@/pages/Projets';
import { Actualites } from '@/pages/Actualites';
import { Partenaires } from '@/pages/Partenaires';
import { Contact } from '@/pages/Contact';
import { Admission } from '@/pages/Admission';

function Routes() {
  const { path } = useRouter();

  if (path.startsWith('/formations')) return <Formations />;
  if (path.startsWith('/projets')) return <Projets />;
  if (path.startsWith('/actualites')) return <Actualites />;
  if (path.startsWith('/partenaires')) return <Partenaires />;
  if (path.startsWith('/contact')) return <Contact />;
  if (path.startsWith('/admission')) return <Admission />;
  return <Home />;
}

function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;
