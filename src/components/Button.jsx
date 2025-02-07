

const Button = ({label, iconURL, textColor, backgroundColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-monteserrat text-lg leading-none rounded-full
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :  "bg-[red] text-white border-[red]"} w-full ${fullWidth && 'w-full'}"}`}>
        {label}

       {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button