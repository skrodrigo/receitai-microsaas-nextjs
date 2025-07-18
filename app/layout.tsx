import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import BackRedirect from "@/components/BackRedirect";

const _bricolageGrotesque = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${_bricolageGrotesque.variable} antialiased`}>
				<ThemeProvider
					attribute="data-theme"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>

				<Script id="utmify-pixel-config" strategy="afterInteractive">
					{
						`window.pixelId = "6874e2ed1fae0a5a8bf784b9";`
					}
				</Script>
				<Script 
					id="utmify-pixel-script-loader"
					strategy="afterInteractive"
					src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
					async
					defer
				/>

				<Script
					id="utmify-script"
					strategy="afterInteractive"
					src="https://cdn.utmify.com.br/scripts/utms/latest.js"
					data-utmify-prevent-xcod-sck
					data-utmify-prevent-subids
					async
					defer
				/>

				<BackRedirect />
			</body>
		</html>
	);
}
