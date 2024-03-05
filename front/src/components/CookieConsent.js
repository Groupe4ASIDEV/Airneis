import React, { useEffect } from 'react';

function CookieConsent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js';
        script.charset = 'UTF-8';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.cookieconsent.initialise({
                "notice_banner_type": "simple",
                "consent_type": "express",
                "palette": "light",
                "language": "fr",
                "page_load_consent_levels": ["strictly-necessary"],
                "notice_banner_reject_button_hide": false,
                "preferences_center_close_button_hide": false,
                "page_refresh_confirmation_buttons": false,
                "website_name": "www.airneis.com",
                "website_privacy_policy_url": "www.airneis.com/confidentialite"
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a href="#" id="open_preferences_center">Update cookies preferences</a>
    );
}

export default CookieConsent;