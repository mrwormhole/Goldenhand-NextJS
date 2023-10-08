export default function Footer() {
    const currentYear: number = new Date().getFullYear()
    return (
        <footer className="footer">
                <p>
                    Copyright © {currentYear} <strong>Goldenhand Software Limited Company</strong>. The source code is licensed. All rights are reserved.
                </p>
        </footer>
    );
}