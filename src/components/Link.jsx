

// eslint-disable-next-line react/prop-types
export default function Link({type, icon}) {
  return (
    <a href='#' className='hover:scale-105 rounded-xl hover:bg-green-700 hover:border-transparent border transition-all p-5 flex flex-col items-center '>
        <div>
            <img className="hover:fill-white" src={icon} alt="" />
        </div>
        <span>
            {type}
        </span>
    </a>
  )
}
