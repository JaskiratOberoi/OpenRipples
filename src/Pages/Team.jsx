import React from "react";
import Title from "../components/Title/Title";

import team from "../assets/team.svg";

import "./pages.scss";
// import "../styles/accordion.scss";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";

function Team() {
  return (
    <div className="team">
      <Title content="Meet the team" />
      <img src={team} alt="team members" className="team-members" />
      <Title content="Questions?" />

      <Accordion>
        <AccordionItem header="Can I pause or cancel anytime?">
          Of course, our contracts are available on a monthly tenure. You can
          cancel anytime within the current month, and your subscription won’t
          renew for the next month. For the other tenure periods, we’ll refund
          the payment of your remaining months, with no questions asked. You
          also have the option to pause your subscription at any time, whether
          for a vacation or to align with your business needs.
        </AccordionItem>

        <AccordionItem header="Can I hire a designer or developer for only 1 month?">
          Absolutely! You can hire a designer or developer on a monthly tenure
          or you can hire them for a single project (non-subscription), and you
          also have the option to pause your remaining subscription days to use
          them later.
        </AccordionItem>

        <AccordionItem header="What if we're not happy with the designer/developer?">
          We provide you with complete control. If you’re not happy with a
          designer/developer, you can either opt for us to find another suitable
          candidate for you or you can choose to terminate the contract.
        </AccordionItem>
        <AccordionItem header="When can my designer/developer start?">
          Ideally, as soon as within 24 hours. As a design and development
          agency, we always will have a few designers and developers on standby
          for any urgent tasks that may pop up.
        </AccordionItem>
        <AccordionItem header="Can you build just my MVP without opting for subscription?">
          Yes, we offer non-subscription options for companies that may want a
          single product to be delivered with the need of any post delivery
          updates or maintenance.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Team;
