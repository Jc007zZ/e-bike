export function Home() {
 
    return (
      <div>
        <nav className="flex justify-around w-full">
            <div className="hover:bg-zinc-300/50 flex-1">
                <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems">HOME</a>
            </div>
            <div className="hover:bg-zinc-300/50 flex-1">
                <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems">F250</a>
            </div>
            <div className="hover:bg-zinc-300/50 flex-1">
                <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems">B4000</a>
            </div>
            <div className="hover:bg-zinc-300/50 flex-1">
                <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems">B700</a>
            </div>
        </nav>
        <main >
            <section className="px-8 bgHome w-full h-[90vh] flex flex-col justify-center pb-16">
                <article className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h1>LET'S RIDE</h1>
                        <p className="max-w-[45rem]">Urban electric bikes to beat city traffic, with a smile on your face. Hand-built in the Netherlands and customizable to your style.</p>
                    </div>
                    <div className="flex gap-6" >
                        <button className=" text-zinc-800 font-extrabold text-lg bg-yellow-500 p-2">CONFIGURE YOUR E-BIKE</button>
                        <button className="text-white border-2 font-extrabold text-lg p-2">BOOK A TEST RIDE</button>
                    </div>
                </article>
            </section>
            <section className="flex flex-col items-center pt-16 px-8  ">
                <h1 className="text-black sellerBorder ">Our Bestsellers</h1>
                <div className="flex flex-wrap  w-full itens-between">
                    <div className="flex justify-start sellerImg">
                        <img src="https://www.brekr.com/en/wp-content/uploads/sites/3/2024/03/F250_B4000_awards.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center sellerDesc">
                        <h1 className="text-zinc-800/95">B7000 AND F250</h1>
                    </div>
                </div>
            </section>
        </main>
      </div>
    )
  }
  

  