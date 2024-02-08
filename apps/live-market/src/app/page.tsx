export default async function Index() {
  return (
    <main>
      <section>
        <div>
          <h2>Accepted Orders</h2>
          <button>Collapse</button>
        </div>

        <div>
          <div>
            <div>Quality</div>
            <div>Dispatch date</div>
            <div>Quantity</div>
            <div>Price / kg</div>
          </div>

          <div>
            <div>
              <div>
                <span>Accepted</span>
                <p>Salmon machine cut filet</p>
                <span>just now</span>
              </div>

              <div>
                <span>100+g</span>
                <span>•</span>
                <span>whole</span>
                <span>•</span>
                <span>Trawls</span>
                <span>•</span>
                <span>FRA</span>
              </div>
            </div>

            <div>
              <span>A-</span>
            </div>

            <div>
              <span>Today</span>
            </div>

            <div>
              <span>&lt;100 boxes</span>
            </div>

            <div>
              <span>€7.00</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
