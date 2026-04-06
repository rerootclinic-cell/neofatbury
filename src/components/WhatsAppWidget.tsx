export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919700641000?text=Hi%20NeoFatbury!%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      style={widgetStyles}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-33 0-65.3-8.9-93.5-25.6l-6.7-4-69.5 18.2 18.5-67.7-4.4-7c-18.4-29.3-28.1-63.5-28.1-98.3 0-103.5 84.3-187.8 187.9-187.8 50.1 0 97.3 19.5 132.8 55.1 35.5 35.5 55 82.6 55 132.8-.2 103.6-84.5 187.9-188.1 187.9zm103.1-140.6c-5.6-2.8-33.5-16.5-38.7-18.4-5.2-1.9-9-2.8-12.8 2.8s-14.7 18.4-18 22.2c-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.9-8.8-45.5-28.2-16.8-15.1-28.2-33.8-31.5-39.4-3.3-5.6-.4-8.7 2.4-11.5 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9s-12.8-30.9-17.5-42.3c-4.6-11.1-9.2-9.6-12.8-9.8-3.3-.2-7.1-.2-10.8-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-20 19.5-20 47.3 0 27.8 20.4 54.7 23.3 58.5 2.8 3.8 39.8 60.8 96.4 85.3 13.5 5.8 24 9.3 32.2 11.9 13.6 4.3 26 3.7 35.8 2.2 11-1.7 33.5-13.7 38.3-26.9 4.8-13.2 4.8-24.5 3.3-26.9-1.5-2.4-5.3-3.8-10.9-6.6z" />
      </svg>
    </a>
  );
}

const widgetStyles: React.CSSProperties = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#25D366',
  color: 'white',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  zIndex: 1000,
  transition: 'transform 0.2s',
  textDecoration: 'none'
};
