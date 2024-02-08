import { useMutation, useQueryClient } from '@tanstack/react-query';

const useIgnoreOrder = (orderId: number) => {
  const queryClient = useQueryClient();
  const ignoreOrder = useMutation({
    mutationKey: ['ignore-order', orderId],
    mutationFn: async (orderId: number) => {
      return await fetch('http://localhost:3333/live-demand', {
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
        queryKey: ['live-demand'],
      });
    }
  });

  return ignoreOrder;
}

export { useIgnoreOrder };