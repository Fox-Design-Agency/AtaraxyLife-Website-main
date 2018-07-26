import confirmDelete from "./modules/confirmDelete";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";
import $ from "jquery";

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();

const revealFeatureItems = new RevealOnScroll($(".feature-item"), "85%");
const revealTestimonials = new RevealOnScroll($(".testimonial"), "80%");

const modal = new Modal();