import { Modal, ModalOptions } from "flowbite";
import ModelLayout from "../../../../../components/Layouts/ModelLayout";
import { useEffect, useMemo, useRef } from "react";
import { useScopedI18n } from "../../../../../locales/client";

interface IProp {
    openModal: boolean;
    onClose: () => void;
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

    return (
        <ModelLayout reff={modalRef} onClose={() => closeHandler()} title={t('title')}>
            <div className="flex flex-col">
                <div className="flex flex-col items-start gap-6">
                    <input type="text" className="w-full border border-primary rounded-[4px] text-deactivate text-base font-normal p-4" placeholder={`${t('email')} *`} />
                    <input type="text" className="w-full border border-primary rounded-[4px] text-deactivate text-base font-normal p-4" placeholder={`${t('phone')} *`} />
                    <textarea className="w-full border border-primary rounded-[4px] text-deactivate text-base font-normal p-4" placeholder={`${t('description')} *`} />
                </div>
                <button className="text-white w-full bg-tertiary text-sm font-normal py-3 px-14 mt-28 mb-8" onClick={() => closeHandler()}>{t('submit')}</button>
            </div>
        </ModelLayout >
    );
}

export default BookNow;