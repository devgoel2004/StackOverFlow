import React from "react";
import LeftSidebar from "../../components/LefftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "JavaScript",
      tagDec:
        "avaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes.",
    },
    {
      id: 2,
      tagName: "Python",
      tagDec:
        "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems",
    },
    {
      id: 3,
      tagName: "C#",
      tagDec:
        "C# is a modern, general-purpose programming language that can be used to perform a wide range of tasks and objectives that span over a variety of professions. C# is primarily used on the Windows . NET framework, although it can be applied to an open source platform.",
    },
    {
      id: 4,
      tagName: "Java",
      tagDec:
        "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today.",
    },
    {
      id: 5,
      tagName: "PHP",
      tagDec:
        "PHP is an open-source, server-side programming language that can be used to create websites, applications, customer relationship management systems and more. It is a widely-used general-purpose language that can be embedded into HTML.",
    },
    {
      id: 6,
      tagName: "HTML",
      tagDec:
        "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
    },
    {
      id: 7,
      tagName: "Android",
      tagDec:
        "Android OS is a Linux-based mobile operating system that primarily runs on smartphones and tablets. The Android platform includes an operating system based upon the Linux kernel, a GUI, a web browser and end-user applications that can be downloaded.",
    },
    {
      id: 8,
      tagName: "CSS",
      tagDec:
        "CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.",
    },
    {
      id: 9,
      tagName: "ReactJS",
      tagDec:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    },
    {
      id: 10,
      tagName: "Node.js",
      tagDec:
        "Node. js is easily employed as a server-side proxy, where it can handle a large amount of simultaneous connections in a nonblocking manner. It's useful for proxying different services with varying response times, or collecting data from multiple source points.",
    },
  ];
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categories your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags make it easier for others to find and answer your
          questions
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tag.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
