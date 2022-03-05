import { useEffect, useMemo, useRef } from "react";
import paypalLogo from '../../images/logo-Paypal.webp';

const PayPalDonate = () => {
    const buttonRef = useRef(null);
    const buttonId = useMemo(() => 'donate-pls', []);
    useEffect(() => {
        const button = window.PayPal.Donation.Button({
            env: 'production',
            hosted_button_id: 'K39CDMEE2MSTG',
            image: {
                src: paypalLogo,
                alt: 'Dona con PayPal',
                title: 'Apoya a Ilse & Oscar con PayPal!',
            }
        });
        button.render(`#${buttonRef.current.id}`);
    }, []);
    return (<div className="d-flex justify-content-center">
        <div ref={buttonRef} id={buttonId} className="paypal" />
    </div>
    );
};

export default PayPalDonate;
