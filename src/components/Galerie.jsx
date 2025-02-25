

export default function Galerie() {
  return (
    <>
    <h3 className="mt-20 mb-10 max-md:text-5xl max-md:-tracking-widest max-md:px-4 lg:text-8xl font-bold">Gallerie</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <img src="./images/afro1.jpg" className="max-sm:w-full w-96 h-full object-cover" alt="" />
        <img src="./images/afro5.jpg" className="max-sm:w-full w-96 h-full object-cover" alt="" />
        <img src="./images/afro6.jpg" className="max-sm:w-full w-96 h-full object-cover" alt="" />
        <img src="./images/afro2.jpg" className="max-sm:w-full w-96 h-full object-cover" alt="" />
      </div>
    </>
  );
}
