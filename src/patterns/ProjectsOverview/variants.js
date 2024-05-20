const projects = [
    {
        name: "Burger Builder App",
        description: `
        <div className="projects-overview__description">
      <p>This is a React-based web application that allows users to create their own custom burgers.</p>

      <h2>Features</h2>
      <ul>
        <li><strong>Cat:</strong> A landing page that welcomes users to the application.</li>
        <li><strong>Burger Creator:</strong> This page allows users to add or remove ingredients to create their own custom burger.</li>
        <li><strong>Order Form:</strong> After creating their burger, users fill out this form to provide their contact and shipping information.</li>
        <li><strong>Order Overview:</strong> This page provides a summary of the user's order, including their custom burger and contact information, for review before final submission.</li>
        <li><strong>Thank You:</strong> This page confirms that the user's order has been received and thanks them for their purchase.</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React:</strong> This project was bootstrapped with Create React App.</li>
        <li><strong>React Router:</strong> Used for managing and navigating between different components/pages.</li>
      </ul>

      <h2>Future Improvements</h2>
      <ul>
        <li>Add a backend to store orders and user information.</li>
        <li>Implement user authentication.</li>
        <li>Add more customization options for the burger.</li>
      </ul>
    </div>
        `,
        url: "https://katharinadobiosch-burger-builder.netlify.app/",
        src: require("../../assets/ProjectsOverview/burger-creator.png"),
    },
    {
        name: "Adventskalender",
        description: "This project description is empty.",
        url: "https://katharinadobiosch-adventcalendar.netlify.app/",
        src: require("../../assets/ProjectsOverview/advent-calendar.png"),
    },
    {
        name: "Freshbnb",
        description: "This project description is empty.",
        url: "https://freshbnb.vercel.app",
        src: require("../../assets/ProjectsOverview/freshbnb.png"),
    },
    {
        name: "Press Clippings",
        description:
            "Press Clippings ist eine Webanwendung, die es ermöglicht, Presseartikel zu verwalten.",
        url: "",
        src: require("../../assets/ProjectsOverview/petstagram.png"),
    },
    {
        name: "Petstagram",
        description: "This project description is empty.",
        src: require("../../assets/ProjectsOverview/petstagram.png"),
    },
];
export default projects;
