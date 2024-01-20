import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Faqs = () => {
  const faqdata = [
    {
      title: "What is National Broadband?",
      body: "National Broadband is an Internet Service Provider that uses FTTN and Ethernet as the method of delivery to home users. NBB provides internet services to its operators over its buried fiber backbone.",
    },
    {
      title: "What documents are needed to get a new connection?",
      body: "In compliance with the instructions issued by the PTA and other law enforcing agencies, internet users are now liable to update the following information on their user profile:User’s name Address of place where connection is deployed User’s mobile number Picture of both sides of CNIC All users are requested to cooperate with the Maintenance Contractors on the above mentioned instructions to avoid any inconvenience.",
    },
    {
      title: "How can we get a connection?",
      body: "You can apply for the connection of National Broadband as an end user or an operator. To generate a request for the connection, please submit the online form available on www.nationalbroadband.pk",
    },
    {
      title: "What is a fair usage policy?",
      body: `We want our users to enjoy surfing the internet and our Fair Usage Policy is there to make sure our users have the best experience possible. There might be some users who use so much data that it might adversely affect the network quality & deteriorate surfing experience for majority of our users and also for themselves. We also want to make sure everyone gets the experience from their chosen plan.

      So to make sure everything is running smoothly, we continuously monitor the internet usage of our subscribers each month. A Fair Usage Policy given in Gigabytes (GB) of data applies on all packages.
      
      A small number of our users use internet services inappropriately, for example when sending or downloading very large files, sending and receiving video and other large files constantly, sharing services with neighborhood, re-distributing illegally. This means that service quality for all users is affected, making it slower for everyone to access the internet.
      The vast majority of our users use their service considerately. Even though only a small number of our users use the service inappropriately, their activity does greatly affect the service. Our Fair Use Policy manages inappropriate use and makes sure the service can be used fairly by everyone.
      
      Under the policy we have defined fair usage levels for unlimited data transfer plans and needless to mention, the usage levels are set above normal usage such that most users will not be affected by the Fair Usage Policy.
      
      While Fair Usage Policy applies to all our users, it’ll only actually affect those few users who make inappropriate use of our services.
      
      The impact of Fair Usage Policy on data transfer limits:
      
      Under Fair usage policy, data transfer limits of the plans are not changed; the data transfer limits remain as it is. (e.g. an unlimited plan will continue as an unlimited plan).
      
      Post consuming a certain amount of GB/MB on the plan you have, the speeds will be rationalized.
      
      The speed of the network also varies depending on the availability of the network during that time and the number of subscribers who are latched onto the network at that point of time.
      
      **********
      
      The Maintenance Contractor can be approached for information regarding your usage stats. If you are regularly breaching your FUP limit, all you need is an upgrade of the plan that suits your requirement. With the upgraded plan, you will be able to consume the extended quota.`,
    },
    {
      title: "What are the Coverage Areas?",
      body: "Please use ‘Smart Coverage Map’, which lets you check the NBB operator’s availability in your area. All you need to do is to visit “Coverage Area” tab on our website.",
    },
    {
      title: "What are the Packages?",
      body: "We offer different packages for different cities. Please visit “Our Offerings” tab on our website. End user prices are set by our appointed local operators.",
    },
    {
      title:
        "What happens after the submission of an online request for a connection?",
      body: "Upon submission of your form, our teams will check the availability of our service in your mentioned area. Our authorized contractor will be notified about your connection request and will contact you within 24-48 hours.",
    },
    {
      title:
        "I have applied for a connection, when should I expect a response from the Maintenance Contractor?",
      body: "The response time of our operator is 72 hours from the point of form submission. You can lodge a complaint on our Facebook page, if you are not contacted within 72 hours.",
    },
  ];

  return (
    <div className="faqsmaindiv -mt-[40px] pb-8">
      <h1 className="text-[28px] sm:text-[60px] font-bold text-[#313131] text-center mt-9 mb-3">
        FAQs
      </h1>
      <div className=" flex flex-col gap-3 mx-5 sm:mx-[100px]">
        {faqdata.map((data, index) => {
          return (
            <div key={index}>
              <Accordion
                style={{ backgroundColor: "transparent" }}
                elevation={0}
              >
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ backgroundColor: "#e9e9e9", borderRadius: "100px" }}
                >
                  <h4 className="font-semibold">{data.title}</h4>
                </AccordionSummary>
                <AccordionDetails>{data.body}</AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
