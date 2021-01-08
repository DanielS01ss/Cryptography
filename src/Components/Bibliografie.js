import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Main.css";



class Bibliografie extends React.Component{

  constructor(){
    super();
    this.state = {
    is_visible: false
  };
  this.state={
    result:""
  }

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
    return (
      <div className="home-main">
        <section>

          <p className="article-title">Bibliografie</p>
          <p className="content"><a style={{"color":"#fff"}} href="https://staff.fmi.uvt.ro/~stelian.mihalas/cri_sin/cursuri/crisin.pdf">Stelian Mihai curs Criptografie</a></p>
          <p className="content"><a  style={{"color":"#fff"}} href="https://ro.wikipedia.org/wiki/Criptografie">Wikipedia criptografie</a></p>
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

      </div>
    )
  }

}

export default Bibliografie;
