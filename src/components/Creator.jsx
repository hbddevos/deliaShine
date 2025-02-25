/* eslint-disable react/no-unescaped-entities */

export default function Creator() {
  return (
    <section className="relative flex flex-col md:flex-row 
    {/*bg-[url('./imgs/blob.gif')]*/}
    max-sm:px-4
    bg-top
    bg-no-repeat
    justify-center items-center gap-y-8 flex-wrap md:gap-x-8 gap-x-4 mt-8">
      <div className="absolute inset-0 backdrop-blur-md "></div>
      <div className="md:w-2/4 space-y-8 order-0 flex-grow md:flex-grow-0 relative z-30">
        <h2 className="text-5xl font-bold">DeliaShine</h2>
        <p className="leading-8 text-xl">
          Créer et diriger par Mme ASSIOU Adèle, DeliaShine est une entrepise
          qui se veux protecteur des produits naturels. La vision de DeliaShine
          est de vous offrir un produit 100% bio, sans danger pour votre cure
          chevelu pour les soins de vos cheveux. La vision a long terme sera de
          vous offir des champoings et des gels pour l'entretien quotidien de
          vos cheveux.
        </p>
        <p className='italic font-medium'>Situé non loin de bla bla</p>
      </div>
      <div className="md:w-1/4 relative z-30">
        <div>
          <img
            src="./imgs/beauty.jpg"
            className="h-80 w-80 object-cover"
            alt=""
          />
        </div>
        <p className="text-center mt-1 py-2">
          <span className="text-2xl font-bold">ASSIOU Adèle</span>
          <br />
          <span className="text-xl font-light">Entrepreneuse</span> <br />
          <span className='text-xl font-light'>Marketeuse</span>
        </p>
      </div>
    </section>
  );
}
