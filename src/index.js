import { accordeon } from "./modules/landing/accordeon"
import { burgerMenu } from "./modules/landing/burger"
import { hover } from "./modules/landing/hover"
import { modal } from "./modules/landing/modal"
import { phoneList } from "./modules/landing/phone-list"
import { price } from "./modules/landing/price"
import { scroll } from "./modules/landing/scroll"
import { Slider } from "./modules/landing/slider"
import { sliderMobile } from "./modules/landing/sliderMobile"
import { swiper } from "./modules/landing/swiper"
import { tabs } from "./modules/landing/tabs"
import { transformSlider } from "./modules/landing/transformSlider"

const reviesSlider = new Slider({
  slidesClass: '.reviews-slider__slide',
  btnPrevClass: '.reviews-arrow_left',
  btnNextClass: '.reviews-arrow_right',
  display: 'flex'
})

const transparencySlider = new Slider({
  slidesClass: '.popup-transparency-slider__slide',
  btnPrevClass: '.popup-arrow_transparency_left',
  btnNextClass: '.popup-arrow_transparency_right',
  slideCurrentClass: '.transparency-current',
  slidesTotalClass: '.transparency-total',
})

const RepairSlider1 = new Slider({
  slidesClass: '.types-repair1-slide',
  btnPrevClass: '.types-repair1_left',
  btnNextClass: '.types-repair1_right',
  slideCurrentClass: '.types-repair1_current',
  slidesTotalClass: '.types-repair1_total'
})

const RepairSlider2 = new Slider({
  slidesClass: '.types-repair2-slide',
  btnPrevClass: '.types-repair2_left',
  btnNextClass: '.types-repair2_right',
  slideCurrentClass: '.types-repair2_current',
  slidesTotalClass: '.types-repair2_total'
})

const RepairSlider3 = new Slider({
  slidesClass: '.types-repair3-slide',
  btnPrevClass: '.types-repair3_left',
  btnNextClass: '.types-repair3_right',
  slideCurrentClass: '.types-repair3_current',
  slidesTotalClass: '.types-repair3_total'
})

const RepairSlider4 = new Slider({
  slidesClass: '.types-repair4-slide',
  btnPrevClass: '.types-repair4_left',
  btnNextClass: '.types-repair4_right',
  slideCurrentClass: '.types-repair4_current',
  slidesTotalClass: '.types-repair4_total'
})

const RepairSlider5 = new Slider({
  slidesClass: '.types-repair5-slide',
  btnPrevClass: '.types-repair5_left',
  btnNextClass: '.types-repair5_right',
  slideCurrentClass: '.types-repair5_current',
  slidesTotalClass: '.types-repair5_total'
})

const portfolioSlider = new Slider({
  slidesClass: '.portfolio-slide',
  btnPrevClass: '.portfolio-arrow-mobile_left',
  btnNextClass: '.portfolio-arrow-mobile_right',
  slideCurrentClass: '.portfolio-current',
  slidesTotalClass: '.portfolio-total'
})

const portfolioModalSlider = new Slider({
  slidesClass: '.portfolioModal-slide',
  btnPrevClass: '.portfolio-modal-left',
  btnNextClass: '.portfolio-modal-right'
})

const portfolioTextSlider = new Slider({
  slidesClass: '.popup-portfolio-text',
  btnPrevClass: '.portfolio-modal-left',
  btnNextClass: '.portfolio-modal-right',
  slideCurrentClass: '.modal-current',
  slidesTotalClass: '.modal-total'
})

const servisesSlider = new Slider({
  slidesClass: '.services-slide',
  btnPrevClass: '.slider-services-left',
  btnNextClass: '.slider-services-right',
  display: 'flex'
})


phoneList()
burgerMenu()
scroll()
modal()
accordeon()
price()
tabs()
hover()
swiper()
sliderMobile()
transformSlider('.nav-list-repair', 'nav-arrow-repair-left_base', 'nav-arrow-repair-right_base')

transparencySlider.init()
reviesSlider.init()
RepairSlider1.init()
RepairSlider2.init()
RepairSlider3.init()
RepairSlider4.init()
RepairSlider5.init()
portfolioSlider.init()
portfolioModalSlider.init()
portfolioTextSlider.init()
servisesSlider.init()
