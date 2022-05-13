import { accordeon } from "./modules/landing/accordeon"
import { burgerMenu } from "./modules/landing/burger"
import { hover } from "./modules/landing/hover"
import { modal } from "./modules/landing/modal"
import { phoneList } from "./modules/landing/phone-list"
import { scroll } from "./modules/landing/scroll"
import { slider } from "./modules/landing/slider"
import { tabs } from "./modules/landing/tabs"
import { transformSlider } from "./modules/landing/transformSlider"

phoneList()
burgerMenu()
scroll()
modal()
accordeon()
tabs()
hover()

transformSlider('.nav-list-repair', 'nav-arrow-repair-left_base', 'nav-arrow-repair-right_base')

slider('.popup-transparency-slider', '.popup-transparency-slider__slide',
  '.popup-arrow_transparency_left', '.popup-arrow_transparency_right',
  '.transparency-current', '.transparency-total');

slider('.types-repair1', '.types-repair1-slide',
  '.types-repair1_left', '.types-repair1_right',
  '.types-repair1_current', '.types-repair1_total');

slider('.types-repair2', '.types-repair2-slide',
  '.types-repair2_left', '.types-repair2_right',
  '.types-repair2_current', '.types-repair2_total');

slider('.types-repair3', '.types-repair3-slide',
  '.types-repair3_left', '.types-repair3_right',
  '.types-repair3_current', '.types-repair3_total');

slider('.types-repair4', '.types-repair4-slide',
  '.types-repair4_left', '.types-repair4_right',
  '.types-repair4_current', '.types-repair4_total');

slider('.types-repair5', '.types-repair5-slide',
  '.types-repair5_left', '.types-repair5_right',
  '.types-repair5_current', '.types-repair5_total');


