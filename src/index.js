import { accordeon } from "./modules/landing/accordeon"
import { burgerMenu } from "./modules/landing/burger"
import { hover } from "./modules/landing/hover"
import { modal } from "./modules/landing/modal"
import { phoneList } from "./modules/landing/phone-list"
import { price } from "./modules/landing/price"
import { scroll } from "./modules/landing/scroll"
import { slider } from "./modules/landing/slider"
import { sliderMobile } from "./modules/landing/sliderMobile"
import { swiperPortfolio } from "./modules/landing/swiperPortfolio"
import { tabs } from "./modules/landing/tabs"
import { transformSlider } from "./modules/landing/transformSlider"

phoneList()
burgerMenu()
scroll()
modal()
accordeon()
price()
tabs()
hover()
swiperPortfolio()
sliderMobile()

transformSlider('.nav-list-repair', 'nav-arrow-repair-left_base', 'nav-arrow-repair-right_base')

slider('.popup-transparency-slider__slide',
  '.popup-arrow_transparency_left', '.popup-arrow_transparency_right',
  '.transparency-current', '.transparency-total');

slider('.types-repair1-slide',
  '.types-repair1_left', '.types-repair1_right',
  '.types-repair1_current', '.types-repair1_total');

slider('.types-repair2-slide',
  '.types-repair2_left', '.types-repair2_right',
  '.types-repair2_current', '.types-repair2_total');

slider('.types-repair3-slide',
  '.types-repair3_left', '.types-repair3_right',
  '.types-repair3_current', '.types-repair3_total');

slider('.types-repair4-slide',
  '.types-repair4_left', '.types-repair4_right',
  '.types-repair4_current', '.types-repair4_total');

slider('.types-repair5-slide',
  '.types-repair5_left', '.types-repair5_right',
  '.types-repair5_current', '.types-repair5_total');

slider('.portfolio-slide',
  '.portfolio-arrow-mobile_left', '.portfolio-arrow-mobile_right',
  '.portfolio-current', '.portfolio-total');

slider('.portfolioModal-slide',
  '.portfolio-modal-left', '.portfolio-modal-right');

slider('.popup-portfolio-text',
  '.portfolio-modal-left', '.portfolio-modal-right',
  '.modal-current', '.modal-total');

slider('.reviews-slider__slide',
  '.reviews-arrow_left', '.reviews-arrow_right', null, null, 'flex');

slider('.services-slide',
  '.slider-services-left', '.slider-services-right', null, null, 'flex');
