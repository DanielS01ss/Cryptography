import React from  "react";
import ReactDOM from "react-dom";
import myImg from "../Images/vulnerability.jpg";
import "../Styles/Article-blueprint.css"

class Vulnerabilitatii extends React.Component{

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
    let navbar = document.querySelector("#checkbox");
    navbar.checked = !navbar.checked;
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
    return(
        <div className="home-main">
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
            <img src={myImg} alt="hacker-img" className="article-photo"/>
            <p className="article-title">1.1 Vulnerabilitatea algoritmilor criptografici</p>
            <p className="content"> &nbsp;&nbsp; Sistemele criptografice bune trebuie întotdeauna proiectate astfel încât să fie cât mai greu de spart. Este posibil să se construiască sisteme care nu pot fi sparte în practică (deși acest lucru nu poate fi, de obicei, dovedit). Acest lucru nu crește în mod semnificativ efortul de implementare a sistemului; cu toate acestea, este necesară atenție și expertiză. Nu există nici o scuză pentru un proiectant de sistem să facă sistemul vulnerabil din start. Orice mecanisme care pot fi folosite pentru a ocoli securitatea trebuie să fie explicate, documentate și aduse în atenția utilizatorilor finali.</p>
            <p className="content"> &nbsp;&nbsp; În teorie, orice metodă criptografică cu o cheie poate fi spartă prin încercarea succesivă a tuturor cheilor.Dacă utilizarea forței brute pentru a încerca toate cheile este singura opțiune, puterea de calcul necesară crește exponențial cu lungimea cheii. O cheie pe 32 de biți are nevoie de 2^32 (aproximativ 10^9) pași. Acesta este ceva ce poate face oricine pe computerul său de acasă. Un sistem cu chei pe 56 de biți, cum ar fi DES, necesită un efort substanțial, dar utilizarea unor sisteme distribuite masive necesită doar câteva ore de calcul. În 1999, o căutare de forțe brute folosind un supercomputer special conceput și o rețea mondială de aproape 100.000 de PC-uri pe Internet a găsit o cheie DES în 22 de ore și 15 minute. Se crede că cheile cu cel puțin 128 de biți (cum ar fi AES, de exemplu) vor fi suficiente împotriva atacurilor de forță brută în viitorul apropiat.</p>
            <p className="content">&nbsp;&nbsp; Cu toate acestea, lungimea cheii nu este singura problemă relevantă. Multe cifruri pot fi sparte fără a încerca toate cheile posibile. În general, este foarte dificil să se proiecteze metode de cifrare care nu ar puteafi sparte mai eficient folosind alte metode.</p>
            <p className="content">&nbsp;&nbsp; Modelele nepublicate sau secrete ar trebui, în general, să fie privite cu suspiciune. Destul de des designerul nu este sigur de siguranța algoritmului, sau securitatea acestuia depinde de secretul algoritmului. </p>
            <p className="content">&nbsp;&nbsp; În general, nici un algoritm care depinde de secretul algoritmului nu este sigur. Pentru profesioniști, este ușor să dezasambleze și să inverseze algoritmul. Experiența a arătat că marea majoritate a algoritmilor secrete care au devenit cunoscute mai târziu au fost în realitate slabe.</p>
            <p className="content">&nbsp;&nbsp; Cheile folosite în algoritmii cu chei publice sunt de obicei mult mai lungi decât cele utilizate în algoritmii simetrici. Acest lucru este cauzat de structura suplimentară care este disponibilă pentru cript-analizator. Problema nu este aceea de a ghici cheia corectă, ci de a deduce cheia privată potrivită din cheia publică. În cazul RSA, acest lucru se poate face prin factorizarea unui număr întreg, care are doi factori principali mari. În cazul altor sisteme criptosisteme, acest lucru este echivalent cu calculul logaritmului discret modulo un număr întreg (care se consideră a fi aproximativ comparabil cu factorizarea atunci când moduli este un număr mare mare). Există criptosisteme cu cheie publică bazate pe alte principii</p>
            <p className="content">&nbsp;&nbsp; Pentru a da o idee despre complexitatea criptosistemului RSA, un modul de 256 de biți este ușor de luat în considerare la domiciliu, iar cheile de 512 biți pot fi sparte de către grupurile de cercetare universitare în câteva luni. Cheile cu 768 de biți probabil că nu sunt sigure pe termen lung. Cheile cu 1024 de biți și mai multar trebui să fie în siguranță pentru moment, dacă nu se fac progrese criptografice majore împotriva RSA. RSA Security pretinde că cheile de 1024-biți sunt echivalente cu rezistența la cheile simetrice de 80 de biți și recomandă utilizarea acestora până în 2010. Cheile RSA de 2048-biți sunt susținute a fi echivalente cu cheilesimetrice de 112 biți și pot fi utilizate cel puțin până în 2030 .</p>
            <p className="content">&nbsp;&nbsp; Trebuie subliniat faptul că puterea unui sistem criptografic este de obicei egală cu cea mai slabă verigă. Nici un aspect al designului sistemului nu ar trebui să fie trecut cu vederea, de la alegerea algoritmilor la politicile de distribuție și utilizare a cheilor.</p>
          </section>
          <section>
            <p className="article-title">1.2 Analiza criptografică și spargerea sistemelor de criptare</p>
            <p className="content">&nbsp;&nbsp; Criptanaliza este arta descifrării comunicațiilor criptate fără cunoașterea cheilor corecte. Există multe tehnici criptanalitice. Unele dintre cele mai importante pentru un implementator de sistem sunt descrise mai jos:</p>
            <ul>
              <li className="list-item">&nbsp;&nbsp; atac de tip <b>text cifrat</b> (ciphertext): aceasta este situația în care atacatorul nu știe nimic despre conținutul mesajului și trebuie să lucreze doar cu textul cifrat. În practică, este destul de des posibil să se facă presupuneri despre textul original, deoarece multe tipuri de mesaje au anteturi de format fix. Chiar și scrisorile și documentele obișnuite încep într-un mod foarte previzibil. De exemplu, multe atacuri clasice folosesc analiza de frecvență a textului cifrat, însă acest lucru nu funcționează bine împotriva algoritmilor moderni.</li>
              <p className="content">♦&nbsp;&nbsp; Sistemele de criptare moderne nu sunt vulnerabile la atacurile numai de tip text cifrat, deși uneori acestea sunt considerate cu presupunerea suplimentară că mesajul conține unele particularități statistice.</p>
              <li className="list-item">&nbsp;&nbsp;  atac de tip text original parțial (known plaintext): Atacantul știe sau poate ghici textul original pentru anumite părți ale textului cifrat. Sarcina este de a decripta restul blocurilor de tip text cifrat utilizând aceste informații. Acest lucru se poate face prin determinarea cheii folosite pentru criptarea datelor sau prin intermediul unei scurtături.</li>
              <p className="content">♦&nbsp;&nbsp;   Una dintre cele mai cunoscute metode cunoscute de text original parțial este criptanaliza liniară împotriva cifrurilor de tip bloc.</p>
              <li className="list-item">&nbsp;&nbsp; atac de tip text original ales (chosen plaintext): Atacatorul este capabil să aibă orice text pe convenabil criptat cu cheia necunoscută. Sarcina este de a determina cheia utilizată pentru criptare</li>
              <p className="content">♦&nbsp;&nbsp;  Un bun exemplu al acestui atac este criptanaliza diferențială care poate fi aplicată împotriva cifrurilor (algoritmilor) de tip bloc (și, în unele cazuri, și împotriva funcțiilor de hash).</p>
              <li className="list-item">&nbsp;&nbsp; atac de tip man-in-the-middle (intermediar): acest atac este relevant pentru comunicarea criptografică și pentru protocoalele de distribuție a cheilor. Ideea este că atunci când două părți, A și B, schimbă cheile pentru o comunicare securizată (de exemplu, folosind protocolul Diffie-Hellman), un adversar se poziționează între A și B pe linia de comunicație. Adversarul interceptează apoi semnalele pe care A și B le trimit reciproc și efectuează un schimb de chei cu A și B separat. A și B vor avea în final chei diferite, fiecare dintre ele fiind cunoscută adversarului. Intermediarul poate apoi decripta orice mesaj de la A cu cheia pe care o împarte cu A și apoi să retransmită mesajul la B prin criptarea din nou cu cheia pe care o împarte cu B. Atât A cât și B vor crede că comunică în siguranță, dar de fapt adversarul aude totul<br/>♦ &nbsp;&nbsp; Modalitatea obișnuită de a preveni atacul de tip "man-in-the-middle" este utilizarea unui sistem de criptare cu cheie publică capabil să furnizeze semnături digitale. Pentru configurare, părțile trebuie să-și cunoască în avans cheile publice. După ce secretul partajat a fost generat, părțile trimit semnăturile digitale între ele. Intermediarul (man-in-the-middle) nu reușește în atacul său, deoarece nu reușește să creeze aceste semnături fără cunoașterea cheilor private folosite pentru semnare.</li>
              <li className="list-item"> &nbsp;&nbsp; Atacul împotriva sau utilizarea hardware-ului subiacent: în ultimii ani, pe măsură ce tot mai multe dispozitive mobile de criptare mobile au intrat în uz larg, o nouă categorie de atacuri a devenit relevantă și urmărește direct implementarea hardware a sistemului de criptare</li>
              <li className="list-item">&nbsp;&nbsp; Defectele în criptosisteme pot duce la criptanaliză și chiar la descoperirea cheii secrete. Interesul pentru dispozitivele criptografice conduce la descoperirea faptului că unii algoritmi s-au comportat foarte prost odată cu introducerea de mici defecte în calculul intern.</li>
              <li className="list-item"> &nbsp;&nbsp; criptografia ADN: Leonard Adleman (unul dintre inventatorii RSA) a venit cu ideea de a folosi ADN-ul cacalculatoare. Moleculele de ADN ar putea fi văzute ca un calculator foarte mare capabil de execuție paralelă. Această natură paralelă ar putea da computerelor ADN o creștere a performanțelor exponențială față de computerele seriale moderne.</li>
            </ul>
          </section>
          <section>
            <p className="article-title">1.3 Calculul cuantic</p>
            <p className="content">&nbsp;&nbsp;Lucrarea lui Peter Shor despre factorizare în timp polinomial și algoritmi pentru logaritmul discret , utilizând computerele cuantice a provocat un interes tot mai mare în calculul cuantic. Calculul cuantic este un domeniu recent de cercetare care utilizează mecanica cuantică pentru a construi computere care, în teorie, sunt mai puternice decât computerele seriale moderne. Puterea derivă din paralelismul inerent al mecanicii cuantice. Deci, în loc să efectuăm sarcini una câte una, cum fac mașinile de serie, computerele cuantice le pot efectua pe toate odată (în paralel). Astfel, se speră că, cu ajutorul calculatoarelor cuantice, putem rezolva problemele imposibile pentru computerele seriale.</p>
            <p className="content">&nbsp;&nbsp;Rezultatele lui Shor implică faptul că, dacă calculatoarele cuantice ar putea fi implementate eficient, atunci majoritatea criptografiei cu cheie publică vor deveni istorie. Cu toate acestea, ele sunt mult mai puțin eficiente împotriva criptografiei cu cheie secretă.</p>
            <p className="content">&nbsp;&nbsp;Starea actuală a computerelor cuantice nu pare alarmantă, deoarece au fost implementate doar mașini foarte mici. Teoria calculului cuantic oferă promisiuni pentru performanțe mai bune decât computerele seriale,cu toate acestea, dacă se vor realiza în practică, este o întrebare deschisă.</p>
            <p className="content">&nbsp;&nbsp;Mecanica cuantică este, de asemenea, o sursă pentru noi modalități de secretizare a datelor și o comunicare sigură cu potențialul de a oferi o securitate nevulnerabilă, acesta fiind domeniul criptografiei cuantice. Spre deosebire de calculul cuantic, multe implementări experimentale de succes ale criptografiei cuantice au fost deja realizate. Cu toate acestea, criptografia cuantică este încă departe de a fi realizată în aplicații comerciale.</p>
          </section>
        </div>
    )
  }
}

export default Vulnerabilitatii;
