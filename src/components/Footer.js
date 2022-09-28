import React, { useEffect, useReducer } from "react";

const emailFooter = "mcaffery@outlook.com"
const phoneFooter = "+61414882927"

const Notice = (props) => {
  return (
    <p className="icon">
      {props.icon} {props.message}
    </p>
  );
};

function reducer(state, action) {
  switch(action.type) {
    case 'OPEN-EMAIL-COPY':
      return {...state, copyEmail: action.payload}
    case 'CLOSE-EMAIL-COPY':
      return {...state, copyEmail: action.payload}
    case 'OPEN-EMAIL-TICK':
      return {...state, tickEmail: action.payload}
    case 'CLOSE-EMAIL-TICK':
      return {...state, tickEmail: action.payload}
    case 'OPEN-PHONE-COPY':
      return {...state, copyPhone: action.payload}
    case 'CLOSE-PHONE-COPY':
      return {...state, copyPhone: action.payload}
    case 'OPEN-PHONE-TICK':
      return {...state, tickPhone: action.payload}
    case 'CLOSE-PHONE-TICK':
      return {...state, tickPhone: action.payload}
    default:
      return state
  }
}

const defaultState = {
  copyPhone: false,
  copyEmail: false,
  tickPhone: false,
  tickEmail: false,
}

function Footer() {
  const year = new Date().getFullYear();
  const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(state.tickEmail === true){
        dispatch({type: "CLOSE-EMAIL-TICK", payload: false });
      } else if (state.tickPhone === true){
        dispatch({type: "CLOSE-PHONE-TICK", payload: false });
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [state.tickEmail, state.tickPhone])

  return (
    <footer className="footer-div">
      <div className="contact-details">
        <div>
          <h1>Contact</h1>
          <p>
            <i class="footer-icon fa-brands fa-linkedin"></i> linkedIn
          </p>
          <p>
            <i class="footer-icon fa-brands fa-square-github"></i> Github
          </p>
        </div>
        <div className="email-phone-copy-div">
          <div className="email-div">
            <p
              className="email"
              onMouseEnter={() =>
                dispatch({type: "OPEN-EMAIL-COPY", payload: true })
              }
              onMouseOut={() =>
                dispatch({type: "CLOSE-EMAIL-COPY", payload: false })
              }
              onClick={() => {
                dispatch({type: "CLOSE-EMAIL-COPY", payload: false });
                dispatch({type: "OPEN-EMAIL-TICK", payload: true });
                navigator.clipboard.writeText(emailFooter)
              }}
            >
              <i class="footer-icon fa-solid fa-envelope"></i>{" "}
              {emailFooter}
            </p>
            {state.copyEmail && (
              <Notice
                icon=<i class="fa-solid fa-sm fa-copy"></i>
                message="copy"
              />
            )}
            {state.tickEmail && (
              <Notice
                icon=<i class="fa-solid fa-sm fa-check"></i>
                message="copied!"
              />
            )}
          </div>
          <div className="phone-div">
            <p
              className="phone"
              onMouseEnter={() =>
                dispatch({type: "OPEN-PHONE-COPY", payload: true })
              }
              onMouseOut={() =>
                dispatch({type: "CLOSE-PHONE-COPY", payload: false })
              }
              onClick={() => {
                dispatch({type: "CLOSE-PHONE-COPY", payload: false });
                dispatch({type: "OPEN-PHONE-TICK", payload: true });
                navigator.clipboard.writeText(phoneFooter)
              }}
            >
              <i class="footer-icon fa-solid fa-mobile-screen-button"></i> +61
              414 882 927
            </p>
            {state.copyPhone && (
              <Notice
                icon=<i class="fa-solid fa-sm fa-copy"></i>
                message="copy"
              />
            )}
            {state.tickPhone && (
              <Notice
                icon=<i class="fa-solid fa-sm fa-check"></i>
                message="copied!"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <p>
          <i class="fa-regular fa-sm fa-copyright"></i> {year} Mick Caffery
        </p>
      </div>
    </footer>
  );
}

export default Footer;
