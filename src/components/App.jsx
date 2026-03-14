import { useEffect, useState } from "react"
import { featchArticles } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import SearchBar from "./SearchBar/SearchBar";
import toast from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [nbPages, setNbPages] = useState(1)

  useEffect(() => {
    const body = document.querySelector('body');
    if (query !== '') {
      body.classList.add('has-results');
    } else {
      body.classList.remove('has-results');
    }
  }, [query]);
  useEffect (() => {
    if (page > nbPages) {
      toast("You made it to the end")
    }
  }, [nbPages, page])

  useEffect(() => {
    if (query === '') {
      toast.error('The field is empty')
      return
    }
    const getData = async () => { 
      try {
        setIsLoading(true)
        setIsError(false)
        const { results, total_pages } = await featchArticles(query, page);
        setImages(prevImages => {
        const allImages = [...prevImages, ...results];
        const uniqueImages = allImages.filter((image, index, self) =>
          index === self.findIndex((t) => t.id === image.id)
        );
  
  return uniqueImages;
});
        setNbPages(total_pages)
      }
     catch (error) {
      console.log(error)
      setIsError(true)
      
    }
    finally{
      setIsLoading(false)
    }
  }
    getData();
  }, [query, page]);
  const handleChangeQuery = (query) => {
    setImages([])
    setQuery(query)
    setPage(1)
  }

  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <header className="header">
        <h1>Louvre Archive</h1>
        <p>Digital collection of world`s visual heritage</p>
      </header>
      <SearchBar onChangeQuery={handleChangeQuery}/>
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={modalImage} />
      {isError && <ErrorMessage/>}
      {nbPages > page && <LoadMoreBtn setPage = {setPage}/>}
    </div>
  )
}

export default App