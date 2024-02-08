import { formatDistance, format } from 'date-fns';

import type { Order as IOrder } from '@rt/interfaces';

import { useIgnoreOrder } from '../../hooks/useIgnoreOrder';
import { useAcceptOrder } from '../../hooks/useAcceptOrder';

import { ActivityLabel, type Status } from '../ActivityLabel';

const TitleLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-sm text-[#2D2D2E] mr-2">{children}</span>;
};

const Col: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="self-center">{children}</div>;
};

const ColText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-[#2D2D2E] text-base">{children}</span>;
};

const Order: React.FC<{ order: IOrder; showControls?: boolean }> = ({
  order,
  showControls,
}) => {
  const acceptOrder = useAcceptOrder(order.id);
  const ignoreOrder = useIgnoreOrder(order.id);

  const orderName = `${order.sku.species} ${order.sku.type}`;

  // Ideally this would not be done on the frontend at all
  const currency: { [key: string]: string } = {
    ENG: '£',
    FRA: '€',
  };

  return (
    <div className="grid grid-cols-subgrid col-span-12 bg-[#FFFFFF] p-3 justify-items-center mb-2">
      <div className="col-span-6 justify-self-start">
        <div className="flex items-center">
          <ActivityLabel status={order.status as Status} />
          <p className="text-base text-[#2D2D2E] mr-3">{orderName}</p>
          <span className="text-xs text-[#808080]">
            {/* Not sure which date should go here */}
            {formatDistance(new Date(order.createdAt), new Date(), {
              addSuffix: true,
            })}
          </span>
        </div>

        <div>
          <TitleLabel>{order.grade}</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>{order.sku.variation}</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>{order.fishingMethod}</TitleLabel>
          {order.country ? (
            <>
              <TitleLabel>•</TitleLabel>
              <TitleLabel>{order.country}</TitleLabel>
            </>
          ) : null}
        </div>
      </div>

      <Col>
        <span className="text-sm text-white bg-[#939599] rounded-full w-6 h-6 text-center block">
          <span className="leading-none align-middle">{order.quality}</span>
        </span>
      </Col>

      <Col>
        <ColText>{format(new Date(order.dispatchDate), 'E, do LLL')}</ColText>
      </Col>

      <Col>
        {/* This is inconsistent in the date, skipping formatting */}
        <ColText>{order.quantity}</ColText>
      </Col>

      <Col>
        <ColText>
          {order.country ? `${currency[order.country]}${order.price}` : 'N/A'}
        </ColText>
      </Col>

      {showControls ? (
        <div className="flex col-span-2">
          <button
            className="bg-[#2971C7] py-2 px-4 rounded-sm text-white mr-4"
            onClick={() => {
              acceptOrder.mutate(order.id);
            }}
          >
            Accept
          </button>

          <button
            className="text-[#2971C7] py-2 px-4 rounded-sm bg-white border border-[#2971C7]"
            onClick={() => {
              ignoreOrder.mutate(order.id);
            }}
          >
            Ignore
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { Order };
