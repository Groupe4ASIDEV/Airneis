import {Container, List, ListItem, ListItemText, Typography} from "@mui/material";

function GeneralUseConditions() {
    return  (
        <Container maxWidth="md" id="generalUseConditions">
            <Typography variant="h4" align="center" gutterBottom>
                CONDITIONS GÉNÉRALES
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Les présentes conditions générales régissent l’utilisation de ce site www.airneis.com. Ce site appartient et est géré par Airneis. En utilisant ce site, vous indiquez que vous avez lu et compris les conditions d’utilisation et que vous acceptez de les respecter en tout temps.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Propriété intellectuelle
            </Typography>
            <Typography variant="body1" paragraph>
                Tout contenu publié et mis à disposition sur ce site est la propriété de Airneis et de ses créateurs. Cela comprend, mais n’est pas limité aux images, textes, logos, documents, fichiers téléchargeables et tout ce qui contribue à la composition de ce site.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Utilisation acceptable
            </Typography>
            <Typography variant="body1" paragraph>
                En tant qu’utilisateur, vous acceptez d’utiliser notre site légalement et de ne pas utiliser ce site pour des fins illicites.
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Violer les droits de propriété intellectuelle des propriétaires du site ou de tout tiers au site" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Pirater le compte d’un autre utilisateur du site" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Agir de toute façon qui pourrait être considérée comme frauduleuse" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Participer à toute activité illégale sur le site" />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Si nous estimons que vous utilisez ce site illégalement ou d’une manière qui viole les conditions d’utilisation acceptable ci-dessus, nous nous réservons le droit de limiter, suspendre ou résilier votre accès à ce site. Nous nous réservons également le droit de prendre toutes les mesures juridiques nécessaires pour vous empêcher d’accéder à notre site.
            </Typography>
            <Typography variant="body2" align="right">
                Date d'entrée en vigueur : le 1 janvier 2024.
            </Typography>
        </Container>
    );
}

export default GeneralUseConditions();