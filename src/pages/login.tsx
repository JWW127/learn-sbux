import Head from "next/head";

//Todo: standard simple login page that links to User Dashboard and gives accesses to tools

const Login = () => {
    return (
        <div>
            <Head>
                <title>Hello Username</title>
                <meta name="learn sbux workflow" content="sbux training app" />
            </Head>
            <main className="bg-gradient-to-bl from-black via-gray-900 to-green-900">
                <div className="h-[100vh] bg-gradient-to-tr from-black"><h1 className="text-white">LOGIN</h1></div>
            </main>
        </div>
    );
};

export default Login;
