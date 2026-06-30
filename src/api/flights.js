import api from "./axios";

export const searchFlights = (
    origin,
    destination,
    date
) => {
    return api.get("/flights/search", {
        params: {
            origin,
            destination,
            date,
        },
    });
};