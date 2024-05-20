import press from "../../assets/ProjectsOverview/press-clipping.svg";
import petstagram from "../../assets/ProjectsOverview/petstagram.svg";

const projects = [
    {
        name: "Burger Builder App",
        github: "https://github.com/katharinadobiosch/burger-builder-2.0",
        url: "https://katharinadobiosch-burger-builder.netlify.app/",
        src: require("../../assets/ProjectsOverview/burger-creator.png"),

        description: `<p>
        Welcome to the Burger Builder, a dynamic web application that puts the power of culinary creativity in the hands of the user. Built with React, this application offers a unique, interactive experience that allows users to construct their own custom burgers from scratch. <br><br>

Upon landing on the home page, users are greeted with a warm welcome before being directed to the heart of the application - the Burger Creator. Here, users can add or remove a variety of ingredients to craft their perfect burger, all visualized in real-time with a fun, engaging interface. <br><br>

The application's design is centered around a clean, intuitive user experience. The Burger Creator page, for instance, uses a flexbox layout to neatly display the ingredients and controls, ensuring a smooth, easy-to-navigate process for the user. <br><br>

Once the user has finished creating their burger, they're directed to an Order Form where they can provide their contact and shipping information. This data is then passed to an Order Overview page, which provides a comprehensive summary of the user's order for review before final submission. <br><br>

The Burger Builder is more than just a web application - it's a testament to the power of modern web development tools and techniques. From managing state with React to creating responsive layouts with CSS Flexbox, this project showcases a range of skills and knowledge that are crucial in today's digital landscape. <br><br>

Future improvements for the Burger Builder include adding a backend to store orders and user information, implementing user authentication, and expanding the customization options for the burger.
</p>
`,
    },
    {
        name: "Advent Calendar",
        github: "https://github.com/katharinadobiosch/adventcalendar",
        url: "https://katharinadobiosch-adventcalendar.netlify.app/",
        src: require("../../assets/ProjectsOverview/advent-calendar.png"),

        description: `<p>
        This project is an interactive Advent Calendar built using React. The calendar is designed to bring the joy of the holiday season to users in a digital format. Each day of December, up to the 24th, users can open a new door on the calendar, just like a traditional Advent calendar.
<br><br>
The application is built with a clean and intuitive user interface. The main component, Door, generates the Advent calendar boxes dynamically based on the current date. Each box is a clickable link that leads to a unique page, creating a surprise for the user each day.
<br><br>
The Door component uses React's state and effect hooks to manage and update the state of the Advent boxes. The state of each box, whether it's open or closed, is determined by comparing the box's date with the current date. This ensures that users can only open the box corresponding to the current day or any previous days, maintaining the suspense and excitement of the Advent calendar tradition.
<br><br>
In addition to the Advent calendar, the application also features a Snow component, adding a festive touch to the application with a snowfall effect.
<br><br>
This project showcases my skills in React, JavaScript, and CSS. It demonstrates my ability to create dynamic and interactive web applications, manage state with React hooks, and build user-friendly interfaces.
<br><br>
Moreover, I've also developed the original version of this Advent Calendar in Liquid for Shopify. It's set to be released this year on the Shopify App Store. Behind each door, products from the user's own shop can be featured, utilizing metafields for seamless integration. For the purpose of my portfolio, I swiftly recreated the Advent calendar in React to illustrate its basic functionality.
</p>`,
    },
    {
        name: "Freshbnb",
        github: "",
        url: "https://freshbnb.vercel.app",
        src: require("../../assets/ProjectsOverview/freshbnb.png"),

        description: `<p>
Welcome to FreshBnb, a mock property booking and hosting platform inspired by Airbnb and the unique circumstances of the pandemic. This application, focusing on caravans and buses, is the client-side of the final group project for a one-year intensive web development training at the Digital Career Institute.
<br><br>

FreshBnb offers a unique, interactive experience that allows users to list their caravans or buses as properties for others to book. Upon landing on the home page, users are greeted with a collection of unique properties available for booking. Each listing includes the property's title, description, price, and host information.
<br><br>

The application's design is centered around a clean, intuitive user experience. The property listing page, for instance, uses a modern layout to neatly display the properties and their details, ensuring a smooth, easy-to-navigate process for the user.
<br><br>

Once the user has listed their property, the details are stored in a state object, ensuring that the state of the application is always synchronized with the user's inputs. The application also fetches card data asynchronously, indicating a dynamic, real-time user experience.
<br><br>

FreshBnb is more than just a web application - it's a testament to the power of modern web development tools and techniques. From managing state with React to handling complex object manipulation, this project showcases a range of skills and knowledge that are crucial in today's digital landscape.
<br><br>

Future improvements for FreshBnb include adding user authentication, implementing a booking system, and expanding the customization options for the property listings.
        </p>`,
    },
    {
        name: "Press Clippings",
        github: "",
        url: "",
        src: press,

        description: `<p>
        Press Clippings is a web application that allows users to create and manage a collection of press clippings. The application is designed to help users organize and store articles, reviews, and other press mentions in one convenient location. <br><br>
        </p>`,
    },
    {
        name: "Petstagram",
        github: "https://github.com/katharinadobiosch/petstagram",
        url: "",
        src: petstagram,

        description: `<p>
        Welcome to Petstagram, a dynamic social media application that puts the joy of pet ownership at the forefront. Built with React, this application offers a unique, interactive experience that allows users to create profiles for their pets, share photos and videos, and connect with other pet owners.
<br><br>
Upon landing on the home page, users are greeted with a collection of posts featuring adorable pets from all around the world. Each post includes the pet's name, the image or video, the number of likes, and all associated comments. Users can like and unlike posts, add comments, and even delete their own posts or comments, all in real-time with a clean, engaging interface.
<br><br>
The application's design is centered around a clean, intuitive user experience. The home page, for instance, uses a modern layout to neatly display the posts and controls, ensuring a smooth, easy-to-navigate process for the user.
<br><br>

Once the user has interacted with the posts, their actions are updated on the server, ensuring that the state of the application is always synchronized with the backend.
<br><br>

Petstagram is more than just a web application - it's a testament to the power of modern web development tools and techniques. From managing state with React to making server requests with fetch API, this project showcases a range of skills and knowledge that are crucial in today's digital landscape.
<br><br>

Future improvements for Petstagram include adding user authentication, implementing a more robust error handling system, and expanding the customization options for the pet profiles.
</p>`,
    },
];
export default projects;
