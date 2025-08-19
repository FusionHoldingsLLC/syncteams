"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import AuthLayoutContent from "./auth-layout-content";

const AuthLayout = ({ children }: PropsWithChildren) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return <AuthLayoutContent animate={animate}>{children}</AuthLayoutContent>;
};

export default AuthLayout;
