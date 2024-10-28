import footerLogo from "../../footer-logo.svg"
import FooterWrapper from "./FooterWrapper.styles";

export default function Footer() {
    return (
        <FooterWrapper>
            <div id="footer-content" data-testid="footer-content">
                <div id="left-side">
                    <img id="footer-logo" src={footerLogo} alt="Footer Logo" />
                    <p id="user-greeting">Hi User!</p>
                </div>
                <div id="right-side">
                    <table>
                        <thead>
                            <th>THE BASICS</th>
                            <th>GET INVOLVED</th>
                            <th>COMMUNITY</th>
                            <th>LEGAL</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>About TMDB</td>
                                <td>Contribution Bible</td>
                                <td>Guidelines</td>
                                <td>Terms of Use</td>
                            </tr>
                            <tr>
                                <td>Contact US</td>
                                <td>Add New Movie</td>
                                <td>Discussions</td>
                                <td>API Terms of Use</td>
                            </tr>
                            <tr>
                                <td>Support Forums</td>
                                <td>Add New TV Shows</td>
                                <td>Leaderboard</td>
                                <td>Privacy Policy</td>
                            </tr>
                            <tr>
                                <td>API</td>
                                <td></td>
                                <td></td>
                                <td>DMCA Policy</td>
                            </tr>
                            <tr>
                                <td>System Status</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </FooterWrapper>
    )
}