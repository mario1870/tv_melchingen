


const Geschaftsbedingungen = () => {
    return(
        <div className="flex flex-col gap-4 w-full px-4 md:px-80 pt-52 pb-20 text-sm">
            <h1 className="text-xl font-semibold font-plusJakaraSans">
                Allgemeine Geschäftsbedingungen (AGB) für das Elfmeterschießen-Turnier des TV Melchingen e.V.
            </h1>

            <article className="flex flex-col">
                <h2 className="font-semibold font-md">1. Allgemeines</h2>
                1.1 Diese allgemeinen Geschäftsbedingungen (AGB) gelten für die Teilnahme am Elfmeterschießen-Turnier, das vom TV Melchingen e.V. (im Folgenden „Veranstalter“) organisiert wird.<br/>
                1.2 Mit der Anmeldung zum Turnier akzeptiert der Teilnehmer diese AGB.
            </article>

            <article>
                <h2 className="font-semibold">2. Anmeldung und Registrierung</h2>
                2.1 Die Anmeldung zum Elfmeterschießen-Turnier erfolgt ausschließlich online über das bereitgestellte Formular auf der Website des Veranstalters.<br/>
                2.2 Bei der Registrierung müssen alle erforderlichen Felder korrekt und vollständig ausgefüllt werden. Der Teilnehmer ist für die Richtigkeit der Angaben verantwortlich.
            </article>

            <article>
                <h2 className="font-semibold">3. Startgebühr und Zahlungsabwicklung</h2>
                3.1 Mit der Anmeldung wird eine Startgebühr fällig, die online per Stripe zu zahlen ist.<br/>
                3.2 Die Höhe der Startgebühr wird auf der Anmeldeseite des Turniers angegeben.<br/>
                3.3 Die Anmeldung ist erst nach erfolgreicher Zahlung der Startgebühr verbindlich.<br/>
                3.4 Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe. Es gelten die Nutzungsbedingungen und Datenschutzbestimmungen von Stripe.
            </article>
            <article>
                <h2 className="font-semibold">4. Rücktritt und Erstattung</h2>
                4.1 Ein Rücktritt von der Teilnahme ist bis zu 14 Tage vor dem Turniertag möglich. In diesem Fall wird die Startgebühr abzüglich einer Bearbeitungsgebühr von 5 € erstattet.<br/>
                4.2 Bei einem Rücktritt weniger als 14 Tage vor dem Turniertag erfolgt keine Erstattung der Startgebühr.
            </article>

            <article>
                <h2 className="font-semibold">5. Durchführung des Turniers</h2>
                5.1 Der Veranstalter behält sich das Recht vor, Änderungen im Ablauf des Turniers vorzunehmen oder das Turnier abzusagen, sofern dies aufgrund unvorhersehbarer Ereignisse erforderlich ist.<br/>
                5.2 Im Falle einer Absage des Turniers durch den Veranstalter wird die Startgebühr vollständig erstattet.
            </article>

            <article>
                <h2 className="font-semibold">6. Haftung</h2>
                6.1 Der Veranstalter haftet nicht für Schäden, die durch die Teilnahme am Turnier entstehen, außer im Falle von grober Fahrlässigkeit oder Vorsatz seitens des Veranstalters.<br/>
                6.2 Die Teilnahme erfolgt auf eigene Gefahr. Der Teilnehmer versichert, dass keine gesundheitlichen Bedenken gegen seine Teilnahme bestehen.
            </article>

            <article>
                <h2 className="font-semibold">7. Datenschutz</h2>
                7.1 Der Veranstalter erhebt und verarbeitet personenbezogene Daten der Teilnehmer zur Durchführung des Turniers und zur Zahlungsabwicklung.<br/>
                7.2 Es gelten die Datenschutzbestimmungen des Veranstalters, die auf der Website des Vereins einsehbar sind.
            </article>

            <article>
                <h2 className="font-semibold">8. Schlussbestimmungen</h2>
                8.1 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.<br/>
                8.2 Es gilt das Recht der Bundesrepublik Deutschland.<br/>
                8.3 Gerichtsstand ist der Sitz des TV Melchingen e.V.
            </article>
        </div>
    )
}

export default Geschaftsbedingungen