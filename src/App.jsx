import Banner from "./components/Banner";
import Footer from "./components/Footer";
import AppLayouts from "./components/layouts/AppLayouts";
import LinkList from "./components/LinkList";
function App() {
  return (
    <>
      <Banner />
      <AppLayouts>
        <LinkList />
        <Footer />
      </AppLayouts>
    </>
  );
}

export default App;
