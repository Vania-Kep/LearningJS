const main = () => {
    console.log("Hello, TypeScript!");
};

main();


const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
    console.log('Done!');
};

mainAsync();