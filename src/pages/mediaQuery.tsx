import { useMediaQuery } from "react-responsive";

export const Desktop = ({children}: {children: JSX.Element}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};