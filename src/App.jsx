import { motion, AnimatePresence } from "motion/react";
import Scroll from "./Components/Scroll";
import Introduction from "./Components/Introduction";
import BookACall from "./Components/BookACall";
import CustomerReviews from "./Components/CustomerReview";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Solutions from "./Components/Solutions";
import CaseStudies from "./Components/CaseStudies";
import TruckScrollAnimation from "./Components/TruckScrollAnimation";
import MascotScrollAnimation from "./Components/MascotScrollAnimation";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-site-gradient min-h-screen">
        <Scroll />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gray-100"
          >
            <Navbar />
            <section id="introduction">
              <Introduction />
            </section>
            <MascotScrollAnimation />

            <section id="caseStudies">
              <CaseStudies />
            </section>
            <section id="solutions">
              <Solutions />
            </section>
            <section id="reviews">
              <CustomerReviews />
            </section>
            <section id="contact">
              <BookACall />
              <TruckScrollAnimation />
            </section>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
