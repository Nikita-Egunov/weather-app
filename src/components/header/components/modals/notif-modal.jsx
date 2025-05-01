import { useEffect } from "react";
import { useRef } from "react";
import NotifAccardeon from "./components/notif-accardeon";
function NotifModal({ isOpen, onClose }) {
  const notifModalRef = useRef(null)

  useEffect(() => {
    if (isOpen && notifModalRef.current) {
      notifModalRef.current.scrollTo({
        top: 350,
        behavior: 'smooth'
      });
    }
  }, [isOpen]);

  const handelScroll = () => {
    if (notifModalRef.current.scrollTop === 0) {
      onClose()
    }
  }
  const handelOnClose = (event) => {
    const {target} = event
    if (target === notifModalRef.current) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <div onScroll={handelScroll} ref={notifModalRef} onClick={handelOnClose} className="fixed bg-[rgba(140,140,140,0.49)] top-0 left-0 w-full h-full overflow-y-auto">
          <div className="absolute bg-white rounded-t-2xl top-[100%] left-0 text-slate-600 pt-8 pb-5">
            <span className="inline-block mx-auto border-t-slate-400 w-[20px] mt-2.5 border-t-2 absolute left-[50%] top-2.5 translate-1/2 cursor-pointer"></span>
            <p className="ml-4 text-2xl font-black text-shadow-sm">
              Your notification
            </p>
            <div>
              <p className="text-slate-600 ml-4 mt-2.5">New</p>
              <NotifAccardeon
                isNew={true}
                text={
                  "A sunny day in your location, consider wearing your UV protection"
                }
                time={"10 minutes ago"}
                weatherCod={1}
                accarderonText = {'Accardeon text accardeon text accardeon text'}

              />
            </div>
            <div>
              <p className="text-slate-600 ml-4 mt-2.5">Earlier</p>
               <NotifAccardeon
                isNew={false}
                text={
                  "A cloudy day will occur all day long, don't worry about the heat of the sun"
                }
                time={"1 day ago"}
                weatherCod={2}
                accarderonText = {'Accardeon text accardeon text accardeon text'}
              />
              <NotifAccardeon
                isNew={false}
                text={
                  "Potential for rain today is 84%, don't forget to bring your umbrella."
                }
                time={"2 days ago"}
                weatherCod={3}
                accarderonText = {'Accardeon text accardeon text accardeon text'}
              />
              <NotifAccardeon
                isNew={false}
                text={
                  "Potential for rain today is 84%, don't forget to bring your umbrella."
                }
                time={"2 days ago"}
                weatherCod={3}
                accarderonText = {'Accardeon text accardeon text accardeon text'}
              />
              <NotifAccardeon
                isNew={false}
                text={
                  "Potential for rain today is 84%, don't forget to bring your umbrella."
                }
                time={"2 days ago"}
                weatherCod={3}
                accarderonText = {'Accardeon text accardeon text accardeon text'}
              />
              <NotifAccardeon
                isNew={false}
                text={
                  "Potential for rain today is 84%, don't forget to bring your umbrella."
                }
                time={"2 days ago"}
                weatherCod={3}
                accarderonText = {'Accardeon text accardeon text accardeon text'}
              />
              <NotifAccardeon
                isNew={false}
                text={
                  "Potential for rain today is 84%, don't forget to bring your umbrella."
                }
                time={"2 days ago"}
                weatherCod={3}
                accarderonText = {'Accardeon text accardeon text accardeon text'}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NotifModal;
