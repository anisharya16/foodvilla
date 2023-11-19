import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <p className="text-xl font-bold">{title}</p>
      {isVisible ? (
        <>
          <button className="underline" onClick={() => setIsVisible()}>
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button className="underline" onClick={() => setIsVisible()}>
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <p className="text-2xl font-bold p-2 m-2">Instamart</p>
      <Section
        title={"About Section"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis felis ut est ultricies, a auctor erat mattis. Suspendisse non vulputate massa, eget auctor enim. Sed venenatis a ex id euismod. Nullam at sem libero. Donec malesuada, orci a pulvinar rhoncus, sem justo molestie erat, quis varius lorem leo sed justo. Curabitur lacus dui, ultrices ut fermentum eu, dictum sed massa. Fusce elementum urna a efficitur consequat."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team Section"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis felis ut est ultricies, a auctor erat mattis. Suspendisse non vulputate massa, eget auctor enim. Sed venenatis a ex id euismod. Nullam at sem libero. Donec malesuada, orci a pulvinar rhoncus, sem justo molestie erat, quis varius lorem leo sed justo. Curabitur lacus dui, ultrices ut fermentum eu, dictum sed massa. Fusce elementum urna a efficitur consequat."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title={"Careers Section"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis felis ut est ultricies, a auctor erat mattis. Suspendisse non vulputate massa, eget auctor enim. Sed venenatis a ex id euismod. Nullam at sem libero. Donec malesuada, orci a pulvinar rhoncus, sem justo molestie erat, quis varius lorem leo sed justo. Curabitur lacus dui, ultrices ut fermentum eu, dictum sed massa. Fusce elementum urna a efficitur consequat."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default Instamart;
