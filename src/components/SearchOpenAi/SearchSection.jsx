import "./SearchSection.css";
import Search from "./Search.json";
import React, { useState } from "react";
import bulb from "../Images/Lightbulb2.webp";
import { useNavigate } from "react-router-dom";
import magnifyGlass from "../Images/icons8-magnifying-glass.gif";

const SearchSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const navigateScreen = () => {
    if (searchTerm) {
      navigate("/OpenAIGUI", { state: { data: searchTerm } });
    }
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   var raw = JSON.stringify({
    //   "question": "What is the main hypothesis regarding the effect of sea lamprey nests on benthic macroinvertebrate assemblages and streambed physical heterogeneity?",
    //   "username": "Alice",
    //   "session_id": "3abc"
    //   });

    //   var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    //   // credentials: 'include',
    //   // mode: 'no-cors'

    // };

    // fetch("https://avahi-genai.com/get_answer", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
  };

  const filteredSuggestions = Search.suggestions
    .filter((suggestion) =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 4);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleImageSelection = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };


  

 
  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1">

            <div className="welcome-section">
     
            <h1 className="mt-5">Welcome Back... 🎉</h1>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
