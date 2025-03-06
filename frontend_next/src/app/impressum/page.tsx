

const Impressum = () => {
    return(
        <div className="min-h-screen flex justify-center items-center flex-col">
            <header>
                <h1 className="text-bold text-xl">Impressum</h1>
            </header>

            <section>
                <h2>Angaben gemäß § 5 TMG:</h2>
                <p>TV Melchingen<br/>Weilerwiesen 1<br/>72393 Burladingen</p><br/>

                <h2>Kontakt:</h2>
                <p>Telefon: 015209748732<br/>E-Mail: tv-melchingen@gmx.de</p><br/>

                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <p>Mario Raach</p>
            </section>

            <footer>
                <p>&copy; 2023 TV Melchingen</p>
            </footer>
        </div>
    )
}
export default Impressum