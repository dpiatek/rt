'use client';

import React, { useState } from 'react';

import { Header } from '../Header';
import { OrdersGrid } from '../OrdersGrid';
import { Order } from '../Order';
import { Activity } from '../Activity';

import { useAcceptedOrders } from '../../hooks/useAcceptedOrders';
import { useLiveDemand } from '../../hooks/useLiveDemand';
import { useRecentActivity } from '../../hooks/useRecentActivity';

const AcceptedOrders: React.FC = () => {
  const acceptedOrders = useAcceptedOrders();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="mb-8">
      <Header
        title="Accepted Orders"
        collapsed={collapsed}
        setCollapsed={() => setCollapsed(!collapsed)}
      />

      {acceptedOrders?.isSuccess ? (
        <OrdersGrid collapsed={collapsed}>
          {acceptedOrders?.data?.results.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </OrdersGrid>
      ) : null}
    </section>
  );
};

const LiveDemand: React.FC = () => {
  const liveDemand = useLiveDemand();
  const [liveDemandCollapsed, setLiveDemandCollapsed] = useState(false);

  return (
    <section className="mb-8">
      <Header
        title="Live Demand"
        collapsed={liveDemandCollapsed}
        setCollapsed={() => setLiveDemandCollapsed(!liveDemandCollapsed)}
      />

      {liveDemand?.isSuccess ? (
        <OrdersGrid collapsed={liveDemandCollapsed}>
          {liveDemand?.data?.results.map((order) => {
            return <Order key={order.id} order={order} showControls={true} />;
          })}
        </OrdersGrid>
      ) : null}
    </section>
  );
};

const RecentActivity: React.FC = () => {
  const recentActivity = useRecentActivity();
  const [recentActivityCollapsed, setRecentActivityCollapsed] = useState(false);

  return (
    <section className="mb-8">
      <Header
        title="Recent Activity"
        collapsed={recentActivityCollapsed}
        setCollapsed={() =>
          setRecentActivityCollapsed(!recentActivityCollapsed)
        }
      />

      {recentActivity?.isSuccess ? (
        <OrdersGrid collapsed={recentActivityCollapsed}>
          {recentActivity?.data?.map((activity) => {
            return <Activity key={activity.id} activity={activity} />;
          })}
        </OrdersGrid>
      ) : null}
    </section>
  );
};

const LiveMarket = () => {
  return (
    <main className="p-8 bg-[#F5F5F5]">
      <AcceptedOrders />
      <LiveDemand />
      <RecentActivity />
    </main>
  );
};

export { LiveMarket };
