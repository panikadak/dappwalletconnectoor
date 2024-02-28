import pkg from "../../package.json";

type AppConstantProps = {
    name: string;
    description: string;
    version: string;
    baseURL: string;
};

const APP_CONSTANTS: AppConstantProps = {
    name: pkg.name, // "dappwalletconnectoor"
    description: pkg.description, 
    version: pkg.version, // "0.7.1"
    baseURL: pkg.repository.url.replace(/^git\+/, '').replace(/\.git$/, ''), // Converts the git URL to a clean HTTPS URL
};

export default APP_CONSTANTS;
