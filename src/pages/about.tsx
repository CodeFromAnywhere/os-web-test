import { Inter } from 'next/font/google'
import { ServerSideProps } from '@/components/getHostServerSideProps'
import { getHostServerSideProps } from "@/components/getHostServerSideProps";

export const getServerSideProps = getHostServerSideProps

const inter = Inter({ subsets: ['latin'] })

export default function Home(props:ServerSideProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>About page. Domain: {props.host}</p>

    </main>
  )
}
