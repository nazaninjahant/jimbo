// import { ref } from "vue";

// export function useApi() {
//     const loading = ref(false);
//     const error = ref(null);

//     const execute = async(callback) => {
//         try {
//             loading.value = true;
//             error.value = null;

//             return await callback();
//         } catch (err) {
//             error.value =
//                 err.response ? .data ? .message ||
//                 err.message;

//             throw err;
//         } finally {
//             loading.value = false;
//         }
//     };

//     return {
//         loading,
//         error,
//         execute,
//     };
// }