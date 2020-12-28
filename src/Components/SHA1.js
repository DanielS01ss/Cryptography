import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Article-blueprint.css";
import myImg from "../Images/sha1-photo.png";

class SHA1 extends React.Component{
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
   console.log(text);
   let url =`https://api.hashify.net/hash/sha1/hex?value=${text}`;
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
      <p className="content">SHA-1 este obiectul specificației FIPS 180-1, un document NIST din 1993. Este o funcție hash de tip bloc, mărimea blocului fiind de 512 biți (64 octeți). Produce un hash de 160 de biți, de obicei sub forma a 5 cuvinte de 32 de biți, reprezentate în hexazecimal. Este considerată o funcție hash relativ sigură. Totuși, se preconizează înlocuirea sa treptată (începând cu 2010) cu variante mai sigure, precum SHA-2 și SHA-3.</p>
      <p className="content"></p>

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
    <p className="article-title">Completarea mesajului (message padding)</p>
    <p className="content">SHA-1 este folosit pentru a calcula hash-ul unui mesaj sau al unui fișier de date care este furnizat ca intrare. Mesajul sau fișierul de date ar trebui considerat a fi un șir de biți. Lungimea mesajului este numărul de biți din mesaj (mesajul gol are lungimea 0). Dacă numărul de biți dintr-un mesaj este un multiplu de 8, pentru compactitate putem reprezenta mesajul în hexa. Scopul completării mesajului este de a face lungimeatotală a unui mesaj să fie un multiplu de 512. SHA-1 procesează secvențial blocuri de 512 biți atunci când se compune digestul mesajului. Următoarele specifică modul în care se realizează această completare. Pe scurt, un "1" urmat de m de "0", urmat de un întreg pe 64 de biți sunt atașați la sfârșitul mesajului pentru a produce un mesaj completat (padded) cu lungimea de 512 * n. Numărul întreg pe 64 de biți este l, lungimea mesajului original. Mesajul completat (căptușit) este apoi procesat de SHA-1 ca n blocuri de 512 biți</p>
    <p className="content">Să presupunem că un mesaj are lungimea l {"<2^64."} Înainte de a intra în SHA-1, mesajul este completat (căptușit) în dreapta după cum urmează:</p>
    <ul className="no-styled-list">
      <li>1.un bit cu valoarea "1" este atașat. Exemplu: dacă mesajul original este "01010000", acesta este căptușit la "010100001"</li>
      <li>2. Se adaugă biți zero "0". Numărul de zerouri "0" va depinde de lungimea inițială a mesajului. Ultimii 64 de biți ai ultimului bloc de 512 biți sunt rezervați pentru lungimea l a mesajului original</li>
      <li>3. Obțineți reprezentarea de 2 cuvinte a lui l, numărul de biți din mesajul original. Dacă l {"<2^32"} atunci primul cuvânt este zero. Adăugați aceste două cuvinte la mesajul căptușit.</li>
    </ul>
    <p className="content">Exemplu: Să presupunem că mesajul inițial este ca în (b). Apoi l = 40 (rețineți că l este calculat înainte deorice umplutură). Reprezentarea cu două cuvinte a lui 40 este hex 00000000 00000028. Prin urmare, mesajul căptușit final este în hexa:</p>
    <ul className="no-styled-list">
      <li>61626364 65800000 00000000 00000000 </li>
      <li>00000000 00000000 00000000 00000000</li>
      <li>00000000 00000000 00000000 00000000 </li>
      <li> 00000000 00000000 00000000 00000028</li>
    </ul>
    <p className="content">Mesajul căptușit va conține 16*n cuvinte pentru un număr n{">"} 0. Mesajul căptușit este considerat ca o secvență de n blocuri M_1, M_2, ..., M_n, unde fiecare M_i conține 16 cuvinte și M1 conține primele caractere (sau biți) ai mesajului.</p>

   </section>
   <section>
      <p className="article-title">Funcții utilizate</p>
      <p className="content">SHA-1 utilizează o secvență de funcții logice f_0, f_1, ..., f_79. Fiecare f_t, 0 {"<= t <="} 79, operează pe trei cuvinte pe 32 de biți B, C, D și produce un cuvânt de 32 de biți ca ieșire. f_t (B, C, D) este definită după cum urmează: pentru cuvintele B, C, D,</p>
      <ul className="no-styled-list">
        <li>ft(B,C,D) = (B AND C) OR ((NOT B) AND D) ( 0 {"<= t <= 19"}) </li>
        <li>ft(B,C,D) = B XOR C XOR D (20 {"<= t <= 39"})</li>
        <li>ft(B,C,D) = (B AND C) OR (B AND D) OR (C AND D) (40 {"<= t <= 59"}) </li>
        <li>ft(B,C,D) = B XOR C XOR D (60 {"<= t <= 79"}).</li>
      </ul>
   </section>
   <section>
    <p className="article-title">Constante utilizate</p>
    <p className="content">SHA-1 utilizează o secvență de cuvinte constante K (0), K (1), ..., K (79). În hexa, acestea sunt date de:</p>
    <ul className="no-styled-list">
      <li>K = 5A827999 ( 0{" <= t <= 19"}) </li>
      <li>Kt = 6ED9EBA1 (20 {"<= t <= 39"})</li>
      <li>Kt = 8F1BBCDC (40 {"<= t <= 59"}) </li>
      <li>Kt = CA62C1D6 (60 {"<= t <= 79"})</li>
    </ul>
   </section>
   <section>
     <p className="article-title">Implementare</p>
     <p className="content"><a className="link-style" href="https://github.com/CommanderBubble/sha1/tree/master/src">C++</a></p>
     <p className="content"><a className="link-style" href="https://gist.github.com/shreyasHpandya/2594337">JavaScript</a></p>
   </section>
   <section>
    <p className="article-title">Exemplu SHA1</p>
    <input type="text" className="encrypt-field"/>
    <button className="submit-btn" onClick={this.setHash}>Hash it</button>
    <p className="result"><span className="chunk">Result:</span>{this.state.result}</p>
   </section>
</div>

     );
    }
}


export default SHA1;
