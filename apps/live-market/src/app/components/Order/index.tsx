import { formatDistance, format } from 'date-fns';

import type { Order as IOrder } from '@rt/interfaces';

const TitleLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-sm text-[#2D2D2E] mr-2">{children}</span>;
};

const Col: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="self-center">{children}</div>;
};

const ColText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-[#2D2D2E] text-base">{children}</span>;
};

const StatusLabel: React.FC = () => {
  return (
    <span className="text-xs text-[#3E896C] bg-[#EFFAF3] h-[16px] px-1 rounded mr-3">
      Accepted
    </span>
  );
};

const Order: React.FC<{ order: IOrder }> = ({ order }) => {
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
          <StatusLabel />
          <p className="text-base text-[#2D2D2E] mr-3">{orderName}</p>
          <span className="text-xs text-[#808080]">
            {formatDistance(new Date(order.lastSaleAt), new Date(), {
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
          <TitleLabel>•</TitleLabel>
          <TitleLabel>{order.country}</TitleLabel>
        </div>
      </div>

      <Col>
        <span className="text-sm text-white bg-[#939599] rounded-full w-6 h-6 text-center block">
          <span className="leading-none align-middle">{order.quality}</span>
        </span>
      </Col>

      <Col>
        <ColText>{format(new Date(order.dispatchDate), "E, do LLL")}</ColText>
      </Col>

      <Col>
        {/* This is inconsistent in the date, skipping formatting */}
        <ColText>{order.quantity}</ColText>
      </Col>

      <Col>
        <ColText>{`${currency[order.country]}${order.price}`}</ColText>
      </Col>
    </div>
  );
};

export { Order };
