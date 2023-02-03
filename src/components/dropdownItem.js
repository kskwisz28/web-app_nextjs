import React, { useState } from 'react'

export default function DropdownItem(props) {
  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <div href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  )
}
