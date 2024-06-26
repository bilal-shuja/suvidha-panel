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
          <div className="container-xxl flex-grow-1 container-p-y">

<div className="row">
  <div className="col-lg-12 mb-4 order-0">
    <div className="card">
      <div className="d-flex align-items-end row">
        <div className="col-sm-7">
          <div className="card-body">
            <h5 className="card-title text-primary">Welcome Back! 🎉</h5>
            <p className="mb-4 ">
              You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
              your profile.
            </p>
            <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
          </div>
        </div>
        <div className="col-sm-5 text-center text-sm-left">
          <div className="card-body pb-0 px-0 px-md-4">
            <img src="../assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
