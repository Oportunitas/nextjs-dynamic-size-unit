import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'

const readex_pro = Readex_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'Web Dynamic Size Unit',
description: 
    '—a custom-made dynamic size unit for the web, ensuring display usability in any screen size,'||
    ' dpi, and aspect ratio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
return (
    <html lang="en">
        <body className={readex_pro.className}>
            {children}
            <script src="dynamic-size-unit.ts"></script>
        </body>
    </html>
)
}
