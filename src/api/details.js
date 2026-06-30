import api from "./axios";

export const getDetails = (
    code,
    type
) => {
    return api.get(
        `/transport/${code}/details`, {
        params: {
            type,
        },
    }
    );
};