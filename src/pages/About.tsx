import Wraper from "../sections/Wraper";
import avatarImage from "../assets/mm.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hey there, I'm Mohit Mehra </h1>
      <h2 className="profile-text">
        The mastermind responsible for conjuring up this epic Pokédex!
      </h2>
      {/* <h4 className="profile-text">
        Prepare to dive into a realm of whimsical creatures, electrifying
        adventures, and the sheer joy of being a Pokémon fanatic!
      </h4> */}
      <div className="profile-links">
        <a href="https://github.com/mohit-mehra">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mohit-mehra-2641711b9">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/blazorus/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Wraper(About);
