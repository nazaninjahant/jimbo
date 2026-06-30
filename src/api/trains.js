import api from "./axios";

export const searchTrainsApi = (iata) => {
    return api.get("/transport/search", {
        params: {
            iata,
        },
    });
};