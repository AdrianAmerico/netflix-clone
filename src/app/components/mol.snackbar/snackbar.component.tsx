/* eslint-disable react/display-name */
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Snack } from "./snackbar.component.style";
interface Props {
    ref: React.MutableRefObject<any>;
    message: string
    type: "success" | "fail"
}
export const SnackBar = forwardRef((props: Props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false);
            }, 1500);
        },
    }));

    return (
        <Snack showSnack={showSnackbar} type={props.type}>
            {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
            <div>{props.message}</div>
        </Snack>
    );
});
