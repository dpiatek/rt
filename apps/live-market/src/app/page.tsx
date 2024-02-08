import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";

import { LiveMarket } from "./components/LiveMarket";
import { fetchAcceptedOrders } from "./hooks/useAcceptedOrders";

export default async function Index() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["accepted-orders"],
    queryFn: () => fetchAcceptedOrders(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LiveMarket />
    </HydrationBoundary>  

  );
}
