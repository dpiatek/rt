"use client"

import { Header } from '../Header';
import { OrdersGrid } from '../OrdersGrid';
import { Order } from '../Order';

import { useAcceptedOrders } from '../../hooks/useAcceptedOrders';

const LiveMarket = () => {
  const { data } = useAcceptedOrders();

  return (
    <main className="p-8 bg-[#F5F5F5]">
      <section>
        <Header title="Accepted Orders" />

        <OrdersGrid>
          {data?.results.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </OrdersGrid>
      </section>
    </main>
  );
};

export { LiveMarket };
