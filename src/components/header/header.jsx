import { useContext, useState } from "react";
import LocationBtn from "./components/location-btn";
import NotifBtn from "./components/notif-btn";
import NotifModal from "./components/modals/notif-modal";
import LocalModal from "./components/modals/local-modal";
import { LocalModalContext } from "../../contexts/localModalContext";

function Header() {
  // const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
  const {isLocalModalOpen, setIsLocalModalOpen} = useContext(LocalModalContext)
  const hasNotification = true;
  return (
    <header className="flex justify-between pt-10">
      <LocationBtn handelClick={() => setIsLocalModalOpen(true)} />
      <LocalModal
        isOpen={isLocalModalOpen}
        onClose={() => setIsLocalModalOpen(false)}
      />
      {/* <NotifBtn
        hasNotification={hasNotification}
        handelClick={() => setIsNotifModalOpen(true)}
      />
      <NotifModal
        isOpen={isNotifModalOpen}
        onClose={() => setIsNotifModalOpen(false)}
      /> */}
    </header>
  );
}

export default Header;
