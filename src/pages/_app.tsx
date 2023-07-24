import "@styles/tailwind.scss"
import "@styles/styles.scss"
import type { AppProps } from "next/app"
import { AuthProvider } from "tucmc-auth"
import { ToastProvider } from "@components/Toast/Context"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider TOKEN="tYjFVdtj_5jlF8GhpZ3QF49moVTNXRM6TzB4axMNADs=">
      <ToastProvider>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  )
}
export default MyApp
