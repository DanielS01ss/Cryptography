import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Main.css";
import crypto from "../Images/cryptography.jpg"


class Main extends React.Component{

  constructor(){
    super();
    this.state = {
    is_visible: false
  };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0
    });
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render(){
      const { is_visible } = this.state;
    return (
      <div className="home-main">
        <section>
          <img src={crypto} alt="cryptography-img" className="crypto-img"/>
          <p className="article-title">1.1 Ce este criptografia??</p>
          <p className="content"><b>Criptografia</b> este o ramură a matematicii aplicate care este utilizată pentru securizarea şi menţinerea caracterului privat al informaţiilor. În termeni practici, acest lucru implică conversia unui text (fişier, şir de caractere/biţi) în clar (plain text) într-unul criptic (numit text cifrat). </p>
          <p className="content">Acest proces de conversie sau de codificare a textului clar se numeşte criptare. Procesul invers, de conversie a textului cifrat în text (în) clar se numeşte decriptare.</p>
          <p className="content">Ambele procese utilizează (sub o formă sau alta) o procedură de criptare, numită algoritm de criptare.</p>
          <p className="content">Majoritatea acestor algoritmi sunt de domeniul public, adică sunt cunoscuţi, caracterul secret (privat) al comunicării fiind asigurat de utilizarea unei chei de criptare/decriptare, cheie cunoscută (în cazul ideal) doar de către entităţile care sunt îndreptăţite să le cunoască, la ambele capete ale canalului de comunicare.</p>
          <p className="content">Criptologia este o ramură a matematicii care descrie fundamentele matematice ale metodelor criptografice precum și ale principiilor de autentificare şi restricţionare a accesului la informaţii</p>
          <p className="content">Termenul de criptologie cuprinde atât criptografia (criptarea informaţiior) cât şi criptanaliza (analiza criptografică), adică arta de a sparge sistemele de criptar</p>
        </section>
        <div className="scroll-to-top">
      {is_visible && (
        <div className="up-btn" onClick={() => this.scrollToTop()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="38.735"
            width="33.749"
          >
            <g transform="translate(-18.121 -3.364)">
              <rect
                ry="4.928"
                y="3.364"
                x="18.121"
                height="38.735"
                width="33.749"
                fill="#00f"
              />
              <g transform="translate(-.48 2.134)">
                <rect
                  ry="4.928"
                  y="1.229"
                  x="18.601"
                  height="38.735"
                  width="33.749"
                  fill="url(#b)"
                />
                <g fill="#ececec">
                  <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                  <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
    <section>
    <p className="article-title">1.2 Servicii criptografice</p>
    <p className="content">Criptografia oferă următoarele servicii:</p>
    <ul>
      <li className="list-item">autentificare</li>
      <li className="list-item">integritatea datelor</li>
      <li className="list-item">non-repudiere</li>
      <li className="list-item">confidenţialitate</li>
    </ul>
      <p className="content">♦Autentificarea permite destinatarului mesajului să valideze identitatea expeditorului. Previne insinuarea unei entităţi neautorizate ca fiind expeditorul legitim al mesajului.</p>
      <p className="content">♦Integritatea datelor garantează că mesajul trimis nu a fost modificat sau alterat pe parcursul comunicării. Acest lucru este realizat, de obicei, prin atașarea la mesaj a unui șir de control (digest, hash) de lungime fixă. Acest șir de control poate fi recreat de către destinatar și permite identificarea unei modificări intenționate sau nu a conținutului mesajului trimis.</p>
      <p className="content">♦Non-repudierea, înseamnă, în securitatea digitală, două lucruri:</p>
      <ul>
        <li className="list-item">un serviciu care oferă dovada integrității și (mai ales) a originii datelor</li>
        <li className="list-item">o modalitate de autentificare cu un nivel înalt de încredere</li>
      </ul>
      <p className="content">Confidențialitatea, ca serviciu, previne accesul la conținutul real al mesajului din partea entităților neautorizate.</p>
    </section>
    <section>
    <p className="article-title">1.3 Clasificarea algoritmilor criptografici</p>
    <p className="content">Există două tipuri principale de algoritmi de criptare cu cheie</p>
    <ul>
      <li className="list-item">cheie secretă – algoritmi cu cheie simetrică</li>
      <li className="list-item">cheie publică – algoritmi cu cheie asimetrică</li>
    </ul>
    <p className="content">Algoritmii cu cheie simetrică se bazează pe caracterul privat (secret) al cheii de criptare/decriptare. Cheie este cunoscută de către de către expeditor și de către destinatar</p>
    <p className="content">Acești algoritmi pot fi clasificați în continuare în algorimi de tip șir (stream) și în algoritmi de tip bloc(block). Cei dintâi au ca unitate de codificare un caracter în timp ce ceilălat  tip acționează asupra unui bloc de caractere, care este considerat drept unitate de codificare</p>
    <p className="content">Viteza de execuție a algoritmilor simetrici este mult mai mare ca cea a celor asimetrici. Pe de altă parte, schimbul de chei dintre expeditor și destinatar implicat de utilizarea algoritmilor simetrici ridică noi probleme de securitate. În practică, se obișnuiește utilizarea cripătării asimetrice pentru generarea și schimbul de chei ce urmează a fi utilizate pentru criptare propriu-zisă (cea simetrică) a mesajului.</p>
    </section>
    <section>
        <p className="article-title">1.4 Algoritmi de criptare cu cheie simetrică</p>
        <p className="content">Algoritmii de criptare cu cheie simetrică utilizează o singură cheie (secretă) pentru a efectua atât criptarea cât și decriptarea mesajului. Dn acest motiv, păstrarea caracterului secret a cheii comune este crucială pentru păstrarea caracterului secret al comunicării. Algoritmii cei mai utilizați la ora actuală sunt:</p>
        <ul>
          <li className="list-item">DES  – Data Encryption Standard (Standard de criptare a datelor) - a fost dezvoltat la mijlocul anilor 70. Este un standard NIST (US National Institute of Standards and Technology). DES este un algoritm de tip bloc (block) care utilizează blocuri de 64 de biți și o cheie de 56 de biți. Lungimea modestă a cheii îl face vulnerabil la atacuri de forță brută. Specificația inițială a acestui algoritm de criptare este FIPS (Federal Information Processing Standards) 46. Cea mai nouă versiune a DES-ului este Triple-DES (sau 3-DES) și se bazează pe utilizarea de trei ori a DES-ului, cu trei chei diferite, independente. Este, desigur, mai puternic decât DES, dar este și mai lent, dacă îl comparăm cu algoritmii mai noi de criptare. 3-DES este specificat în FIPS 46-3 (Octombrie 1999)</li>
          <li className="list-item">AES - Advanced Encryption Standard (Standard de Criptare Avansată) - obiect al FIPS 197 (noiembrie 2001). AES este un cifru bloc care utilizează blocuri de 128 biți și o cheie de dimensiune 128 biți. Sunt specificate și variante utilizând chei de 192 și 256-biți. Ceea ce este specific pentru acest algoritm este faptul că procesează date la nivel de octet, spre deosebire de procesarea la nivelde biți care a fost folosită anterior. Algoritmul este eficient și considerat sigur.</li>
        </ul>
    </section>
    <section>
     <p className="article-title">1.5 Distribuirea cheilor secrete</p>
      <p className="content">Utilizarea algoritmilor de criptare cu cheie simetrică presupune existența unui sistem robust de distribuțiea cheilor. Desigur că aceste chei, fiind ele însele secrete, trebuie încriptate înainte de a fi trimise în mod electronic sau pot fi distribuite prin alte mijloca (prin curieri, de exemplu) pentru a preveni interceptarea cheilor de către o entitate neautorizată.</p>
      <p className="content">Există două standarde pentru distribuirea automată a cheilor secrete. Primul standard, numit X9.17 este definit de către ANSI (American National Standards Institute) iar cel de-al doilea este protocolul Diffie-Hellman.</p>
    </section>
    <section>
     <p className="article-title">1.6 Algoritmi cu cheie asimetrică </p>
     <p className="content">Algoritmii cu cheie asimetrică se bazează pe două key distincte pentru implementarea celor două faze: criptarea și, rspectiv, decriptarea:</p>
     <ul>
      <li className="list-item">o cheie publică, care poate fi distribuită sau facută publică la cerere</li>
      <li className="list-item">o cheie privată (secretă) care corepunde unei anume chei publice, dar care este cunoscută doar de proprietarul cheii sau de către alte entități autorizate.</li>
     </ul>
    </section>
    <section>
      <p className="article-title"> 1. 7 Funcții hash </p>
      <p className="content">Funcțiile hash au ca intrare un mesaj (fișier, șir) de lungime arbitrară și generează o sumă/șir de control (numit și hash sau digest) de lungime fixă. Lungimea acestui șir de control depinde de funcția utilizată, dar în general este între 128 și 512 biți.</p>
      <p className="content">Fucțiile hash sunt utilizate în special în trei domenii:</p>
      <ul>
      <li className="list-item">Garantarea integrității uni mesaj (sau a unui fișier descărcat) prin atașasrea la mesaj a hash-ului generat. Destinatarul poate recalcula hash-ul mesajului/fișierului primit și acesta poate fi comparat cuhash-ul atașat de către expeditor. Dacă acestea coincid, avem garanția (cu un foarte înalt grad de încredere) că mesajul/fișierul nu a fost alterat.</li>
      <li className="list-item">Sunt parte a procesului de creare a semnăturii digitale</li>
      <li className="list-item">stocarea parolelor – parolele nu sunt aproape niciodată (sau nu ar trebui să fie) stocate în forma lor originală. Ceea ce este stocat, în general, este un hash al parolei. Atunci când un utilizator introduce o parolă, este calculat hash-ul acesteia, care este apoi comparat cu hash-ul stocat. Dacă ele coincid,parola este considerată ca fiind cea corectă.</li>
      </ul>
      <p className="content">Cele mai utilizate funcții hash sunt cele din familia MD și SHA - și anume MD5 și SHA-1, cele mai noi fiind SHA-2 și SHA-3. SHA înseamnă Secure Hash Algoritm. O altă funcție hash de interes este RipeMD -</p>
    </section>
    
      </div>
    )
  }

}

export default Main;
