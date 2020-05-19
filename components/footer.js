export default function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Built</strong> by <a href="https://jgthms.com">Goldenhand Software</a>. The source code is licensed
                </p>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by &nbsp;
                    <img src="/vercel.svg" width="128" height="128" alt="Vercel Logo" className="logo" />
                </a>
            </div>
        </footer>
    );
}