import { useQuery } from "@tanstack/react-query";

import { Order } from "@rt/interfaces"

const fetchAcceptedOrders: () => Promise<{
  results: Order[];
}> = async () => {
  const response = await fetch("http://localhost:3333/accepted-orders");
  const data = await response.json();
  return data;
};

const useAcceptedOrders = () => {
  return useQuery({
    queryKey: ["accepted-orders"],
    queryFn: () => fetchAcceptedOrders(),
  })
}

export { useAcceptedOrders, fetchAcceptedOrders };