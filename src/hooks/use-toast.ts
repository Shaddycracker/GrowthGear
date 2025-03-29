// import { useState } from "react";
//
// type ToastProps = {
//     title?: string;
//     description?: string;
//     variant?: "default" | "destructive";
// };
//
// export function useToast() {
//     const [toasts, setToasts] = useState<ToastProps[]>([]);
//
//     const toast = (props: ToastProps) => {
//         const id = Date.now().toString();
//         const newToast = { ...props, id };
//         setToasts((prevToasts) => [...prevToasts, newToast]);
//
//         // Auto-dismiss after 5 seconds
//         setTimeout(() => {
//             setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
//         }, 5000);
//
//         return id;
//     };
//
//     return { toast, toasts };
// }
