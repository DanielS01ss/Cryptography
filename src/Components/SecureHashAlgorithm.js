import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Article-blueprint.css";
import myImg from "../Images/Secure-Hash-Algorithm-SHA-1.png";

class SecureHashAlgorithm extends React.Component{
  constructor(){
    super();
    this.state = {
    is_visible: false
  };
  this.state={
    result:""
  }
  this.setHash = this.setHash.bind(this);
  }


  componentDidMount() {
    window.scrollTo({
      top: 0,

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

  setHash(){
   let text = document.querySelector(".encrypt-field").value;
   ///aicea facem requestul
   console.log(text)
   let url =`https://api.hashify.net/hash/md5/hex?value=${text}`;
   fetch(url)
   .then(obj=>{return obj.json()})
   .then(res=>{this.setState({result:res["Digest"]})});

   }

    render(){
      const { is_visible } = this.state;
     return(
    <div className="home-main">
    <section>
      <img src={myImg} alt="sha-scheme" className="article-photo"/>
      <p className="article-title">Secure hash algorithm</p>
      <p className="content">Funcțiile hash SHA reprezintă un set de funcții hash criptografice proiectate de Agenția Națională de Securitate (NSA) și publicate de NIST ca standard federal de prelucrare a informațiilor din S.U.A. SHA înseamnă Secure Hash Algorithm. Cei trei algoritmi SHA inițiali sunt structurați diferit și se disting ca SHA-0, SHA-1 și SHA-2. Familia SHA-2 utilizează un algoritm identic cu o dimensiune a hashului variabilă, având denumirile distincte ca SHA-224, SHA-256, SHA-384 și SHA-512</p>
      <p className="content">SHA-1 este cel mai utilizat dintre funcțiile hash existente SHA și este folosit în mai multe aplicații și protocoale de securitate utilizate pe scară largă. În 2005, au fost identificate deficiențe de securitate în SHA-1, și anume că ar putea exista o posibilă slăbiciune matematică, indicând faptul că ar fi de dorit o funcție mai puternică de tip hash. Deși nu s-au raportat încă atacuri asupra variantelor SHA-2, ele sunt asemănătoare algoritmilor cu SHA-1 și astfel s-au făcut eforturi pentru a dezvolta alternative îmbunătățite. Un nou standard hash, SHA-3, folosind un nou algoritm numit Keccak, a fost selectat printr-o competiție deschisă care a avut loc între toamna lui 2008 și 2012.</p>
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
    <p className="article-title"> SHA-0 și SHA-1</p>
    <p className="content">Specificația originală a algoritmului a fost publicată în 1993 ca standardul Secure Hash, FIPS PUB 180, de către agenția americană de standardizare NIST (Institutul Național de Standarde și Tehnologie). Această versiune este acum adesea denumită SHA-0. A fost retrasă de către NSA la scurt timp după publicare și a fost înlocuită de versiunea revizuită, publicată în 1995 în FIPS PUB 180-1 și denumită în mod obișnuit SHA-1. SHA-1 diferă de SHA-0 numai printr-o singură rotație la nivel de bit în rotația de mesaje a funcției sale de compresie; acest lucru s-a făcut, conform NSA, pentru a corecta un defect al algoritmului original care reducea securitatea sa criptografică. Cu toate acestea, ANS nu a furnizat nicio explicație suplimentară și nici nu a identificat defectul corectat. Puncte slabe au fost ulterior raportate atât la SHA-0, cât și la SHA-1. SHA-1 pare să ofere o mai mare rezistență la atacuri, susținând afirmația NSA că schimbarea a sporit securitatea.</p>
    <p className="content">SHA-1 (ca și SHA-0) produce un hash de 160 biți dintr-un mesaj cu o lungime maximă de (2^64 - 1) biți. SHA-1 se bazează pe principii similare celor utilizate de Ronald L. Rivest de la MIT în proiectarea algoritmilorde generare a hash-ului mesajelor MD4 și MD5, dar are un design mai conservator</p>
   </section>
   <section>
    <p className="article-title">SHA-2 family</p>
    <p className="content">NIST a publicat patru funcții hash suplimentare în familia SHA, denumite după lungimile hashului (în biți):SHA-224, SHA-256, SHA-384 și SHA-512. Algoritmii sunt denumiți în mod colectiv SHA-2.</p>
    <p className="content">Algoritmii au fost publicați pentru prima oară în 2001 în draftul FIPS PUB 180-2, moment în care revizuirea și comentariul au fost acceptate. FIPS PUB 180-2, care include și SHA-1, a fost lansat ca standardoficial în 2002. În februarie 2004 a fost publicată o notificare de schimbare pentru FIPS PUB 180-2, specificând o variantă suplimentară, SHA-224, lungimea cheii fiind cea a două chei Triple DES. Aceste variante sunt brevetate în brevetul US 6829355. Statele Unite au eliberat brevetul în baza unei licențe gratuite.</p>
    <p className="content">SHA-256 și SHA-512 sunt funcții noi de tip hash calculate cu cuvinte de 32 și, respectiv, 64 de biți. Ele folosesc cantități diferite de șifturi și constante aditive, dar structurile lor sunt altfel practic identice, diferențiindnumai numărul de runde. SHA-224 și SHA-384 sunt pur și simplu variante trunchiate ale primelor două, calculate cu valori inițiale diferite.</p>
    <p className="content">pre deosebire de SHA-1, funcțiile SHA-2 nu sunt utilizate pe scară largă, în ciuda securității lor mai bune. Motivele ar putea include lipsa suportului pentru SHA-2 pe sistemele care rulează Windows XP SP2 au mai vechi, lprecum și ipsa de motivație percepută din moment ce nu au fost găsite coliziuni SHA-1 sau dorința de a aștepta până la standardizarea SHA-3. SHA-256 este utilizat pentru a autentifica pachetele software Debian Linux și în standardul de semnătură digitală a mesajelor DKIM; SHA-512 face parte dintr-un sistem de autentificare a înregistrărilor video de arhivă de la Tribunalul Penal Internațional pentru genocidul din Ruanda. SHA-256 și SHA-512 sunt propuse pentru utilizarea în directiva DNSSEC NIST ce sugerează agențiilor guvernamentale americane să oprească cele mai multe utilizări ale SHA-1 după 2010 iar finalizarea SHA-3 poate accelera migrarea de la SHA-1 </p>
   </section>
   <section>
    <p className="article-title">SHA-3</p>
    <p className="content">
    O competiție deschisă pentru o nouă funcție SHA-3 a fost anunțată în mod oficial în Registrul Federal al SUA în 2 noiembrie 2007. "NIST inițiază un efort de a dezvolta unul sau mai mulți algoritmi de hash suplimentari printr-o competiție publică, similar cu procesul de dezvoltare pentru Advanced Encryption Standard (AES)." Propunerile au avut loc pe 31 octombrie 2008, iar proclamarea unui câștigător și publicareanoului standard au avut loc în 2012.
    </p>
   </section>

</div>

     );
    }
}


export default SecureHashAlgorithm;
