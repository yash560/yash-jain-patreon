import "./App.css";
import "./podcasts/firstScreen.css";
import "./podcasts/secondScreen.css";
import "./podcasts/thirdScreen.css";
import "./podcasts/fourthScreen.css";
import "./podcasts/fifthScreen.css";
import Footer from "./Footer";
import Header from "./Header";
import CheckComponet from "./pricing/CheckComponet";
function App() {
  return (
    <div className="App">
      <Header />
      <div class="Screen ">
        <div class="firstScreen">
          <div class="firstScreenComponent">
            <img
              height="100%"
              width="100%"
              src="https://ik.imagekit.io/Yash/streamline-icon-beta-testing-1_1000x1000_mCl5sabiE.png"
              alt=""
            />
          </div>
          <div class="firstScreenComponent">
            <div class="firstScreenComponentHeader">
              Where people in academia and industry meet
            </div>
            <div class="firstScreenComponentBody">
              Smart conversations never stop
            </div>
            <div class="firstScreenComponentBody">
              <div class="getStarted">Join Us</div>
            </div>
          </div>
        </div>
      </div>

      <div class="thirdScreen">
        <div class="thirdScreenInner">
          <div class="thirdScreenHeader">How it works</div>
          <div class="thirdScreenBody">
            <div class="thirdScreenBodyComponent">
              <div class="thirdScreenBodyIcon">
                <img
                  class="thirdScreenImage"
                  height="300px"
                  src="https://ik.imagekit.io/Yash/streamline-icon-message-sent-2_500x500-1_Z8Rdau1KP.png"
                  alt=""
                />
              </div>
              <div class="thirdScreenBodyComponentBody">
                Select people you want to meet and if they select you back, talk
                to them straight away.
              </div>
            </div>
            <div class="thirdScreenBodyComponent">
              <div class="thirdScreenBodyIcon">
                <img
                  height="300px"
                  class="thirdScreenImage"
                  src="https://ik.imagekit.io/Yash/streamline-icon-facetime-meeting-1_500x500-1_HurIMyF7T.png"
                  alt=""
                />
              </div>

              <div class="thirdScreenBodyComponentBody">
                Get a personalised 1:1 introduction to someone relevant twice a
                month.
              </div>
            </div>
            <div class="thirdScreenBodyComponent">
              <div class="thirdScreenBodyIcon">
                <img
                  class="thirdScreenImage"
                  height="300px"
                  src="https://ik.imagekit.io/Yash/streamline-icon-people-1_500x500-1_p0ozPHVJj.png"
                  alt=""
                />
              </div>

              <div class="thirdScreenBodyComponentBody">
                Join Rooms where you meet with a group of people sharing the
                same passion.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pricingThirdScreen">
        <div class="pricingThirdScreenHeader">
          Join over 15,000 members bridging the gap between academia and
          industry
        </div>
        <div class="pricingThirdScreenInside">
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Sylvie, PhD in Chemical Engineering
            </div>
            <div class="pricingThirdScreenComponentBody">
              Sylvie was in the final year of her PhD researching and developing
              novel green solutions to energy production. She joined Smart Tribe
              to build up her network with professionals in the energy sector.
            </div>
          </div>
          <div class=" pricingThirdScreenComponentOperator">
            <i class="fas fa-plus"></i>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Chin, Manager in energy company
            </div>
            <div class="pricingThirdScreenComponentBody">
              Chin joined Smart Tribe to make connections with researchers
              working on novel green energy. After a few video calls, Sylvie and
              Chin set up an interview for her at his company and she was
              offered a job.
            </div>
          </div>
          <div class=" pricingThirdScreenComponentOperator">
            <i class="fas fa-equals"></i>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader pricingThirdScreenComponentHeaderEqual">
              Job
            </div>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Anja, expert in Smart Materials
            </div>
            <div class="pricingThirdScreenComponentBody">
              Anja is full of ideas for how state-of-the-art breakthroughs in
              Smart Materials can be applied in industry. After Smart Tribe
              introduced her to Paul, she agreed to give expert consulting to
              his company.
            </div>
          </div>
          <div class=" pricingThirdScreenComponentOperator">
            <i class="fas fa-plus"></i>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Paul, R&D semi-conductor company
            </div>
            <div class="pricingThirdScreenComponentBody">
              Paul worked in R&D for a semi-conductor company who had a
              challenge to reduce their production costs. He joined Smart Tribe
              to make connections with academics who may have new perspectives
              on the problem.
            </div>
          </div>
          <div class=" pricingThirdScreenComponentOperator">
            <i class="fas fa-equals"></i>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader pricingThirdScreenComponentHeaderEqual">
              New Tech
            </div>
          </div>
        </div>
      </div>

      <div class="PricingfirstScreen">
        <div class="PricingfirstScreenInside">
          <div class="PricingfirstScreenText">
            <div class="PricingfirstScreenHeader">
              Great things come from Smart Connections
            </div>
            <div class="PricingfirstScreenBody">
              On Science2Innovation, both worlds of academia and industry, can
              finally come together in collaboration to help provide solutions
              to one another’s crucial problems while breaking down silos.
            </div>
          </div>
          <div class="cardContainer">
            <div class="planCardFeatures">
              <div class="card">
                <div class="planCardFirstText">
                  <div class="planCardHeader">Features </div>
                </div>
                <div class="planCardFourthText">
                  <CheckComponet text="Browse members profiles" />
                  <CheckComponet text="Instant messaging (no of people once selected back)" />
                  <CheckComponet text="Room hosting" />
                  <CheckComponet text="Personalised introductions per round" />
                  <CheckComponet text="Browsing members by their goals" />
                  <CheckComponet text="See who chose you for an introduction" />
                  <CheckComponet text="Room access" />
                  <CheckComponet text="Choose my introductions" />
                  <CheckComponet text="Priority introduction to popular members" />
                  <CheckComponet text="Have 100x more profile views" />
                </div>
              </div>
            </div>
            <div class=" planCard ">
              <div class="card">
                <div class="planCardFirstText">
                  <div class="planCardHeader">Freemiuim </div>
                </div>
                <div class="planCardFourthText">
                  <CheckComponet iconC="fas fa-check" text="Unlimited" />
                  <CheckComponet iconC="fas fa-check" text="10" />
                  <CheckComponet iconC="fas fa-check" text="1" />
                  <CheckComponet iconC="fas fa-check" text="1" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-times" text="No" />
                  <CheckComponet iconC="fas fa-times" text="No" />
                  <CheckComponet iconC="fas fa-times" text="No" />
                </div>
                <div class="recommendedButton">Coming Soon</div>
              </div>
            </div>
            <div class="planCard">
              <div class="card">
                <div class="planCardFirstText">
                  <div class="planCardHeader">Premium </div>
                </div>
                <div class="planCardFourthText">
                  <CheckComponet iconC="fas fa-check" text="Unlimited" />
                  <CheckComponet iconC="fas fa-check" text="Unlimited" />
                  <CheckComponet iconC="fas fa-check" text="Unlimited" />
                  <CheckComponet iconC="fas fa-check" text="2" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                  <CheckComponet iconC="fas fa-check" text="Yes" />
                </div>
                <div class="planCardButtons">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sixthScreen">
        <div class="thirdScreenHeader">
          Feeling like doing something impactful? <br />
          Join Science2Innovation
        </div>
        <div class="getStarted buttonScreensSixth">Get Started</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
