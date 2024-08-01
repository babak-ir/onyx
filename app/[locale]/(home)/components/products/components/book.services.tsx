import http from "@/services/httpService";
import { TBooking } from "./book";
import toast from "react-hot-toast";

export const createBooking = (data: TBooking) => {
    return http.post('/book', { ...data }).then(res => {
        if (res.status == 200) {
            toast.success('Your booking has been sent successfully. We will contact you soon.')
        }
        return res.data;
    });
};