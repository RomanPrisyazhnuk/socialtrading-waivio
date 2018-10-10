/* eslint-disable no-console */
// import { getRegions } from "redux/actions/regionsActions";
// import { dispatchRequest } from "helpers/asyncActions";

export default async (ctx) => {
    try {
        console.log(ctx);
        return true;
    } catch (e) {
        return false;
    }
};
