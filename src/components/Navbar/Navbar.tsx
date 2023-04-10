import React from "react"
import styles from "./Navbar.module.scss"
import toolState from "@/store/toolState"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <label className={styles.line_width_label} htmlFor="line-width">
        Толщина
      </label>
      <input
        onChange={(e) => {
          toolState.setLineWidth(Number(e.target.value))
        }}
        className={styles.line_width_input}
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
      />
    </div>
  )
}

export default Navbar
