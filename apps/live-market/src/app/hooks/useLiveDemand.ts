import { useQuery } from "@tanstack/react-query";

import { Order } from "@rt/interfaces"

const fetchLiveDemand: () => Promise<{
  results: Order[];
}> = async () => {
  const response = await fetch("http://localhost:3333/live-demand");
  const data = await response.json();
  return data;
};

const useLiveDemand = () => {
  return useQuery({
    queryKey: ["live-demand"],
    queryFn: () => fetchLiveDemand(),
  })
}

export { useLiveDemand, fetchLiveDemand };