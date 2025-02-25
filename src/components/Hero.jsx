
// import Button from "../section/Button.jsx";

export default function Hero() {
  return (
    <header className='h-[calc(100vh-7rem)] text-start max-sm:text-white flex flex-col justify-center items-start space-y-5 bg-no-repeat bg-right relative max-sm:px-4 mb-24 max-sm:bg-black/70 max-sm:bg-blend-overlay' style={{ backgroundImage: "url('/imgs/beauty.png')" }}>
        {/* <div className='absolute -top-8 left-0 -z-10 backdrop-blur-lg'>
          <img src="./images/hero1.png" className='object-left -rotate-45' alt="" />
        </div> */}
        <h3 className='text-xl font-extrabold tracking-widest'>Bienvenue a deliaShine</h3>
        <h1 className='text-7xl font-bold'>Le remède a vos <br className='max-sm:hidden' /> beaux cheveux <br /> crépus</h1>
        <p className='text-2xl text-left'>
            Notre création est ce qu&apos;il vous faut pour prendre <br className="max-sm:hidden" /> soins de votre cure chevelu et le rendre soyeux
        </p>
        <a href="" className='px-3 py-4 rounded-lg bg-[#22c55e] text-white font-bold w-40 text-center md:inline-flex max-sm:flex justify-center items-center'>WhatsApp</a>
        {/*<Button />*/}
    </header>
  )
}
