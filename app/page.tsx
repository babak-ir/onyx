import CustomerCenteric from "./components/customer-centeric/CustomerCenteric";
import Home from "./components/home/Home";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home />
      <CustomerCenteric />
    </main>
  );
}
