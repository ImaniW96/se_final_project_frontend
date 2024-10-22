// import SoftwareEngineeringIcon from "../assets/programming.png";
// import UXDesignIcon from "../assets/ui-ux.png";
// import MarketingIcon from "../assets/digital-marketing.png";

// export const cardData = [
//   {
//     id: 0,
//     title: "Software Engineering",
//     image: SoftwareEngineeringIcon,
//     description: `At Digital Fusion, we empower high school students interested in software engineering to collaborate and create impactful projects. Here’s how it works:

//     **Join a Team**: If you're passionate about software engineering, you can join a dedicated team of fellow students who share your interests.

//     **Collaborate on Projects**: Work together with your peers to develop websites or apps. You'll have the opportunity to apply your skills and bring your ideas to life.

//     **UX Design Integration**: As part of a multi-disciplinary environment, you'll collaborate with students focused on UX design. They will create the design concepts that you and your team will bring to reality.

//     **Mentorship**: Each project team is paired with an industry professional who will guide you throughout the process. Your mentor will be available to answer questions, provide insights, and offer support, mimicking the experience of working in a real-world development environment.

//     **Make a Difference**: Together, you’ll create projects that can make a meaningful impact, helping you build valuable experience for your future career.

//     Join Digital Fusion and take the first step towards bringing your dreams to life!`,
//   },
//   {
//     id: 1,
//     title: "UX Design",
//     image: UXDesignIcon,
//     description: {
//       paragraph1: `At Digital Fusion, we empower high school students interested in UX design to collaborate and create impactful projects. Here’s how it works:

//     **Join a Team**: If you're passionate about UX design, you can join a dedicated team of fellow students who share your interests.`,
//       paragraph2: `**Collaborate on Projects**: Work together with your peers to develop websites or apps. You'll have the opportunity to apply your skills and bring your ideas to life.

//   **UX Design and Software Engineering Integration**: As part of a multi-disciplinary environment, you'll collaborate with students focused on UX design and software engineering to bring your marketing strategies to l`,
//     }`At Digital Fusion, we empower high school students interested in UX design to collaborate and create impactful projects. Here’s how it works:

//     **Join a Team**: If you're passionate about UX design, you can join a dedicated team of fellow students who share your interests.

//     **Collaborate on Projects**: Work together with your peers to develop websites or apps. You'll have the opportunity to apply your skills and bring your ideas to life.

//     **Software Engineering Integration**: As part of a multi-disciplinary environment, you'll collaborate with students focused on software engineering. They will implement the design concepts that you and your team create.

//     **Mentorship**: Each project team is paired with an industry professional who will guide you throughout the process. Your mentor will be available to answer questions, provide insights, and offer support, mimicking the experience of working in a real-world development environment.

//     **Make a Difference**: Together, you’ll create projects that can make a meaningful impact, helping you build valuable experience for your future career.

//     Join Digital Fusion and take the first step towards bringing your dreams to life!`,
//   },
//   {
//     id: 2,
//     title: "Marketing",
//     image: MarketingIcon,
//     description: `At Digital Fusion, we empower high school students interested in marketing to collaborate and create impactful projects. Here’s how it works:

//     **Join a Team**: If you're passionate about marketing, you can join a dedicated team of fellow students who share your interests.

//     **Collaborate on Projects**: Work together with your peers to develop websites or apps. You'll have the opportunity to apply your skills and bring your ideas to life.

//     **UX Design and Software Engineering Integration**: As part of a multi-disciplinary environment, you'll collaborate with students focused on UX design and software engineering to bring your marketing strategies to life.

//     **Mentorship**: Each project team is paired with an industry professional who will guide you throughout the process. Your mentor will be available to answer questions, provide insights, and offer support, mimicking the experience of working in a real-world development environment.

//     **Make a Difference**: Together, you’ll create projects that can make a meaningful impact, helping you build valuable experience for your future career.

//     Join Digital Fusion and take the first step towards bringing your dreams to life!`,
//   },

//   {id:3,
//   title: "Marketing",
// image:"MarketingIcon",
// description = (
//   <>
//     <p>at digital fusion...</p>
//     <p>...</p>
//   </>
// )}
// ];
import SoftwareEngineeringIcon from "../assets/programming.png";
import UXDesignIcon from "../assets/ui-ux.png";
import MarketingIcon from "../assets/digital-marketing.png";

