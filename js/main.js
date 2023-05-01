const PICTURE_COUNT = 25;
const AVATARS_COUNT = 6;
const LIKE_COUNT = { MIN: 15, MAX: 200, };
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!',
];

const DESCRIPTIONS = [
  'Я, снова я и опять я',
  'Просто я',
  'Но сначала селфи!',
  'Типичный я',
  'Остаюсь верен традициям – воскресное селфи',
  'Рождена, чтобы блистать',
  'Я делаю себяшку',
  'Я не часто снимаю селфи, но когда доходят руки…',
  'Как вам мой лук?',
  'Да, я такая и проснулась',
  'Разве можно быть счастливее?',
  'Я не одна на миллион, я одна из 7 миллиардов',
  'Не идеальная, но уникальная.',
  'Мыслями на пляже.',
  'Жизнь слишком коротка для плохого настроения.',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join('');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  massage: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_COUNT.MIN, LIKE_COUNT.MAX),
  comment: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, picturesIndex) =>
    createPicture(picturesIndex + 1)
  );

getPictures();
