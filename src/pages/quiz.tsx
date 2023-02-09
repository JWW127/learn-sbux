import Head from "next/head";

//Todo: Add questions to database
//Todo: Logic for generating test
//Todo: Logic for grading and storing test

const Quiz = () => {
    return (
        <div>
            <Head>
                <title>SBUX Quiz</title>
                <meta name="learn sbux workflow" content="sbux training app" />
            </Head>

            <main className="bg-gradient-to-bl from-black via-gray-900 to-green-900">
                <div className="h-[100vh] bg-gradient-to-tr from-black"><h1 className="text-white">Quiz</h1></div>
            </main>
        </div>
    );
};

export default Quiz;