export const cardData = [
  {
    id: 0,
    title: "Software Engineering",
    image: SoftwareEngineeringIcon,
    description: (
      <div className="popup__description">
        <p>
          At Digital Fusion, we empower high school students interested in
          software engineering to collaborate and create impactful projects.
          Here’s how it works:
        </p>
        <p>
          <strong>Join a Team:</strong> If you're passionate about software
          engineering, you can join a dedicated team of fellow students who
          share your interests.
        </p>
        <p>
          <strong>Collaborate on Projects:</strong> Work together with your
          peers to develop websites or apps. You'll have the opportunity to
          apply your skills and bring your ideas to life.
        </p>
        <p>
          <strong>UX Design Integration:</strong> As part of a
          multi-disciplinary environment, you'll collaborate with students
          focused on UX design. They will create the design concepts that you
          and your team will bring to reality.
        </p>
        <p>
          <strong>Mentorship:</strong> Each project team is paired with an
          industry professional who will guide you throughout the process. Your
          mentor will be available to answer questions, provide insights, and
          offer support, mimicking the experience of working in a real-world
          development environment.
        </p>
        <p>
          <strong>Make a Difference:</strong> Together, you’ll create projects
          that can make a meaningful impact, helping you build valuable
          experience for your future career.
        </p>
        <p>
          Join Digital Fusion and take the first step towards bringing your
          dreams to life!
        </p>
      </div>
    ),
  },
  {
    id: 1,
    title: "UX Design",
    image: UXDesignIcon,
    description: (
      <div className="popup__description">
        <p>
          At Digital Fusion, we empower high school students interested in UX
          design to collaborate and create impactful projects. Here’s how it
          works:
        </p>
        <p>
          <strong>Join a Team:</strong> If you're passionate about UX design,
          you can join a dedicated team of fellow students who share your
          interests.
        </p>
        <p>
          <strong>Collaborate on Projects:</strong> Work together with your
          peers to develop websites or apps. You'll have the opportunity to
          apply your skills and bring your ideas to life.
        </p>
        <p>
          <strong>Software Engineering Integration:</strong> As part of a
          multi-disciplinary environment, you'll collaborate with students
          focused on software engineering. They will implement the design
          concepts that you and your team create.
        </p>
        <p>
          <strong>Mentorship:</strong> Each project team is paired with an
          industry professional who will guide you throughout the process. Your
          mentor will be available to answer questions, provide insights, and
          offer support, mimicking the experience of working in a real-world
          development environment.
        </p>
        <p>
          <strong>Make a Difference:</strong> Together, you’ll create projects
          that can make a meaningful impact, helping you build valuable
          experience for your future career.
        </p>
        <p>
          Join Digital Fusion and take the first step towards bringing your
          dreams to life!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Marketing",
    image: MarketingIcon,
    description: (
      <div className="popup__description">
        <p>
          At Digital Fusion, we empower high school students interested in
          marketing to collaborate and create impactful projects. Here’s how it
          works:
        </p>
        <p>
          <strong>Join a Team:</strong> If you're passionate about marketing,
          you can join a dedicated team of fellow students who share your
          interests.
        </p>
        <p>
          <strong>Collaborate on Projects:</strong> Work together with your
          peers to develop marketing strategies that can help bring your ideas
          to life.
        </p>
        <p>
          <strong>UX Design and Software Engineering Integration:</strong> As
          part of a multi-disciplinary environment, you'll collaborate with
          students focused on UX design and software engineering to bring your
          marketing strategies to life.
        </p>
        <p>
          <strong>Mentorship:</strong> Each project team is paired with an
          industry professional who will guide you throughout the process. Your
          mentor will be available to answer questions, provide insights, and
          offer support, mimicking the experience of working in a real-world
          development environment.
        </p>
        <p>
          <strong>Make a Difference:</strong> Together, you’ll create projects
          that can make a meaningful impact, helping you build valuable
          experience for your future career.
        </p>
        <p>
          Join Digital Fusion and take the first step towards bringing your
          dreams to life!
        </p>
      </div>
    ),
  },
];
