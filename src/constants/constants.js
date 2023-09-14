export const print = (text) => {
    if (devMode && process.env.NODE_ENV != 'production') {
        console.log(text);
    };
};

export const error = (text) => {
    if (devMode && process.env.NODE_ENV != 'production') {
        console.error(text);
    };
};