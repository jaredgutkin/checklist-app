import { Link } from "react-router-dom";
import { FaBolt, FaQuestionCircle } from "react-icons/fa";


export default function HomeChoose() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Link to="/mbs1">
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                  <div className="container text-decoration-none">
                    <h1 className="display-4 text-center text-decoration-none">
                      <FaBolt /> Mini Brands! Series 1
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/mbs2">
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaBolt /> Mini Brands! Series 2
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Link to="/mbs3">
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaBolt /> Mini Brands! Series 3
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/mbs4">
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaBolt /> Mini Brands! Series 4
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <Link to="/mbsgr">
                <div className="jumbotron jumbotron-fluid bg-dark
                  text-yellow text-decoration-none">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaBolt /> Mini Brands! Gold Rush
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          
          <div className="row">
            <div className="col-sm-12">
              <Link to="/about">
                <div className="jumbotron jumbotron-fluid bg-secondary
                  text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaQuestionCircle /> About
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )
}
