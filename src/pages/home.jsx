export function Home() {
 
    return (
      <div>
        <nav className="fixed w-full bg-white/70">
            <div className="flex justify-start w-full md:pl-20">
                <div className="hover:bg-zinc-400/50 ">
                    <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems w-32">HOME</a>
                </div>
                <div className="hover:bg-zinc-400/50 ">
                    <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems w-32">F250</a>
                </div>
                <div className="hover:bg-zinc-400/50 ">
                    <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems w-32">B4000</a>
                </div>
                <div className="hover:bg-zinc-400/50 ">
                    <a href="" className=" text-xl font-extrabold p-4  justify-center flex navItems w-32">B700</a>
                </div>
            </div>
        </nav>
        <main >
            <section className="px-6 bgHome w-full h-[90vh] flex flex-col justify-center pb-16">
                <article className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h1>LET'S RIDE</h1>
                        <p className="max-w-[45rem]">Urban electric bikes to beat city traffic, with a smile on your face. Hand-built in the Netherlands and customizable to your style.</p>
                    </div>
                    <div className="flex justify-around gap-6 max-w-[27rem]" >
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
                    <div className="flex flex-col justify-center items-center sellerDesc gap-6">
                        <h1 className="text-zinc-800/95">B7000 AND F250</h1>
                        <p className="text-zinc-800/95 max-w-[30rem]">
                             Light electric motorcycle with more power and higher top speed. Expected to be available in Q2 2024, stgarting at €7,799.
                        </p>
                        <div>
                            <button className="text-zinc-800 font-extrabold text-lg bg-yellow-500 p-2">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer className="flex w-full justify-start px-6 py-8  mt-24 bg-zinc-400/20">
            <div className="flex flex-wrap-reverse  justify-start gap-6">
                <div className="footerText">
                    <p className="text-zinc-700 text-sm font-bold " >
                    THIS WEBSITE IS A CURATED COLLETION OF TYPEFACES THAT ARE AVAILABLE UNDER A VARIETY OF FREE LINCES SOMEWHERE ON THE INTERWEBS
                    </p>
                </div>
                <div className="flex gap-6 footerItens">
                    <p className="text-zinc-700 text-sm font-bold hover:underline hover:cursor-pointer">ABOUT</p>
                    <p className="text-zinc-700 text-sm font-bold hover:underline hover:cursor-pointer">TERMS & CONDITIONS</p>
                    <p className="text-zinc-700 text-sm font-bold hover:underline hover:cursor-pointer"> PRIVACY POLICY</p>
                    <p className="text-zinc-700 text-sm font-bold hover:underline hover:cursor-pointer">F.A.Q</p>
                    <p className="text-zinc-700 text-sm font-bold hover:underline hover:cursor-pointer">CONTACT</p>
                </div>
            </div>
        </footer>
      </div>
    )
  }
  

  