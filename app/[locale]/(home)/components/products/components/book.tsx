import { Modal, ModalOptions } from "flowbite";
import ModelLayout from "../../../../../../components/Layouts/ModelLayout";
import { useEffect, useMemo, useRef } from "react";
import { useScopedI18n } from "../../../../../../locales/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { createBooking } from "./book.services";

interface IProp {
    openModal: boolean;
    onClose: () => void;
}

export type TBooking = {
    email: string
    phone: string
    description: string
}


const BookNow = ({ openModal, onClose }: IProp) => {

    const t = useScopedI18n('products.booking');

    const closeHandler = () => {
        (modal as Modal).hide();
        onClose();
    };

    const modalOptions: ModalOptions = useMemo(() => {
        return {
            placement: "bottom-right",
            backdrop: "dynamic",
            backdropClasses: "bg-quinary fixed inset-0 z-40",
        };
    }, []);

    const modalRef = useRef(null);
    const modal = useMemo<Modal | null>(() => {
        return openModal ? new Modal(modalRef.current, modalOptions) : null;
    }, [modalOptions, openModal]);


    useEffect(() => {
        if (openModal === true) (modal as Modal).show();
    }, [openModal, modal]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TBooking>();

    const onSubmit: SubmitHandler<TBooking> = (data) => createBooking(data).then((res) => {
        console.log(res);
        closeHandler();
    });

    return (
        <ModelLayout reff={modalRef} onClose={() => closeHandler()} title={t('title')}>
            <div className="flex flex-col justify-between min-h-[82dvh] md:min-h-fit md:h-fit md:w-[40rem]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-start gap-6 h-fit">
                        <input type="text" {...register("email")} className="w-full border border-primary rounded-[4px] text-deactivate text-base font-normal p-4" placeholder={`${t('email')} *`} />
                        <input type="text" {...register("phone", { required: true })} className="w-full border border-primary rounded-[4px] text-deactivate text-base font-normal p-4" placeholder={`${t('phone')} *`} />
                        {errors.phone && <span>This field is required</span>}
                        <textarea {...register("description")} className="w-full border border-primary rounded-[4px] text-deactivate text-base font-normal p-4" rows={6} placeholder={`${t('description')} *`} />
                    </div>
                    <button type="submit" className="text-white w-full bg-tertiary text-sm font-normal py-3 px-14 justify-self-end mt-8 mb-4">{t('submit')}</button>
                </form>
                {/* <div className="flex flex-col justify-end w-full">
                        
                    </div> */}
            </div>
        </ModelLayout >
    );
}

export default BookNow;