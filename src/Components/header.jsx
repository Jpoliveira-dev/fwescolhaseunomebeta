import logoForwize from "../assets/logoforwize2.svg";
import "./header.css";

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <img
                        className="logo"
                        src={logoForwize}
                        alt="Logo Forwize"
                    />
                    <ul className="login-link">
                        <li>
                            <a href="login">Entrar</a>
                        </li>
                    </ul>
                </div>
            </header>
                <hr />
        </>
    );
}

export default Header;
