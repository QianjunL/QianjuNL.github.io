import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Qianjun (Cheryl) 's Porfolio */}
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/qianjun-liang-a27079279/"
            target="_blank"
          >
            <img src="/LinkedIn_icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/qianjun-ql" target="_blank">
            <img src="/github4.png" alt="github" />
          </a>
          <a href="mailto:cheryl0516liang@gmail.com" target="_blank">
            <img src="/gmail-icon-free-png.webp" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
