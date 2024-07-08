import { useEffect, useRef } from "react";


export default function Dialogue() {
    const dialogueRef = useRef(null);

    useEffect(() => {
        console.log("✅ Connecting...")
        const dialog = dialogueRef.current;
        dialog.showModal();

        // Clean up the dialog
        return () => {
            dialog.close();
        };
    }, []);
  return <dialog ref={dialogueRef}>This is an open dialog window</dialog>;
}
