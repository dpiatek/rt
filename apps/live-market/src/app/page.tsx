import { Header } from "./components/Header";

export default async function Index() {
  return (
    <main className="p-8 bg-[#F5F5F5]">
      <section>
        <Header title="Accepted Orders" />

        <div className="grid grid-cols-12">
          <div className="grid grid-cols-subgrid col-span-12 h-[40px] items-center">
            <div className="col-start-7 col-span-1 text-center">
              <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">Quality</p>
            </div>
            <div className="col-start-8 col-span-1 text-center">
              <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">Dispatch date</p>
            </div>
            <div className="col-start-9 col-span-1 text-center">
              <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">Quantity</p>
            </div>
            <div className="col-start-10 col-span-1 text-center">
              <p className="font-bold text-[10px] text-[#939599] uppercase leading-4">Price / kg</p>
            </div>
          </div>

          <div className="grid grid-cols-subgrid col-span-12 bg-[#FFFFFF] p-3 justify-items-center">
            <div className="col-span-6 justify-self-start">
              <div className="flex items-center">
                <span className="text-xs text-[#3E896C] bg-[#EFFAF3] h-[16px] px-1 rounded mr-3">Accepted</span>
                <p className="text-base text-[#2D2D2E] mr-3">Salmon machine cut filet</p>
                <span className="text-xs text-[#808080]">just now</span>
              </div>

              <div>
                <span className="text-sm text-[#2D2D2E] mr-2">100+g</span>
                <span className="text-sm text-[#2D2D2E] mr-2">•</span>
                <span className="text-sm text-[#2D2D2E] mr-2">whole</span>
                <span className="text-sm text-[#2D2D2E] mr-2">•</span>
                <span className="text-sm text-[#2D2D2E] mr-2">Trawls</span>
                <span className="text-sm text-[#2D2D2E] mr-2">•</span>
                <span className="text-sm text-[#2D2D2E] mr-2">FRA</span>
              </div>
            </div>

            <div className="self-center">
              <span className="text-sm text-white bg-[#939599] rounded-full w-6 h-6 text-center block">
                <span className="leading-none align-middle">A-</span>
              </span>
            </div>

            <div className="self-center">
              <span className="text-[#2D2D2E] text-base">Today</span>
            </div>

            <div className="self-center">
              <span className="text-[#2D2D2E] text-base">&lt;100 boxes</span>
            </div>

            <div className="self-center">
              <span className="text-[#2D2D2E] text-base">€7.00</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
