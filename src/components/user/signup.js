import React from "react";
import img1 from "../img/logo.png";
import img3 from "../img/google.png";
import img4 from "../img/facebook.png";


const Signup = () => {
  return (
    <React.Fragment>
      <div
        class="m sign-in-modal"
        id="SigninModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <a href="https://www.datafolkz.co.in" class="theme-logo">
                <img src={img1} alt="Data Folkz" />
              </a>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="sign-up-form">
                <form role="form" method="post" action="/login">
                  <input type="hidden" name="_csrf" value="" />
                  <div class="form-group">
                    <label for="">Name</label>
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      id=""
                      placeholder="name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Email</label>
                    <input
                      type="text"
                      name="password"
                      class="form-control"
                      id=""
                      placeholder="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input
                      type="text"
                      name="password"
                      class="form-control"
                      id=""
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Confirm Password</label>
                    <input
                      type="text"
                      name="password"
                      class="form-control"
                      id=""
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div class="form-row submit-box">
                    <div class="google-img">
                      <a>
                        <img src={img3} />
                      </a>
                    </div>
                    <div class="facebook-img">
                      <a>
                        <img src={img4} />
                      </a>
                    </div>
                    <button type="submit" class="theme_btn">
                      Sign up <span></span>
                    </button>
                  </div>
                </form>
                <br />
                <p className="below">
                  Already a member?
                  <a href="#">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
