const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniatures = ({comment,description,likes,url}) =>{
  const miniatures = miniaturesTemplate.cloneNode(true);
  miniatures.querySelector('.picture__img').src = url;
  miniatures.querySelector('.picture__img').alt = description;
  miniatures.querySelector('.picture__comments').textContent = comment.length;
  miniatures.querySelector('.picture__likes').textContent = likes;
  return miniatures;
};

const renderMiniatures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture)=>{
    const miniature = createMiniatures(picture);
    fragment.append(miniature);
  });
  container.append(fragment);
};

export { renderMiniatures };
