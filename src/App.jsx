import { motion, AnimatePresence } from "motion/react";
import Scroll from "./Components/Scroll";
import Introduction from "./Components/Introduction";
import BookACall from "./Components/BookACall";
import CustomerReviews from "./Components/CustomerReview";

function App() {
  return (
    <>
      <Scroll />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gray-800"
        >
          <Introduction />
          <CustomerReviews />
          <BookACall />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
