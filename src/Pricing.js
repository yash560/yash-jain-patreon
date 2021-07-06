import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./pricing/firstScreen.css";
import "./pricing/pricingMediaQuerry.css";
import CheckComponet from "./pricing/CheckComponet";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
function Pricing() {
  const [open, isopen] = useState(false);
  const [open1, isopen1] = useState(false);
  const [open2, isopen2] = useState(false);
  const [open3, isopen3] = useState(false);
  const [open4, isopen4] = useState(false);

  return (
    <div class="App">
      <Header />
      <div class="PricingfirstScreen">
        <div class="PricingfirstScreenInside">
          <div class="PricingfirstScreenText">
            <div class="PricingfirstScreenHeader">
              We only succeed when you succeed
            </div>
            <div class="PricingfirstScreenBody">
              It’s completely free to get started. We only receive a small
              percentage once you start earning on Patreon, plus an
              industry-standard rate for processing payments from your patrons.
            </div>
          </div>
          <div class="cardContainer">
            <div class="planCard">
              <div class="card">
                <div class="planCardFirstText">
                  <div class="planCardHeader">Lite </div>
                  <div class="planCardBody">
                    Simple tools to set up recurring support from your fans.
                  </div>
                </div>
                <div class="planCardSecondText">
                  <div class="planCardSecondHeader">5% </div>
                  <div class="planCardSecondBody">
                    of the monthly income you earn on Patreon
                  </div>
                </div>
                <div class="planCardThirdText">
                  <div class="planCardThirdBody">Plus payment processing</div>
                </div>
                <div class="planCardFourthText">
                  <CheckComponet text="Hosted creator page" />
                  <CheckComponet text="Patron communication tools" />
                  <CheckComponet text="Patreon workshops" />
                </div>
                <div class="planCardButtons">Get started</div>
                <div class="learnMore">Learn more</div>
              </div>
            </div>
            <div class=" recommendedPlanCard ">
              <div class="planCardFirstText">
                <div class="planCardHeader">Pro </div>
                <div class="planCardBody">
                  Everything you need to build a thriving membership business
                  that provides meaningful income for you and a rewarding
                  experience for your biggest fans.
                </div>
              </div>
              <div class="planCardSecondText">
                <div class="planCardSecondHeader">8% </div>
                <div class="planCardSecondBody">
                  of the monthly income you earn on Patreon
                </div>
              </div>
              <div class="planCardThirdText">
                <div class="planCardThirdBody">Plus payment processing</div>
              </div>
              <div class="planCardFourthText">
                <CheckComponet text="Everything in Lite and..." />
                <CheckComponet text="Membership tiers" />
                <CheckComponet text="Analytics and insights" />
                <CheckComponet text="Special Offers promo tool" />
                <CheckComponet text="Creator-led workshops" />
                <CheckComponet text="Unlimited app integrations" />{" "}
                <CheckComponet text="Priority customer support" />
              </div>
              <div class="recommendedButton">Get started</div>
              <div class="learnMore">Learn more</div>
            </div>
            <div class="planCard">
              {" "}
              <div class="card">
                <div class="planCardFirstText">
                  <div class="planCardHeader">Premium </div>
                  <div class="planCardBody">
                    Dedicated coaching and support for established creators and
                    creative businesses, plus premium features that save time
                    and reward your patrons.
                  </div>
                </div>
                <div class="planCardSecondText">
                  <div class="planCardSecondHeader">12% </div>
                  <div class="planCardSecondBody">
                    of the monthly income you earn on Patreon
                  </div>
                </div>
                <div class="planCardThirdText">
                  <div class="planCardThirdBody">Plus payment processing</div>
                </div>
                <div class="planCardFourthText">
                  <CheckComponet text="Everything in Pro and..." />
                  <CheckComponet text="Dedicated Partner Manager" />
                  <CheckComponet text="Merch for Membership" />
                  <CheckComponet text="Team Accounts" />
                </div>
                <div class="planCardButtons">Get started</div>
                <div class="learnMore">Learn more</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div class="PricingSecondScreen">
        <div class="PricingsecondScreenInside">
          <div class="PricingSecondScreenText">
            <div class="PricingSecondScreenHeader">
              About payment processing fees
            </div>
            <div class="PricingfirstScreenBody PricingSecondScreenBody">
              Payment processing fees cover the cost of all the things we do
              behind the scenes to collect payments from your patrons securely
              and reliably.
            </div>
          </div>
          <div class="secondColummnDiv">
            <div class="secondScreenColumns">
              <div class="secondScreenColumnsComponent">
                <i class="fas secondCheck fa-check"></i>
                <div class="secondScreenLeftColumn">
                  <div class="secondScreenLeftColumnInside">
                    <span class="secondScreenLeftColumnInsideHeader">
                      Recurring billing
                    </span>
                    <span class="secondScreenLeftColumnInsideBody">
                      We bill your patrons each month, and handle your patrons’
                      questions to ensure they’re taken care of.
                    </span>
                  </div>
                </div>
              </div>
              <div class="secondScreenColumnsComponent">
                <i class="fas secondCheck fa-check"></i>
                <div class="secondScreenLeftColumn">
                  <div class="secondScreenLeftColumnInside">
                    <span class="secondScreenLeftColumnInsideHeader">
                      Recover failed payments
                    </span>
                    <span class="secondScreenLeftColumnInsideBody">
                      We chase down declined payments with smart retries and
                      reminders for expired cards.
                    </span>
                  </div>
                </div>
              </div>
              <div class="secondScreenColumnsComponent">
                <i class="fas secondCheck fa-check"></i>
                <div class="secondScreenLeftColumn">
                  <div class="secondScreenLeftColumnInside">
                    <span class="secondScreenLeftColumnInsideHeader">
                      Fraud protection
                    </span>
                    <span class="secondScreenLeftColumnInsideBody">
                      We catch fraud before it hits your balance so you don’t
                      have to.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="secondScreenColumns">
              <div class="secondScreenColumnsComponent">
                <i class="fas secondCheck fa-check"></i>
                <div class="secondScreenLeftColumn">
                  <div class="secondScreenLeftColumnInside">
                    <span class="secondScreenLeftColumnInsideHeader">
                      Flexible processing fees
                    </span>
                  </div>
                </div>
              </div>
              <div class="secondScreenRightColumn">
                <span class="secondScreenRightColumnInsideHeader">
                  Standard rate
                </span>
                <span class="secondScreenRightColumnInsidePrice">
                  2.9% + $0.30
                </span>
                <span class="secondScreenRightColumnInsidefooter">
                  per successful payment over $3
                </span>
              </div>
              <div class="secondScreenRightColumn">
                <span class="secondScreenRightColumnInsideHeader">
                  Micropayment rate
                </span>
                <span class="secondScreenRightColumnInsidePrice">
                  5% + $0.10
                </span>
                <span class="secondScreenRightColumnInsidefooter">
                  per successful payment $3 or less
                </span>
              </div>
            </div>
          </div>
          <div class="cardinfoDivision">
            <div class="cardName">
              <img
                src="	https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/logo-visa_2x.png"
                alt=""
                class="cardImage Visa"
              />
            </div>
            <div class="cardName">
              <img
                src="	https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/logo-mastercard_2x.png"
                alt=""
                class="cardImage masterCard"
              />
            </div>
            <div class="cardName">
              <img
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/logo-discover_2x.png"
                alt=""
                class="cardImage discover"
              />
            </div>
            <div class="cardName">
              <img
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/logo-amex_2x.png"
                alt=""
                class="cardImage americanExpress"
              />
            </div>
            <div class="cardName">
              <img
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/logo-paypal_2x.png"
                alt=""
                class="cardImage payPal"
              />
            </div>
          </div>
          <div class="cardinfoDivision">
            <span class="cardfooterDivision">
              For all payments from patrons outside the US using PayPal there is
              an additional 1% surcharge.
            </span>
          </div>
          <div class="screenDivision"></div>
        </div>
      </div>
      <div class="pricingThirdScreen">
        <div class="pricingThirdScreenHeader">All plans include:</div>
        <div class="pricingThirdScreenInside">
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Direct relationships
            </div>
            <div class="pricingThirdScreenComponentBody">
              Develop relationships with your patrons through patron-only posts,
              messages, or directly via email.
            </div>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">Business tools</div>
            <div class="pricingThirdScreenComponentBody">
              Track patron payments, lifetime value, and notes to help manage
              relationships with them directly.
            </div>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Flexible payouts
            </div>
            <div class="pricingThirdScreenComponentBody">
              Pay yourself whenever you want, or receive monthly auto payouts
              from your creator balance via direct deposit, PayPal, or Payoneer.
            </div>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">Patron support</div>
            <div class="pricingThirdScreenComponentBody">
              Rest easy knowing we handle your patrons’ questions, payments, and
              concerns to ensure they’re taken care of.
            </div>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">
              Creator-first education
            </div>
            <div class="pricingThirdScreenComponentBody">
              Learn how to effectively run your creative business with our
              workshops, world-class knowledge base, and creator resources.
            </div>
          </div>
          <div class="pricingThirdScreenComponent">
            <div class="pricingThirdScreenComponentHeader">Mobile app</div>
            <div class="pricingThirdScreenComponentBody">
              Message your patrons and monitor your membership business with our
              native iOS and Android apps.
            </div>
          </div>
        </div>
        <div class="screenDivision"></div>
        <div class="thirdLearnLine">
          Want to run a membership on your own website under your own brand?
          <div class="highlited">Learn more about Memberful</div>
        </div>
        <div class="screenDivision"></div>
      </div>
      <div class="PricingFourthScreen">
        <div class="PricingFourthScreenHeader">FAQ</div>
        <div class="PricingFourthScreenBody">
          <div class="PricingFourthScreenComponent">
            <div
              onClick={(e) => {
                e.preventDefault();
                if (open == true) {
                  isopen(false);
                } else {
                  isopen(true);
                }
              }}
              class="PricingFourthScreenComponentHeader"
            >
              Who is Lite for?
              <ControlPointIcon />
            </div>
            <div
              class={
                open == true
                  ? "PricingFourthScreenComponentBodyopen"
                  : "PricingFourthScreenComponentBodyclose"
              }
            >
              Lite is for creators who want to allow their fans to support them
              at flexible monthly amounts, and aren’t planning to provide a lot
              of different benefits at different membership tiers. Learn more
            </div>
          </div>
          <div class="PricingFourthScreenComponent">
            <div
              onClick={(e) => {
                e.preventDefault();
                if (open1 == true) {
                  isopen1(false);
                } else {
                  isopen1(true);
                }
              }}
              class="PricingFourthScreenComponentHeader"
            >
              Who is Pro for? <ControlPointIcon />
            </div>
            <div
              class={
                open1 == true
                  ? "PricingFourthScreenComponentBodyopen"
                  : "PricingFourthScreenComponentBodyclose"
              }
            >
              Pro is for creators who want to build a robust, thriving
              membership business with different benefits at different
              membership tiers, and who want more tools to help them grow their
              business. Learn more
            </div>
          </div>
          <div class="PricingFourthScreenComponent">
            <div
              onClick={(e) => {
                e.preventDefault();
                if (open2 == true) {
                  isopen2(false);
                } else {
                  isopen2(true);
                }
              }}
              class="PricingFourthScreenComponentHeader"
            >
              Who is Premium for? <ControlPointIcon />
            </div>
            <div
              class={
                open2 == true
                  ? "PricingFourthScreenComponentBodyopen"
                  : "PricingFourthScreenComponentBodyclose"
              }
            >
              Premium is for established creators and creative businesses
              looking for a higher level of service and advanced features. The
              Premium plan has a limited number of openings at this time. We’ll
              be rolling it out gradually as spots become available.
            </div>
          </div>
          <div class="PricingFourthScreenComponent">
            <div
              onClick={(e) => {
                e.preventDefault();
                if (open3 == true) {
                  isopen3(false);
                } else {
                  isopen3(true);
                }
              }}
              class="PricingFourthScreenComponentHeader"
            >
              How easy is it to move back and forth between the different plans?
              <ControlPointIcon />
            </div>
            <div
              class={
                open3 == true
                  ? "PricingFourthScreenComponentBodyopen"
                  : "PricingFourthScreenComponentBodyclose"
              }
            >
              You can switch between Lite and Pro at any time, after disabling
              any features that aren't included in Lite, such as multiple
              membership tiers, and Special Offers if you have an active offer
              running. For creators who join Premium, there is a minimum three
              month commitment before you can switch to a different plan.
            </div>
          </div>
          <div class="PricingFourthScreenComponent">
            <div
              onClick={(e) => {
                e.preventDefault();
                if (open4 == true) {
                  isopen4(false);
                } else {
                  isopen4(true);
                }
              }}
              class="PricingFourthScreenComponentHeader"
            >
              Who is Lite for?
              <ControlPointIcon />
            </div>
            <div
              class={
                open4 == true
                  ? "PricingFourthScreenComponentBodyopen"
                  : "PricingFourthScreenComponentBodyclose"
              }
            >
              Lite is for creators who want to allow their fans to support them
              at flexible monthly amounts, and aren’t planning to provide a lot
              of different benefits at different membership tiers. Learn more
            </div>
          </div>
        </div>
      </div>
      <div class="sixthScreen pricingsixthScreen">
        <div class="thirdScreenHeader sixthScreenHeader ">
          Join 200,000+ creators changing the way their art is valued
        </div>
        <div class="getStarted buttonScreensSixth">Get Started</div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
