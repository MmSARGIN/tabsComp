const Tabs = () => {
    return (
        <div className="-mt-7 relative">
            <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                role="tablist">
                <li class="nav-item flex-auto text-center" role="presentation">

                    <a href="#tabs-instagram" class="
      w-full
      flex
      justify-around
      items-center
      rounded-t-xl
      font-light
      text-sm
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-8
      py-4
      my-2
      focus-within:px-12
      focus-within:py-5
      focus-within:bg-white
      focus-within:text-pink-500
      text-white
      focus:border-gray-200
      active
      bg-pink-500
      group
    " id="tabs-home-instagram" data-bs-toggle="pill" data-bs-target="#tabs-instagram" role="tab"
                        aria-controls="tabs-instagram" aria-selected="true">
                        <h6>Instagram Services</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 h-7"><path className="group-focus:fill-pink-500" fill="white" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>

                    </a>


                </li>
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#twitter" class="
      w-full
      flex
      justify-around
      items-center
      font-light
      rounded-t-xl
      text-sm
      leading-tight
      uppercase
      border-x-2 border-t-2 border-transparent
      px-8
        py-4
        focus-within:px-12
        focus-within:py-5
      my-2
      focus-within:bg-white
      focus-within:text-blue-500
      text-white
      focus:border-gray-200
      bg-blue-500
      group
    " id="tabs-home-twitter" data-bs-toggle="pill" data-bs-target="#tabs-twitter" role="tab"
                        aria-controls="tabs-twitter" aria-selected="true">
                        <h6>Twitter Services</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7"><path className="group-focus:fill-blue-500" fill="white" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                    </a>
                </li>
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-youtube" class="
      w-full
      flex
      justify-around
      items-center
      font-light
      rounded-t-xl
      text-sm
      leading-tight
      uppercase
      border-x-2 border-t-2 border-transparent
      px-8
      py-4
      focus-within:px-12
      focus-within:py-5
      my-2
      focus-within:bg-white
      focus-within:text-red-500
      text-white
      focus:border-gray-200
      bg-red-500
      group
    " id="tabs-home-youtube" data-bs-toggle="pill" data-bs-target="#tabs-youtube" role="tab"
                        aria-controls="tabs-youtube" aria-selected="true">
                        <h6>Youtube Services</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-7 h-7"><path className="group-focus:fill-red-500" fill="white" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                    </a>
                </li>
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-tiktok" class="
      w-full
      flex
      justify-around
      items-center
      font-light
      rounded-t-xl
      text-sm
      leading-tight
      uppercase
      border-x-2 border-t-2  border-transparent
      px-8
      py-4
      focus-within:px-12
      focus-within:py-5
      my-2
      focus-within:bg-white
      focus-within:text-black
      text-white
      focus:current-blue-700
      focus:border-gray-200
      bg-black
      group
    " id="tabs-home-tiktok" data-bs-toggle="pill" data-bs-target="#tabs-tiktok" role="tab"
                        aria-controls="tabs-tiktok" aria-selected="true">
                        <h6>Tiktok Services</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 h-7"><path className="group-focus:fill-black" fill="white" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>

                    </a>
                </li>
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-facebook" class="
        
        w-full
        flex
        justify-around
        items-center
        font-light
        rounded-t-xl
        text-sm
        leading-tight
        uppercase
        border-x-2 border-t-2 border-transparent
        px-8
        py-4
        focus-within:px-12
        focus-within:py-5
        my-2 
        focus-within:bg-white
        focus-within:text-blue-700
        text-white
        focus:current-blue-700
        focus:border-gray-200
        bg-blue-700
        group
    " id="tabs-messages-facebook" data-bs-toggle="pill" data-bs-target="#tabs-facebook" role="tab"
                        aria-controls="tabs-facebook" aria-selected="true">
                        <h6 className="">Facebook Services</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-7 h-7"><path className="group-focus:fill-blue-700" fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                    </a>
                </li>
            </ul>
            <div class="tab-content" id="tabs-tabContentFill">
                <div class="tab-pane fade" id="tabs-instagram" role="tabpanel" aria-labelledby="tabs-home-instagram">
                    <div className="bg-pink-500 h-64">
                        Instagram
                    </div>
                </div>
                <div class="tab-pane fade" id="tabs-twitter" role="tabpanel" aria-labelledby="tabs-home-twitter">
                    <div className="bg-blue-500 h-64">
                        twitter
                    </div>
                </div>
                <div class="tab-pane fade" id="tabs-youtube" role="tabpanel" aria-labelledby="tabs-home-youtube">
                    <div className="bg-red-500 h-64">
                        youtube
                    </div>
                </div>
                <div class="tab-pane fade" id="tabs-tiktok" role="tabpanel" aria-labelledby="tabs-home-tiktok">
                    <div className="bg-black h-64">
                        tiktok
                    </div>
                </div>
                <div class="tab-pane fade" id="tabs-facebook" role="tabpanel" aria-labelledby="tabs-messages-facebook">
                    <div className="bg-blue-700 h-64">
                        facebook
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;