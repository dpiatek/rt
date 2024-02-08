import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAcceptOrder = (orderId: number) => {
  const queryClient = useQueryClient();
  const acceptOrder = useMutation({
    mutationKey: ['accept-order', orderId],
    mutationFn: async (orderId: number) => {
      return await fetch('http://localhost:3333/accepted-orders', {
        method: 'POST',
        body: JSON.stringify({
          orderId: orderId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['accepted-orders'],
      });

      queryClient.invalidateQueries({
        queryKey: ['live-demand'],
      });
    }
  });

  return acceptOrder;
}

export { useAcceptOrder };