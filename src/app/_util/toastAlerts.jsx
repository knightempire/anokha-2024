export default function ToastAlert(severity, summary, detail, ref) {

    ref.current.show({
        severity: `${severity}`,
        summary: `${summary}`,
        detail: `${detail}`,
        life: 3000
    });

}
