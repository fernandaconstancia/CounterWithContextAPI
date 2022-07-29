import { CounterProvider } from "./counter";

export const Providers = ({ children }) => {
  return <CounterProvider>{children}</CounterProvider>;
};
