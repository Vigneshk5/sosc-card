import profile from "./assets/profile.jpg";

import "./App.scss";

function App() {
  return (
    <div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card">
        <div className="card-content">
          <img className="profile-image" src={profile} alt="logo" />
          <div className="name">Vignesh K </div>
          <div className="name-web">Web Developer</div>
          <ul className="card-social">
            <li className="card-social__item">
              <a href="https://github.com/Vigneshk5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"
                    stroke="#53ef7d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"
                    stroke="#53ef7d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"
                    stroke="#53ef7d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"
                    stroke="#53ef7d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </li>
            <li className="card-social__item">
              <a href="https://www.instagram.com/vigneshpatali/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 6H14C9.58172 6 6 9.58172 6 14V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V14C42 9.58172 38.4183 6 34 6Z"
                    fill="none"
                    stroke="#53ef7d"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
                    fill="none"
                    stroke="#53ef7d"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 15C36.1046 15 37 14.1046 37 13C37 11.8954 36.1046 11 35 11C33.8954 11 33 11.8954 33 13C33 14.1046 33.8954 15 35 15Z"
                    fill="#53ef7d"
                  />
                </svg>
              </a>
            </li>
            <li className="card-social__item">
              <a href="https://www.linkedin.com/in/vignesh-k-484153229/">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg"></div>
        <div className="blob"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
