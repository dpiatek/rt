import { Header } from './components/Header';
import { OrdersGrid } from './components/OrdersGrid';
import { Order } from './components/Order';

export default async function Index() {
  return (
    <main className="p-8 bg-[#F5F5F5]">
      <section>
        <Header title="Accepted Orders" />

        <OrdersGrid>
          <Order />
        </OrdersGrid>
      </section>
    </main>
  );
}
