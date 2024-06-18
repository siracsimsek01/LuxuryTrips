import Navbar from './Navbar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <Navbar />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;