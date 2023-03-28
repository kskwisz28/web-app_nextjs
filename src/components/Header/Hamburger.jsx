export default function Hamburger({open, onClick}) {
  return (
    <div sx={{
      height: '32px',
      width: '32px',
      cursor: 'pointer',
      position: 'relative',
      transform: 'rotate(0deg)',
      transition: '.5s ease-in-out',

      span: {
        position: 'absolute',
        display: 'block',
        height: '2px',
        width: '18px',
        background: '#000',
        borderRadius: '2px',
        opacity: 1,
        left: '7px',
        transform: 'rotate(0deg)',
        transition: '.25s ease-in-out',
      },

      'span:nth-child(1)': {
        top: '9px',
        width: open ? '17px' : null,
        transformOrigin: 'left center',

        transform: open ? 'rotate(45deg)' : null,
        left: open ? '8px' : null,
      },

      'span:nth-child(2)': {
        top: '15px',
        transformOrigin: 'left center',

        width: open ? '0%' : null,
        opacity: open ? '0' : 'initial',
      },

      'span:nth-child(3)': {
        top: '21px',
        width: open ? '17px' : null,
        transformOrigin: 'left center',

        transform: open ? 'rotate(-45deg)' : null,
        left: open ? '8px' : null,
      },
    }}
         onClick={onClick}
    >
      <span/>
      <span/>
      <span/>
    </div>
  )
}

/*


#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
  left: 8px;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
}
 */