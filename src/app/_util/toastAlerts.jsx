import { Toast } from "primereact/toast";
import React, { useRef } from "react";

export default function ToastAlert(type, title, detail, ref) {
    const toast = useRef(null);

    toast.current.show({
        severity: `${type}`,
        title: `${title}`,
        detail: `${detail}`,
        life: 3000
    });

    return(
        <Toast ref={toast} position="bottom-center" />
    );
}
