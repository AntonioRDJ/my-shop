import { PropsWithChildren } from "react";

export default function ShopLayout({ children }: PropsWithChildren) {

  return (
    <section className="flex flex-col h-screen w-full">
      <header className="flex flex-col">
        <div className="flex justify-between py-6 px-12 bg-primary-500">
          <h3 className="text-xl font-semibold">My Shop</h3>
          <div>
            <label>Search</label>
            <input type="text"></input>
          </div>
          <div>
            <p>account</p>
          </div>
          <div>
            <p>cart</p>
          </div>
        </div>
        {/* <div className="flex justify-between py-2 px-12 bg-secondary-300">categories</div> */}
      </header>
      <div className="flex-grow">
        {children}
      </div>
      <footer className="flex justify-around py-6 px-24 bg-primary-400">
        <div>About</div>
        <div>Payment</div>
        <div>Help</div>
      </footer>
    </section>
  );
};