const OrdersGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="grid grid-cols-subgrid col-span-12 h-[40px] items-center">
        <div className="col-start-7 col-span-1 text-center">
          <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">
            Quality
          </p>
        </div>
        <div className="col-start-8 col-span-1 text-center">
          <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">
            Dispatch date
          </p>
        </div>
        <div className="col-start-9 col-span-1 text-center">
          <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">
            Quantity
          </p>
        </div>
        <div className="col-start-10 col-span-1 text-center">
          <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">
            Price / kg
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export { OrdersGrid };