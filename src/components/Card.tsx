interface Props {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
  onClick?: () => any;
}

const Card = ({ children, className, hoverable, onClick }: Props) => {
  const hoverStyle = 'cursor-pointer select-none md:hover:bg-slate-200';

  return (
    <div
      className={`w-full rounded-md border border-slate-300 px-4 py-4 bg-slate-100 ${
        hoverable ? hoverStyle : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Card;
