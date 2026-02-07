import "./globals.scss";
import type React from "react";
import AuthProvider from "auth/AuthProvider";
import LoadingScreen from "./LoadingScreen";
import SignInScreen from "./SignInScreen";
import OnlyLogged from "@/components/OnlyLogged";
import PWAController from "@/components/PWAController";
import { ModalProvider } from "@/plugins/modal-provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    <AuthProvider>
      <ModalProvider>
        <OnlyLogged loading={<LoadingScreen />} fallback={<SignInScreen />}>
          {children}
        </OnlyLogged>
      </ModalProvider>
    </AuthProvider>
    <PWAController />
  </main>
);
export default RootLayout;
