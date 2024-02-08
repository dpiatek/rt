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

const Order: React.FC = () => {
  return (
    <div className="grid grid-cols-subgrid col-span-12 bg-[#FFFFFF] p-3 justify-items-center">
      <div className="col-span-6 justify-self-start">
        <div className="flex items-center">
          <StatusLabel />
          <p className="text-base text-[#2D2D2E] mr-3">
            Salmon machine cut filet
          </p>
          <span className="text-xs text-[#808080]">just now</span>
        </div>

        <div>
          <TitleLabel>100+g</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>whole</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>Trawls</TitleLabel>
          <TitleLabel>•</TitleLabel>
          <TitleLabel>FRA</TitleLabel>
        </div>
      </div>

      <Col>
        <span className="text-sm text-white bg-[#939599] rounded-full w-6 h-6 text-center block">
          <span className="leading-none align-middle">A-</span>
        </span>
      </Col>

      <Col>
        <ColText>Today</ColText>
      </Col>

      <Col>
        <ColText>&lt;100 boxes</ColText>
      </Col>

      <Col>
        <ColText>€7.00</ColText>
      </Col>
    </div>
  );
};

export { Order };