const SectionHeader = ({
  position,
  children,
  ...props
}: {
  position: string;
  className?: string;
  children?: any;
}) => {
  return (
    <div>
      <h2
        className="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600"
        {...props}
      >
        <span className="font-mono text-sm" aria-hidden="true">
          {position.padStart(2, "0")}
        </span>
        <span className="ml-3 h-5 w-px bg-blue-600/20" />
        <span className="ml-3 text-base font-medium tracking-tight">
          {children}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeader;
