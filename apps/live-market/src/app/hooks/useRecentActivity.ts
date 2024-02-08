import { useQuery } from "@tanstack/react-query";

import { Activity } from "@rt/interfaces"

const fetchRecentActivity: () => Promise<Activity[]> = async () => {
  const response = await fetch("http://localhost:3333/recent-activity");
  const data = await response.json();
  return data;
};

const useRecentActivity = () => {
  return useQuery({
    queryKey: ["recent-activity"],
    queryFn: () => fetchRecentActivity(),
  })
}

export { useRecentActivity, fetchRecentActivity };