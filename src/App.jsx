import { motion, AnimatePresence } from "motion/react";
import Scroll from "./Components/Scroll";
import Introduction from "./Components/Introduction";
import BookACall from "./Components/BookACall";
import CustomerReviews from "./Components/CustomerReview";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <div className="bg-site-gradient min-h-screen">
      <Scroll />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gray-800"
        >
          <Navbar />
          <section id="introduction">
            <Introduction />
          </section>
          <section id="reviews">
            <CustomerReviews />
          </section>
          <section id="contact">
            <BookACall />
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
