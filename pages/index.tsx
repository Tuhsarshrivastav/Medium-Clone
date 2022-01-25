import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="max-v-7xl mx-auto">
      <Head>
        <title>Medium-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* main section start */}
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 p-10 lg:p-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read, and content
          </h1>
          <h2>
            it"s easy and free to post your thinking on any topic and connect
            with millions of readers
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="logo"
        />
      </div>
      {/* main section end */}
    </div>
  )
}
