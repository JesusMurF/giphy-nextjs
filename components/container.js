import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';

function Container({ children }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
          key="font"
        />
      </Head>
      <div className="container mx-auto">
        <nav className="flex my-6">
          <Link href="/">
            <a className="transition duration-500 ease-in-out hover:text-red-500 transform hover:-translate-y-1 hover:scale-120 text-blue-500 text-2xl mr-6 hover:text-blue-600">
              Inicio
            </a>
          </Link>
          <Link href="/about">
            <a className="transition duration-500 ease-in-out hover:text-red-500 transform hover:-translate-y-1 hover:scale-120 text-blue-500 text-2xl mr-6 hover:text-blue-600">
              Sobre mi
            </a>
          </Link>
        </nav>
        <div className="container">{children}</div>
        <style jsx>{`
          a {
            font-family: 'Lobster', Arial, sans-serif;
          }
        `}</style>
      </div>
    </Fragment>
  );
}

export default Container;
