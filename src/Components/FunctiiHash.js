import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Article-blueprint.css"
import myImg from "../Images/hash-function.png";
import "../Styles/Article-blueprint.css";
import "../Styles/decimal-list.css"

class FunctiiHash extends React.Component{

   constructor(){
     super();
     this.state = {
     is_visible: false
   };
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
     <p className="article-title">&nbsp;&nbsp;Funcții de hash</p>
     <p className="content"> &nbsp;&nbsp; Funcția criptografică de hash este o transformare care ia o intrare și returnează un șir de dimensiunifixe, care se numește fie valoare hash, fie sumă de control sau digest. Funcțiile hash cu această proprietate sunt utilizate pentru o varietate de scopuri computaționale, inclusiv în criptografie. Valoarea hash este o reprezentare concisă a mesajului sau documentului mai lung din care a fost calculată. Sau, poate fi văzută ca un fel de "amprentă digitală" a documentului mai mare. Funcțiile hash criptografice sunt utilizate pentru a efectua verificări ale integrității mesajelor și pentru generarea semnăturii digitale precum și în alte aplicații de securitate a informațiilor, cum ar fi autentificarea și integritatea mesajelor.</p>
     <p className="content"> &nbsp;&nbsp; O funcție de hash poate avea ca intrare un fișier, un mesaj, un șir de caractere, etc. de lungime arbitrară (deși un limită, greu de atins în practică, de genul 2^64-1 biți, poate fi impusă în multe situații) și are ca ieșire un șir de biți, cu o lungime fixă, de exemplu: 128, 160 sau 256 de biți), șir care este numit fie suma de control,hash, digest sau amprentă digitală. O valoare hash (numită și "digest" sau "checksum") este un fel de "semnătură" pentru fluxul de date care reprezintă conținutul fișierului sau mesajului. O analogie care explică rolul funcției hash ar fi sigiliile de detectare a modificării folosite pe un pachet software.</p>
     <p className="content"> &nbsp;&nbsp; În diferite standarde și aplicații, cele două funcții de hash utilizate cel mai frecvent sunt MD5 și familia SHA. În 2005, defecte de securitate au fost identificate în ambii algoritmi. În 2007, Institutul Național de Standarde și Tehnologie a anunțat un concurs pentru proiectarea unei funcții de tip hash, care a fost numit SHA-3 și care face obiectul FIPS 202</p>
     <p className="content">  &nbsp;&nbsp; Pentru o funcție hash h cu domeniul D și codomeniul (mulțimea în care ia valori) R, următoarele cerințe sunt obligatorii:</p>
     <ul className="decimal-list">
      <li>Rezistența la pre-imagini - dat y în R, este computațional imposibil să găsim x în D astfel încât h(x)=y.</li>
      <li> A doua rezistență la pre-imagine – dat fiind x în D, este computațional imposibil să găsim un alt z în D astfel încât h(x)=h(z).</li>
      <li>Rezistența la coliziune - este computațional imposibil să găsim x, z în D astfel încât h(x)=h(z)</li>
     </ul>
    </section>
    <section>
      <p className="article-title">Aplicații ale funcțiilor de hash</p>
      <p className="content">  &nbsp;&nbsp; Un caz tipic de utilizare a unui hash criptografgic ar putea fi următorul: Alice propune o problemă de matematică dificilă lui Bob și susține că a rezolvat-o. Bob ar vrea să încerce el însuși, dar ar vrea să fie sigur că Alice nu blufează. Prin urmare, Alice își scrie soluția, adaugă un nonce random (un număr arbitrar care poate fi utilizat o singură dată), își calculează hash-ul și îi spune Bob valoarea hash (păstrând în același timp soluția și secretul nonce). În acest fel, când Bob vine cu soluția el însuși câteva zile mai târziu, Alice poate dovedi că a avut soluția mai devreme prin aceea că dezvăluie nonce-ul lui Bob. (Acesta este un exemplu de schemă simplă de angajament, în practica actuală, Alice și Bob vor fi adesea programe de calculator, iar secretul ar fi o entitate mai dificil de falsificat).</p>
      <p className="content"> &nbsp;&nbsp; O altă aplicație importantă a hash-urilor securizate este verificarea integrității mesajelor. Determinarea faptului dacă au fost făcute schimbări la un mesaj (sau un fișier), de exemplu, poate fi realizată prin compararea hash-urilor mesajelor calculate înainte și după transmitere (sau după orice alt eveniment)</p>
      <p className="content"> &nbsp;&nbsp; Un hash al mesajului poate servi și ca mijloc de identificare fiabilă a unui fișier; mai multe sisteme de gestionare a codurilor sursă, inclusiv Git, Mercurial și Monotone, utilizează sume de control SHA-1 pentru diferite tipuri de conținut (conținutul fișierelor, arborii de directoare, informațiile de origine etc.) pentru a le identifica în mod unic </p>
      <p className="content"> &nbsp;&nbsp; O aplicație înrudită este verificarea parolei. Parolele nu sunt de obicei stocate în text clar, din motive evidente, ci în formă de hash. Pentru a autentifica un utilizator, parola prezentată de utilizator este convertită în hash și comparată cu hash-ul stocat. Acest lucru este denumit uneori criptare unidirecțională.</p>
      <p className="content"> &nbsp;&nbsp; Din motive de securitate și de performanță, majoritatea algoritmilor de semnătură digitală specifică faptul că numai digestul mesajului este "semnat", nu întregul mesaj. Funcțiile Hash pot fi de asemenea folosite în generarea de biți pseudorandom </p>
    </section>
</div>

     )
   }

}

export default FunctiiHash;
