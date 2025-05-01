function NotifBtn({ hasNotification, handelClick}) {
  return (
    <button onClick={handelClick} className="relative cursor-pointer">
      {hasNotification && <span 
      className="absolute top-[20%] right-0.5 rounded-full bg-red-400 h-1.5 block aspect-square z-10"
      ></span>}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_15_81)">
          <path
            d="M3.80706 12.8382H13.5958V7.96554C13.5958 5.25057 11.4045 3.04951 8.70141 3.04951C5.99833 3.04951 3.80706 5.25057 3.80706 7.96554V12.8382ZM8.70141 1.65112C12.1764 1.65112 14.9942 4.47796 14.9942 7.96554V14.2366H2.40868V7.96554C2.40868 4.47796 5.22642 1.65112 8.70141 1.65112ZM6.95343 14.9358H10.4494C10.4494 15.3994 10.2652 15.844 9.93742 16.1718C9.60961 16.4996 9.16501 16.6838 8.70141 16.6838C8.23782 16.6838 7.79321 16.4996 7.4654 16.1718C7.13759 15.844 6.95343 15.3994 6.95343 14.9358Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_81">
            <rect
              width="16.7806"
              height="16.7806"
              fill="white"
              transform="translate(0.311111 0.252747)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default NotifBtn;
