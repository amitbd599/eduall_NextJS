const BannerFour = () => {
  return (
    <section className='banner-four bg-main-25 py-80 position-relative overflow-hidden z-1'>
      <img
        src='assets/images/shapes/shape1.png'
        alt=''
        className='shape one animation-rotation'
      />
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape5.png'
        alt=''
        className='shape three animation-walking'
      />
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape four animation-scalation'
      />
      <img
        src='assets/images/shapes/shape3.png'
        alt=''
        className='shape ten animation-walking'
      />
      <div className='container'>
        <div className='row gy-5 align-items-center'>
          <div className='col-xl-6'>
            <div className='banner-content'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-book-open' />
                </span>
                <h5 className='text-main-600 mb-0'>
                  Find the Right Tutor in Your Area
                </h5>
              </div>
              <h1 className='display4 fw-semibold mb-24 wow bounceInLeft'>
                Best Tutoring Platform for Home &amp;{" "}
                <span
                  className='text-main-two-600 wow bounceInRight'
                  data-wow-duration='2s'
                  data-wow-delay='.5s'
                >
                  Online
                </span>
                Tuitions
              </h1>
              <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                Find the Perfect Tutor Near You: Enhance Learning with Expert
                Guidance and Personalized Support Today!
              </p>
              <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                <button
                  type='button'
                  className='btn btn-main rounded-pill flex-align gap-8'
                  data-aos='fade-right'
                  data-bs-toggle='modal'
                  data-bs-target='#findTutor'
                >
                  Find Best Tutor
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </button>
                <a
                  href='apply-admission.html'
                  className='btn btn-outline-main rounded-pill flex-align gap-8'
                  data-aos='fade-left'
                >
                  Applying Tutor
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </a>
              </div>
              <div className='mt-40 d-flex align-items-center flex-wrap gap-16'>
                <h6 className='mb-0 flex-shrink-0'>Location Tutors :</h6>
                <div className='flex-grow-1 d-flex align-items-center flex-wrap gap-12'>
                  <span
                    className='py-8 px-24 bg-white box-shadow-md rounded-pill text-sm'
                    data-aos='fade-up-left'
                    data-aos-duration={1000}
                  >
                    New York : <span className='text-main-two-600'>598</span>
                  </span>
                  <span
                    className='py-8 px-24 bg-white box-shadow-md rounded-pill text-sm'
                    data-aos='fade-up-left'
                    data-aos-duration={1500}
                  >
                    Florida : <span className='text-main-two-600'>245</span>
                  </span>
                  <span
                    className='py-8 px-24 bg-white box-shadow-md rounded-pill text-sm'
                    data-aos='fade-up-left'
                    data-aos-duration={2000}
                  >
                    Captown : <span className='text-main-two-600'>475</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='banner-four-thumb position-relative'>
              <div className='banner-four-thumb__images d-flex gap-24'>
                <div className='banner-four-thumb__image wow bounceIn'>
                  <img
                    src='assets/images/thumbs/banner-four-img1.png'
                    alt='Banner Image'
                    className='rounded-bottom-start-72px rounded-top-end-72px'
                    data-tilt=''
                    data-tilt-max={14}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-transition='1s'
                    data-tilt-full-page-listening=''
                  />
                </div>
                <div className='banner-four-thumb__image wow bounceIn mt-160'>
                  <img
                    src='assets/images/thumbs/banner-four-img2.png'
                    alt='Banner Image'
                    className='rounded-bottom-end-72px rounded-bottom-end-72px'
                    data-tilt=''
                    data-tilt-max={14}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-transition='1s'
                    data-tilt-full-page-listening=''
                  />
                </div>
              </div>
              <div className='banner-box three position-top px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'>
                <span className='banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-three-50 text-main-three-600 text-2xl flex-center rounded-circle'>
                  <i className='ph ph-suitcase-simple' />
                </span>
                <div>
                  <span>Available Tutors</span>
                  <h6 className='mt-8 fw-medium text-xl d-block text-main-three-600 mb-0 counter'>
                    1520+
                  </h6>
                </div>
              </div>
              <div className='banner-box three position-bottom px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'>
                <span className='banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-two-50 text-main-two-600 text-2xl flex-center rounded-circle'>
                  <i className='ph ph-phone-call' />
                </span>
                <div>
                  <span>Online Supports</span>
                  <a
                    href='tel:(704)555-0127'
                    className='mt-8 fw-medium text-xl d-block text-main-two-600 hover-text-main-two-700'
                  >
                    (704) 555-0127
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
