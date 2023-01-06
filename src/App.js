import './App.css';
// Component
import Store from './components/store/Store';
// Context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
};

export default App;
