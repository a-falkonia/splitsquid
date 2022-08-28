interface Props {
  children: string;
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export default Title