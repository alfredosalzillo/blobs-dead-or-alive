import "./globals.scss";
import type { FC } from "react";
import AuthProvider from "auth/AuthProvider";
import OnlyLogged from "@/components/OnlyLogged";
import PWAController from "@/components/PWAController";
import { ModalProvider } from "@/plugins/modal-provider";

const RootLayout: FC<LayoutProps<"/">> = ({
  loading,
  "sign-in": signIn,
  children,
}) => (
  <main>
    <AuthProvider>
      <ModalProvider>
        <OnlyLogged loading={loading} fallback={signIn}>
          {children}
        </OnlyLogged>
      </ModalProvider>
    </AuthProvider>
    <PWAController />
  </main>
);
export default RootLayout;
