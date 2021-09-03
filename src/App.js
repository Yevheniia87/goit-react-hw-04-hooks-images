import styles from "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Modal } from "./components/Modal/Modal.js";
import { Searchbar } from "./components/Searchbar/Searchbar.js";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.js";
import { Loader } from "./components/Loader/Loader.js";
import { Button } from "./components/Button/Button.js";
import { fetchImagesQuery } from "./components/services/api.js";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [imageSelected, setImageSelected] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getImage() {
      setStatus("pending");
      try {
        const images = await fetchImagesQuery(searchQuery, page);
        if (!images.length) {
          throw new Error();
        }
        setImages((prevImages) => [...prevImages, ...images]);
        setStatus("resolved");

        page > 1 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      } catch (error) {
        toast.warning(`Not found any images by query: ${searchQuery}`);
        setStatus("rejected");
      }
    }
    getImage();
  }, [searchQuery, page]);

  const handleChange = (search) => {
    if (search === searchQuery) {
      toast.info("Please, enter new query!");
      return;
    }
    resetState();
    setSearchQuery(search);
  };

  const resetState = () => {
    setSearchQuery("");
    setPage(1);
    setImageSelected(null);
    setImages([]);
    setStatus("idle");
  };
  const toggleModal = () => {
    setImageSelected(!imageSelected);
  };
  const incrementPage = () => {
    setPage((page) => page + 1);
  };
  const handleSelectedImage = (imageURL) => {
    setImageSelected(imageURL);
  };

  if (status === "idle") {
    return (
      <div className={styles.container}>
        <Searchbar onSearch={handleChange} />
      </div>
    );
  }
  if (status === "pending") {
    return (
      <div className={styles.container}>
        <Searchbar onSearch={handleChange} />
        <Loader />
      </div>
    );
  }
  if (status === "resolved") {
    return (
      <div className={styles.container}>
        <Searchbar onSearch={handleChange} />
        <ImageGallery images={images} imageSelected={handleSelectedImage} />
        {images.length > 0 && <Button onClick={incrementPage} />}
        {imageSelected && (
          <Modal largeImageURL={imageSelected} onClose={toggleModal} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
  if (status === "rejected") {
    return (
      <div className={styles.container}>
        <Searchbar onSearch={handleChange} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
