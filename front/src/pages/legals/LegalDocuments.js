import {Typography, Container, ListItem, List, ListItemText} from '@mui/material';

function PrivacyPolicy() {
    return (
        <Container maxWidth="md" id="privacyPolicy">
            <Typography variant="h4" align="center" gutterBottom>
                POLITIQUE DE CONFIDENTIALITÉ
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                www.airneis.com
                <br />
                Airneis SAS
                <br />
                Type de site : e-commerce
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Le but de cette politique de confidentialité</strong>
                <br />
                Le but de cette politique de confidentialité est d'informer les utilisateurs de notre site des données personnelles que nous recueillerons ainsi que les informations suivantes, le cas échéant :
            </Typography>
            <List style={{ listStyleType: 'lower-alpha' }}>
                <ListItem>
                    <ListItemText primary="Les données personnelles que nous recueillerons" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="L’utilisation des données recueillies" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Qui a accès aux données recueillies" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Les droits des utilisateurs du site" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="La politique de cookies du site" />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Cette politique de confidentialité fonctionne parallèlement aux conditions générales d’utilisation de notre site.
            </Typography>

            <Typography variant="body1">
                <strong>Lois applicables</strong>
                <br />
                Conformément au Règlement général sur la protection des données (RGPD), cette politique de confidentialité est conforme aux règlements suivants.
            </Typography>
            <List style={{ listStyleType: 'lower-alpha' }}>
                <ListItem>
                    <ListItemText primary="Traitement licite, loyal et transparent des données personnelles." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Collecte des données pour des finalités déterminées, explicites et légitimes." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Adéquation, pertinence et limitation des données collectées." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Exactitude et mise à jour des données personnelles." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Limitation de la conservation des données." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Sécurité appropriée des données personnelles." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :
            </Typography>
            <List style={{ listStyleType: 'lower-alpha' }}>
                <ListItem>
                    <ListItemText primary="La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à sa demande." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Pour les résidents de l’État de Californie, cette politique de confidentialité vise à se conformer à la California Consumer Privacy Act (CCPA). S’il y a des incohérences entre ce document et la CCPA, la législation de l’État s’appliquera. Si nous constatons des incohérences, nous modifierons notre politique pour nous conformer à la loi pertinente.
            </Typography>

            <Typography variant="body1">
                <strong>Consentement</strong>
                <br />
                Les utilisateurs conviennent qu’en utilisant notre site, ils consentent à :
            </Typography>
            <List style={{ listStyleType: 'lower-alpha' }}>
                <ListItem>
                    <ListItemText primary="Les conditions énoncées dans la présente politique de confidentialité et" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="la collecte, l’utilisation et la conservation des données énumérées dans la présente politique." />
                </ListItem>
            </List>

            <Typography variant="body1" paragraph>
                <strong>Données personnelles que nous collectons</strong>
            </Typography>
            <div>
                <Typography variant="body1">
                    <strong>Données collectées automatiquement</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorsque vous visitez et utilisez notre site, nous pouvons automatiquement recueillir et conserver les renseignements suivants :
                </Typography>
                <List style={{ listStyleType: 'lower-alpha' }}>
                    <ListItem>
                        <ListItemText primary="Lieu" />
                    </ListItem>
                </List>
            </div>
            <div>
                <Typography variant="body1">
                    <strong>Données recueillies de façon non automatique</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                    Nous ne collectons pas de données supplémentaires lorsque l’utilisateur remplit certaines fonctions sur notre site.
                </Typography>
                <Typography variant="body1">
                    Veuillez noter que nous ne collectons que les données qui nous aident à atteindre l’objectif énoncé dans cette politique de confidentialité. Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable.
                </Typography>
            </div>

            <Typography variant="body1" paragraph>
                <strong>Comment nous utilisons les données personnelles</strong>
                <br />
                Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site. Nous n’utiliserons pas vos données au-delà de ce que nous divulguerons.
            </Typography>
            <div>
                <Typography variant="body1">
                    Les données que nous recueillons automatiquement sont utilisées aux fins suivantes :
                </Typography>
                <List style={{ listStyleType: 'lower-alpha' }}>
                    <ListItem>
                        <ListItemText primary="Adresse de facturation et de livraison" />
                    </ListItem>
                </List>
            </div>

            <Typography variant="body1" paragraph>
                <strong>Avec qui nous partageons les données personnelles</strong>
            </Typography>
            <div>
                <Typography variant="body1">
                    <strong>Employés</strong>
                    <br />
                    Nous pouvons divulguer à tout membre de notre organisation les données utilisateur dont il a raisonnablement besoin pour réaliser les objectifs énoncés dans la présente politique.
                </Typography>
            </div>
            <div>
                <Typography variant="body1">
                    <strong>Tierces parties</strong>
                    <br />
                    Nous pouvons partager les données utilisateur avec les tiers suivants :
                </Typography>
                <Typography variant="body1">
                    Nous pouvons partager les données utilisateur avec des tiers aux fins suivantes :
                </Typography>
                <Typography variant="body1">
                    Les tiers ne seront pas en mesure d’accéder aux données des utilisateurs au-delà de ce qui est raisonnablement nécessaire pour atteindre l’objectif donné.
                </Typography>
            </div>
            <div>
                <Typography variant="body1">
                    <strong>Autres divulgations</strong>
                    <br />
                    Nous nous engageons à ne pas vendre ou partager vos données avec des tiers, sauf dans les cas suivants :
                </Typography>
                <List style={{ listStyleType: 'lower-alpha' }}>
                    <ListItem>
                        <ListItemText primary="Si la loi l'exige" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Si elle est requise pour toute procédure judiciaire" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Pour prouver ou protéger nos droits légaux" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="À des acheteurs ou des acheteurs potentiels de cette société dans le cas où nous cherchons à la vendre la société" />
                    </ListItem>
                </List>
                <Typography variant="body1">
                    Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter que nous ne sommes pas responsables et n’avons pas de contrôle sur leurs politiques et pratiques de confidentialité.
                </Typography>
            </div>
        </Container>
    );
}

export default PrivacyPolicy();