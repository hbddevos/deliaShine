/* eslint-disable react/prop-types */

const Card = ({titre, text, children, number}) => {
    return (
        <div className="w-64 h-full bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-xl">
            <div className="w-24 h-24 bg-green-500 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
            </div>
            <div className="fill-green-500 w-12">
                {children}
            </div>
            <h1 className="font-bold text-xl">{titre}</h1>
            <p className="text-sm text-zinc-900 leading-6">
                {text}
            </p>
        </div>
    );
}

export default Card;
