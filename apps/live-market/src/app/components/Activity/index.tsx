import { format } from 'date-fns';

import type { Activity as IActivity } from '@rt/interfaces';

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

const Activity: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const activityName = `${activity.sku.species} ${activity.sku.type}`;

  // Ideally this would not be done on the frontend at all
  const currency: { [key: string]: string } = {
    ENG: '£',
    FRA: '€',
    NOR: 'kr',
  };

  return (
    <div className="grid grid-cols-subgrid col-span-12 bg-[#FFFFFF] p-3 justify-items-center mb-2">
      <div className="col-span-6 justify-self-start">
        <div className="flex items-center">
          <StatusLabel />
          <p className="text-base text-[#2D2D2E] mr-3">{activityName}</p>
          <span className="text-xs text-[#808080]">N/A</span>
        </div>

        <div>
          <TitleLabel>{activity.grade}</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>{activity.sku.variation}</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>{activity.fishing_method}</TitleLabel>
          {activity.country ? (
            <>
              <TitleLabel>•</TitleLabel>
              <TitleLabel>{activity.country}</TitleLabel>
            </>
          ) : null}
        </div>
      </div>

      <Col>
        <span className="text-sm text-white bg-[#939599] rounded-full w-6 h-6 text-center block">
          <span className="leading-none align-middle">{activity.quality}</span>
        </span>
      </Col>

      <Col>
        <ColText>
          {format(new Date(activity.dispatch_date), 'E, do LLL')}
        </ColText>
      </Col>

      <Col>
        {/* This is inconsistent in the date, skipping formatting */}
        <ColText>{activity.quantity}</ColText>
      </Col>

      <Col>
        <ColText>{`${currency[activity.country]}${activity.price}`}</ColText>
      </Col>
    </div>
  );
};

export { Activity };
