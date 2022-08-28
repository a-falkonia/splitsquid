interface Props {
  children: string;
  className?: string;
}

const LightText = ({ children, className }: Props) => {
  return (
    <span className={`text-md font-light text-slate-500 ${className}`}>
      {children}
    </span>
  );
};

export default LightText
