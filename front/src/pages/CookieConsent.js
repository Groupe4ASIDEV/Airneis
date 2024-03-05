import { Typography, Box } from '@mui/material';
import CarouselBuilder from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import CategoryList from "../components/CategoryList";
import HighlightedCategories from '../components/HighlightedCategories';
import Carousel from "../components/Carousel";


function CookieConsent() {
    return (
        <script type="text/javascript" src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"
                charSet="UTF-8"></script>
        <script type="text/javascript" charset="UTF-8">
            document.addEventListener('DOMContentLoaded', function () {
            cookieconsent.run({
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
        });
    </script>
    <a href="#" id="open_preferences_center">Update cookies preferences</a>
    );
}

export default CookieConsent;
