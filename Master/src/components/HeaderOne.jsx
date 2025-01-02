"use client";
import Link from "next/link";
import { useEffect } from "react";
import $ from "jquery";

const HeaderOne = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) {
          selectElement.select2(); // Initialize Select2
        }
      });
    }
  }, []);
  return (
    <header className='header'>
      <div className='container container--xl'>
        <nav className='header-inner flex-between gap-8'>
          <div className='header-content-wrapper flex-align flex-grow-1'>
            {/* Logo Start */}
            <div className='logo'>
              <Link href='index.html' className='link'>
                <img src='assets/images/logo/logo.png' alt='Logo' />
              </Link>
            </div>
            {/* Logo End  */}
            {/* Select Start */}
            <div className='d-sm-block d-none'>
              <div className='header-select border border-neutral-30 bg-main-25 rounded-pill position-relative'>
                <span className='select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex'>
                  <i className='ph-bold ph-squares-four' />
                </span>
                <select
                  className='js-example-basic-single border-0'
                  name='state'
                  defaultValue='categories'
                >
                  <option value={1}>Categories</option>
                  <option value={1}>Design</option>
                  <option value={1}>Development</option>
                  <option value={1}>Architecture</option>
                  <option value={1}>Life Style</option>
                  <option value={1}>Data Science</option>
                  <option value={1}>Marketing</option>
                  <option value={1}>Music</option>
                  <option value={1}>Typography</option>
                  <option value={1}>Finance</option>
                  <option value={1}>Motivation</option>
                </select>
              </div>
            </div>
            {/* Select End */}
            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none'>
              <ul className='nav-menu flex-align '>
                <li className='nav-menu__item has-submenu activePage'>
                  <Link href='#' className='nav-menu__link'>
                    Home
                  </Link>
                  <ul className='nav-submenu scroll-sm'>
                    <li className='nav-submenu__item activePage'>
                      <Link
                        href='index.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Home LMS
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='index-2.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Home Online Course
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='index-3.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Home University
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='index-4.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Home Tutor
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-menu__item has-submenu'>
                  <Link href='#' className='nav-menu__link'>
                    Courses
                  </Link>
                  <ul className='nav-submenu scroll-sm'>
                    <li className='nav-submenu__item'>
                      <Link
                        href='course.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Course Grid View
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='course-list-view.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Course List View
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='course-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Course Details
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='lesson-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Lesson Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-menu__item has-submenu'>
                  <Link href='#' className='nav-menu__link'>
                    Pages
                  </Link>
                  <ul className='nav-submenu scroll-sm'>
                    <li className='nav-submenu__item'>
                      <Link
                        href='about.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        About
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='about-two.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        About Two
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='about-three.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        About Three
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='about-four.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        About Four
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='pricing-plan.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Pricing Plan
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='instructor.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Instructor
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='instructor-two.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Instructor Two
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='instructor-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Instructor Details
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='tutor.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Premium Tutors
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='tutor-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Premium Tutors Details
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='faq.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='tuition-jobs.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Tuition Jobs
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='events.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Events
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='event-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Event Details
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='apply-admission.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Apply Admission
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='gallery.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='privacy-policy.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='favorite-course.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Favorite Course
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='find-tutors.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Find Best Tutors
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='book-online-class.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Book Online Class
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-menu__item has-submenu'>
                  <Link href='#' className='nav-menu__link'>
                    Product
                  </Link>
                  <ul className='nav-submenu scroll-sm'>
                    <li className='nav-submenu__item'>
                      <Link
                        href='product.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Product
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='product-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Product Details
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='cart.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Cart
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='checkout.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-menu__item has-submenu'>
                  <Link href='#' className='nav-menu__link'>
                    Blog
                  </Link>
                  <ul className='nav-submenu scroll-sm'>
                    <li className='nav-submenu__item'>
                      <Link
                        href='blog.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Blog Grid
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='blog-list.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Blog List
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='blog-classic.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Blog Classic
                      </Link>
                    </li>
                    <li className='nav-submenu__item'>
                      <Link
                        href='blog-details.html'
                        className='nav-submenu__link hover-bg-neutral-30'
                      >
                        {" "}
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-menu__item'>
                  <Link href='contact.html' className='nav-menu__link'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Menu End  */}
          </div>
          {/* Header Right start */}
          <div className='header-right flex-align'>
            <form
              action='#'
              className='search-form position-relative d-xl-block d-none'
            >
              <input
                type='text'
                className='common-input rounded-pill bg-main-25 pe-48 border-neutral-30'
                placeholder='Search...'
              />
              <button
                type='submit'
                className='w-36 h-36 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-md text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
              >
                <i className='ph-bold ph-magnifying-glass' />
              </button>
            </form>
            <Link
              href='sign-in.html'
              className='info-action w-52 h-52 bg-main-25 hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600'
            >
              <i className='ph ph-user-circle' />
            </Link>
            <button
              type='button'
              className='toggle-mobileMenu d-lg-none text-neutral-200 flex-center'
            >
              <i className='ph ph-list' />
            </button>
          </div>
          {/* Header Right End  */}
        </nav>
      </div>
    </header>
  );
};

export default HeaderOne;
