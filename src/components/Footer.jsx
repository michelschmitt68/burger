import "../css/Footer.css";

export default function Footer() {
    return(
        <>
            <div class="footer">
                <div class="footer-container">
                    <div class="footer-about">
                        <h3>À propos</h3>
                        <p>
                            Notre entreprise se consacre à offrir les meilleurs services pour nos clients avec une approche innovante et durable.
                        </p>
                    </div>
                    <div class="footer-links">
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">À propos</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-contact">
                        <h3>Contact</h3>
                        <p>Email: info@example.com</p>
                        <p>Téléphone: +33 1 23 45 67 89</p>
                        <div class="footer-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 VotreEntreprise. Tous droits réservés.</p>
                </div>
            </div>
        </>
    );
}