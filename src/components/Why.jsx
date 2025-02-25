import Card from "./Card";

export default function Why() {
  return (
    <section className="mt-8 text-white border text-center py-10 px-10 md:px-24 lg:px-36 relative z-10">
      <div className="absolute -z-10 bottom-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e3933] w-screen h-full"></div>
      <h2 className="mb-4 max-sm:text-2xl md:text-4xl lg:text-8xl font-bold -tracking-widest">
        Pourquoi nous choisir ?
      </h2>
      <p className="mb-10 text-2xl mt-6">
        Les pommades pour cheveux delia shine sont fabriqué de façon naturelle
        sans intervention de produit chimique
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
        {/* <div className="flex flex-col gap-y-2 justify-between items-center md:col-span-1 md:row-span-1"> */}
        <div className="">
          <Card
            titre="Naturel"
            text="Fabriqué de façon naturelle avec les produits locaux qui favorisent la pousse des cheveux et la santé du cur cheveulu."
            number="01"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
            >
              <path
                fill="#1e3933"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
              />
            </svg>
          </Card>
        </div>
        <div className="">
          <Card titre="Universel" text="Sans danger pour vos cheveux." number="02">
            <svg
              fill="#1e3933"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Air_quality_control">
                <path d="M219.1,91.73A8.27,8.27,0,0,0,234,95.34l17.37-23.8A8.27,8.27,0,0,0,249.53,60L225.77,42.57a8.27,8.27,0,0,0-13.06,7.94l2,12.79A201.72,201.72,0,0,0,68.16,334.66l10,22.84H97.86l-13-29.61A183.65,183.65,0,0,1,217.46,81.12Z" />

                <path d="M454.27,335.67,442.85,331a200.78,200.78,0,0,0,13.37-72.31c0-96.13-68.37-179.31-162.57-197.79l-3.46,17.67c85.77,16.82,148,92.57,148,180.12a182.84,182.84,0,0,1-12,65.47l-10.51-4.31a8.26,8.26,0,0,0-10.76,10.84l11.39,27.18a8.27,8.27,0,0,0,10.81,4.43L454.31,351A8.27,8.27,0,0,0,454.27,335.67Z" />

                <path d="M341.78,183.14c-18.91-.91-54.39,1.23-79.66,25.6a80.14,80.14,0,0,0-7.46,8.27,80,80,0,0,0-7.45-8.27c-25.28-24.37-60.76-26.51-79.67-25.6a24.13,24.13,0,0,0-23.06,23.07c-.9,18.9,1.23,54.38,25.6,79.66,17.44,18.09,42.87,27.54,75.6,28.18v80.4H174.35v18H334.42v-18H263.68v-80.4c32.71-.65,58.13-10.1,75.57-28.18,24.37-25.28,26.5-60.76,25.6-79.66A24.15,24.15,0,0,0,341.78,183.14ZM162.46,207.06a6.22,6.22,0,0,1,5.94-5.94c16-.77,45.9.9,66.31,20.58,14.19,13.67,21.77,34.17,22.64,61-13.91-29-41.94-38.26-43.37-38.71l-5.15,16.2c.29.09,26,8.61,35.62,35.87-27-.79-47.67-8.4-61.41-22.65C163.36,253,161.7,223.06,162.46,207.06Z" />
              </g>
            </svg>
          </Card>
          {/* <div>
            <img
              src="./imgs/test.jpg"
              className="w-20 h-20 rounded-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xl mt-2"></p> */}
        </div>
        <div className="">
          <Card
            titre="Abordable"
            text="Est à un prix abordable pour tout le monde."
            number="03"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V18"
                stroke="#1e3933"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                stroke="#1e3933"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Card>
        </div>
      </div>
    </section>
  );
}
