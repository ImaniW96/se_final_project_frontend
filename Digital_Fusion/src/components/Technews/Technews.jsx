import "../Technews/Technews.css";
import ArticalCards from "../ArticalCards/ArticalCard";
function Technews() {
  return (
    <>
      <header className="tech__header">
        <h1 className="tech__header_text">Find the lastest Tech News</h1>
        <div className="tech__searchbar">
          <input
            className="tech__searchbar_input"
            id="techsearch-form"
            type="input"
            placeholder="Search for the latest Tech News"
            name="keyword"
          />
        </div>
      </header>

      <ArticalCards />
    </>
  );
}

export default Technews;
