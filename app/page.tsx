import CustomerCenteric from "./components/customer-centeric/CustomerCenteric";
import Home from "./components/home/Home";
import Products from "./components/products/Products";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home />
      <CustomerCenteric />
      <Products />
    </main>
  );
}
