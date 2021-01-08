import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Article-blueprint.css";
import myImg from "../Images/md-5 hashing.jpeg";

class MD5 extends React.Component{


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
      let url =`https://api.hashify.net/hash/md5/hex?value=${text}`;
      fetch(url)
      .then(obj=>{return obj.json()})
      .then(res=>{this.setState({result:res["Digest"]})});

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
          <img src={myImg} alt="crypto-img" className="article-photo"/>
          <p className="article-title"> MD5 – generalități</p>
          <p className="content"> &nbsp; MD5 este o funcție de hash de tip bloc (dimensiunea blocului este de 512 biți) care a fost dezvoltată de către Rivest în 1991. Intrarea pentru MD5 este un mesaj sau fișier de lungime arbitrară, în timp ce ieșirea este un șir de biți de lungime fixă. Lungimea acestui hash este de 128 biți sau de 4 cuvinte (a 32 de biți fiecare). Specificația formală a acestui algoritm hash este conținută în RFC 1321. </p>
        </section>
        <section>
        <p className="article-title">Descrierea algoritmului MD-5</p>
        <p className="content">Începem cu presupunerea că avem un mesaj de lungime b biți ca intrare și că dorim să-i aflăm hash-ul În cazul nostru, b este un întreg pozitiv sau zero, de mărime arbitrară. Presupunem că biții acestui mesaj suntscriși astfel:</p>
        <p className="content">&nbsp; &nbsp; &nbsp; &nbsp;m_0 m_1 ... m_{`{b-5}`}</p>
        <p className="content">Pentru calcularea hash-ului (digest-ului) acestui mesaj, sunt parcurși următorii cinci pași:</p>
        </section>
        <section>
        <p className="article-title">Pasul 1 – adăugarea biților de umplutură</p>
        <p className="content">Mesajul este "umplut" (completat, extins) astfel ca lungimea sa (în biți) să fie congruentă cu 448, modulo 512. Cu alte cuvinte, mesajul este extins pentru a-i mai lipsi doar 64 de biți ca să fie multiplu de 512. Acesată completare este efectuată întotdeauna, chiar dacă lungimea mesajului este deja congruentă cu 448 modulo 512.</p>
        <p className="content">Completarea se face după cum urmează: un singur bit "1" este atașat la mesaj și apoi biți cu valoarea "0" sunt atașați astfel încât lungimea în biți a mesajului completat să devină congruentă cu 448, modulo 512. În total, cel puțin un bit și cel mult 512 de biți sunt atașați.</p>
        </section>
        <section>
        <p className="article-title">Pasul 2 – adăugarea lungimi</p>
        <p className="content">O reprezentare pe 64 de biți a lui b (lungimea mesajului înainte de adăugarea biților de umplere) este atașată la rezultatul etapei anterioare. În cazul puțin probabil că b este mai mare de 2^64, atunci se utilizeazădoar cei 64 de biți de ordin mic din b. (Acești biți sunt atașați ca două cuvinte pe 32 de biți și mai întâi este atașat cuvântul cu cifrele mai puțin semnificative, în conformitate cu convențiile anterioare.)</p>
        <p className="content">În acest moment mesajul rezultat (după umplutura cu biți și cu lungimea atașată) are o lungime care esteun multiplu exact de 512 biți. În mod echivalent, acest mesaj are o lungime care este un multiplu exact de 16 cuvinte (32 de biți). Fie M [0 ... N-1] cuvintele mesajului rezultat, unde N este un multiplu de 16.</p>
        </section>
        <section>
          <p className="article-title">Pasul 3 – inițializarea bufferului MD</p>
          <p className="content">Un buffer de patru cuvinte (A, B, C, D) este folosit pentru a calcula digestul mesajului. Aici fiecare din A, B, C, D este un registru pe 32 de biți. Aceste registre sunt inițializate cu următoarele valori în octeți hexazecimali, în ordine descrescătoare):</p>
          <ul className="no-styled-list">
            <li>cuvântul A: 01 23 45 67</li>
            <li>cuvântul B: 89 ab cd ef</li>
            <li>cuvântul C: fe dc ba 98</li>
            <li>cuvântul D: 76 54 32 10</li>
          </ul>
        </section>
        <section>
          <p className="article-title">Pasul 4 - procesarea mesajului în blocuri de 16-cuvinte</p>
          <p className="content">   Mai întâi definim patru funcții auxiliare, fiecare având ca intrări trei cuvinte pe 32 de biți și producând caieșire un cuvânt pe 32 de biți.</p>
          <ul className="no-styled-list">
            <li>F(X,Y,Z) = (X&Y)|(~X&Z)</li>
            <li>G(X,Y,Z) = (X&Z)|(Y&~Z)</li>
            <li>H(X,Y,Z) = X^Y^Z</li>
            <li>I(X,Y,Z) = Y^(X|~Z)</li>
          </ul>
          <p className="content">Pentru fiecare bit, F acționează ca o condiție: dacă X atunci Y altfel Z. Funcția F ar fi putut fi definită folosind + în locul lui sau din moment ce X și Y și not(X) și Z nu vor avea niciodată 1 în aceeași poziție de. Interesant de observat că dacă biții X, Y și Z sunt independenți și imparțiali, fiecare bit al F (X, Y, Z) va fi independent și imparțial.</p>
          <p className="content">Funcțiile G, H și I sunt similare cu funcția F, prin aceea că acționează în "paralel la nivel de biți" pentru a produce ieșirea lor de la biții X, Y și Z, astfel încât dacă biții corespunzători ai lui X , Y și Z sunt independenți și imparțiali, atunci fiecare bit al lui G (X, Y, Z), H (X, Y, Z) și I (X, Y, Z) va fi independent și imparțial. Rețineți că funcția H este funcția "xor" sau "paritate" a biților de intrare.</p>
          <p className="content">Acest pas utilizează un tabel cu 64 de elemente T [1 ... 64] construit din funcția sinus. Fie T [i] elementul ial tabelei, care este egal cu partea întreagă a lui 4294967296 înmulțit cu abs(sin (i)), unde i este în radiani.</p>
        </section>
        <section>
          <p className="article-title">Pasul 5 - rezultat</p>
          <p className="content">Hashul mesajului (digest-ul, suma de control) este format din cuvintele A, B, C, D. Se începe cu octelul cel mai puțin semnificativ al lui A și se termină cu octetul cel mai semnificativ al lui D.</p>
          <p className="content">Descrierea lui MD5 este acum completă</p>
        </section>
        <section>
          <p className="article-title">Implementare</p>
          <p className="content"><a className="link-style" href="https://bobobobo.wordpress.com/2010/10/17/md5-c-implementation/">C++</a></p>
          <p className="content"><a className="link-style" href="https://github.com/blueimp/JavaScript-MD5/blob/master/js/md5.js">JavaScript</a></p>
        </section>
        <section>
         <p className="article-title">Exemplu MD5</p>
         <input type="text" className="encrypt-field"/>
         <button className="submit-btn" onClick={this.setHash}>Hash it</button>
         <p className="result"><span className="chunk">Result:</span>{this.state.result}</p>
        </section>
      </div>
      );
    }
}

export default MD5;
