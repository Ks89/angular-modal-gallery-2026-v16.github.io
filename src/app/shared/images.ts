import { Image } from '@ks89/angular-modal-gallery';

import { environment } from '../../environments/environment';

const PATH = environment.imgPath;

export const IMAGES_ARRAY: Image[] = [
  new Image(0, {
    img: `${PATH}/assets/images/gallery/img1.jpg`,
    extUrl: `https://www.google.com`
  }),
  new Image(1, {
    img: `${PATH}/assets/images/gallery/img2.jpg`,
    description: `Description 2`
  }),
  new Image(
    2,
    {
      img: `${PATH}/assets/images/gallery/img3.jpg`,
      description: `Description 3`,
      extUrl: `https://www.google.com`
    },
    {
      img: `${PATH}/assets/images/gallery/thumbs/img3.png`,
      title: `custom title 2`,
      alt: `custom alt 2`,
      ariaLabel: `arial label 2`
    }
  ),
  new Image(3, {
    img: `${PATH}/assets/images/gallery/img4.jpg`,
    description: `Description 4`,
    extUrl: `https://www.google.com`
  }),
  new Image(
    4,
    {
      img: `${PATH}/assets/images/gallery/img5.jpg`
    },
    {
      img: `${PATH}/assets/images/gallery/thumbs/img5.jpg`
    }
  )
];

export const IMAGES_RECT_ARRAY: Image[] = [
  new Image(
    0,
    {
      img: `${PATH}/assets/images/carousel/milan-pegasus-gallery-statue.jpg`,
      description: 'Description 1'
    },
    {
      img: `${PATH}/assets/images/carousel/thumbs/t-milan-pegasus-gallery-statue.jpg`
    }
  ),
  new Image(
    1,
    {img: `${PATH}/assets/images/carousel/pexels-photo-47223.jpeg`},
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-47223.jpg`}
  ),
  new Image(
    2,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-52062.jpeg`,
      description: 'Description 3'
    },
    {
      img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-52062.jpg`,
      description: 'Description 3'
    }
  ),
  new Image(
    3,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-66943.jpeg`,
      description: 'Description 4'
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-66943.jpg`}
  ),
  new Image(
    4,
    {img: `${PATH}/assets/images/carousel/pexels-photo-93750.jpeg`},
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-93750.jpg`}
  ),
  new Image(
    5,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-94420.jpeg`,
      description: 'Description 6'
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-94420.jpg`}
  ),
  new Image(
    6,
    {img: `${PATH}/assets/images/carousel/pexels-photo-96947.jpeg`},
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-96947.jpg`}
  )
];

export const SAME_IMAGES: Image[] = [
  new Image(0, {
    img: `${PATH}/assets/images/gallery/img1.jpg?0`,
    extUrl: `https://www.google.com`
  }),
  new Image(1, {
    img: `${PATH}/assets/images/gallery/img1.jpg?1`,
    extUrl: `https://www.google.com`
  }),
  new Image(2, {
    img: `${PATH}/assets/images/gallery/img1.jpg?2`,
    extUrl: `https://www.google.com`
  })
];

export const IMAGES_RECT_SOURCES_ARRAY: Image[] = [
  new Image(
    0,
    {
      img: `${PATH}/assets/images/carousel/milan-pegasus-gallery-statue.jpg`,
      description: 'Description 1',
      sources: [
        {
          media: '(max-width: 480px)',
          srcset:
            `${PATH}/assets/images/carousel/milan-pegasus-gallery-statue-480w.jpg`
        },
        {
          media: '(max-width: 768px)',
          srcset:
            `${PATH}/assets/images/carousel/milan-pegasus-gallery-statue-768w.jpg`
        },
        {
          media: '(max-width: 1024px)',
          srcset:
            `${PATH}/assets/images/carousel/milan-pegasus-gallery-statue-1024w.jpg`
        }
      ]
    },
    {
      img: `${PATH}/assets/images/carousel/thumbs/t-milan-pegasus-gallery-statue.jpg`,
      title: 'First image title',
      alt: 'First image alt',
      ariaLabel: 'First image aria-label'
    }
  ),
  new Image(
    1,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-47223.jpeg`,
      sources: [
        {
          media: '(max-width: 480px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-47223-480w.jpeg`
        },
        {
          media: '(max-width: 768px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-47223-768w.jpeg`
        },
        {
          media: '(max-width: 1024px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-47223-1024w.jpeg`
        }
      ]
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-47223.jpg`}
  ),
  new Image(
    2,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-52062.jpeg`,
      description: 'Description 3',
      title: 'Third image title',
      alt: 'Third image alt',
      ariaLabel: 'Third image aria-label',
      sources: [
        {
          media: '(max-width: 480px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-52062-480w.jpeg`
        },
        {
          media: '(max-width: 768px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-52062-768w.jpeg`
        },
        {
          media: '(max-width: 1024px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-52062-1024w.jpeg`
        }
      ]
    },
    {
      img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-52062.jpg`,
      description: 'Description 3'
    }
  ),
  new Image(
    3,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-66943.jpeg`,
      description: 'Description 4',
      title: 'Fourth image title (modal obj)',
      alt: 'Fourth image alt (modal obj)',
      ariaLabel: 'Fourth image aria-label (modal obj)',
      sources: [
        {
          media: '(max-width: 480px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-66943-480w.jpeg`
        },
        {
          media: '(max-width: 768px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-66943-768w.jpeg`
        },
        {
          media: '(max-width: 1024px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-66943-1024w.jpeg`
        }
      ]
    },
    {
      img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-66943.jpg`,
      title: 'Fourth image title (plain obj)',
      alt: 'Fourth image alt (plain obj)',
      ariaLabel: 'Fourth image aria-label (plain obj)'
    }
  ),
  new Image(
    4,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-93750.jpeg`,
      sources: [
        {
          media: '(max-width: 480px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-93750-480w.jpeg`
        },
        {
          media: '(max-width: 768px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-93750-768w.jpeg`
        },
        {
          media: '(max-width: 1024px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-93750-1024w.jpeg`
        }
      ]
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-93750.jpg`}
  ),
  new Image(
    5,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-94420.jpeg`,
      description: 'Description 6',
      sources: [
        {
          media: '(max-width: 480px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-94420-480w.jpeg`
        },
        {
          media: '(max-width: 768px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-94420-768w.jpeg`
        },
        {
          media: '(max-width: 1024px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-94420-1024w.jpeg`
        }
      ]
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-94420.jpg`}
  ),
  new Image(
    6,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-96947.jpeg`,
      sources: [
        {
          media: '(max-width: 480px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-96947-480w.jpeg`
        },
        {
          media: '(max-width: 768px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-96947-768w.jpeg`
        },
        {
          media: '(max-width: 1024px)',
          srcset: `${PATH}/assets/images/carousel/pexels-photo-96947-1024w.jpeg`
        }
      ]
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-96947.jpg`}
  )
];
