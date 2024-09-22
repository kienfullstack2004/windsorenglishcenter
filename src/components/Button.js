function Button({text,stylePrivate,onClick,onKeyDown}) {
    return (<button onClick={onClick} onKeyDown={onKeyDown} className={`px-[6px] w-full py-[12px] ${stylePrivate}`}>
      {text}
    </button>);
}

export default Button;