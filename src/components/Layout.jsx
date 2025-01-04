import AppBar from './AppBar/AppBar.jsx';


const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;