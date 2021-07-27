import Head from 'next/head'

import A from './A';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"evgenskas, nextjs" + keywords}></meta>
                <title>Main Page</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Home" />
                <A href="/users" text="Users Page" />
            </div>

            <div>{children}</div>
            <style jsx>
                {`
                .navbar {
                    background: lightgray;
                    padding: 15px;
                }
             `}
            </style>
        </>
    );
}

export default MainContainer;