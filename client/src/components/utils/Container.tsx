import clsx from "clsx";

type Styles = { xs: string; sm: string; md: string; lg: string };

const styles = {
  xs: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2",
  sm: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12",
  md: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8",
  lg: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8",
};

type sizeType = "xs" | "sm" | "md" | "lg";

const Container = ({
  size = "sm",
  className,
  ...props
}: {
  size?: sizeType;
  className: string;
  props: unknown;
}) => {
  return <div className={clsx(styles[size], className)} {...props} />;
};

export default Container;
