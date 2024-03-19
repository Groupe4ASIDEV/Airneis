import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { GeneralUseConditions, LegalMentions, PrivacyPolicy } from "../pages/legals/LegalDocuments";

const mentionsLegales = LegalMentions();
const conditionsUtilisation = GeneralUseConditions();
const politiqueConfidentialite = PrivacyPolicy();

function Footer() {
    function afficherMentionsLegales() {
        document.getElementById('contenu').innerHTML = mentionsLegales;
    }

    function afficherConditionsUtilisation() {
        document.getElementById('contenu').innerHTML = conditionsUtilisation;
    }

    function afficherPolitiqueConfidentialite() {
        document.getElementById('contenu').innerHTML = politiqueConfidentialite;
    }

    return (
        <div id='footer'>
            <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
                <Container maxWidth="lg" align="center">
                    {/* Socials and legals */}
                    <Link sx={{ px: 2 }} href="#" onClick={afficherMentionsLegales}>Mentions Légales</Link>
                    <Link sx={{ px: 2 }} href="#" onClick={afficherConditionsUtilisation}>Conditions d'Utilisation</Link>
                    <Link sx={{ px: 2 }} href="#" onClick={afficherPolitiqueConfidentialite}>Politique de Confidentialité</Link>
                    <IconButton href="lien_vers_facebook">
                        <Facebook />
                    </IconButton>
                    <IconButton href="lien_vers_twitter">
                        <Twitter />
                    </IconButton>
                    <IconButton href="lien_vers_instagram">
                        <Instagram />
                    </IconButton>
                    {/* Copyright */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            Àirneis
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}

export default Footer;