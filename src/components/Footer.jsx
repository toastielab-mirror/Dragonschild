import { BygulIcon } from "../assets/icons/BygulIcon";
import { DragonsChildLogo } from "../assets/logos/DragonsChild";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <DragonsChildLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  DragonsChild
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
              Dragons Child Studios: Creating fun stuff since 2023!
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://social.valkyriecoms.com/@Dragonschildhosting"
                >
                  <BygulIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Our projects</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="https://toastielab.dev" aria-label="" >
                      Toastielab
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="https://social.valkyriecoms.com/" aria-label="" >
                      Valkyriecoms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300" href="mailto:support@dragonschildstudios.com" aria-label="" >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023 Dragons child studios.
          </p>
        </div>
      </div>
    </footer>
  );
};