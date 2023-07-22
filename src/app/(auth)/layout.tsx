import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {

  return (
    <>
      <span>layout do meu auth layout</span>
      {children}
    </>
  );
};