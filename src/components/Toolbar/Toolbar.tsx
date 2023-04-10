import React from 'react'
import styles from './Toolbar.module.scss'
import Image from 'next/image';
import brush from '/public/brush.svg';
import eraser from '/public/eraser.svg';
import circle from '/public/circle.svg';
import rect from '/public/rect.svg';
import palette from '/public/palette.svg';
import line from '/public/line.svg';
import { Tool } from '@/models/Tool';

const tools: Tool[] = [
  { name: 'Brush tool', icon: brush},
  { name: 'Eraser tool', icon: eraser},
  { name: 'Circle tool', icon: circle},
  { name: 'Rectangle tool', icon: rect},
  { name: 'Palette tool', icon: palette},
  { name: 'Line tool', icon: line},
];

function Toolbar() {
  return (
    <div className={styles.toolbar}>
        {tools.map((tool) => {
          return (
            <button key={tool.name} className={styles.toolbar_btn}>
            <Image src={tool.icon} className={styles.toolbar_btn_icon} alt={tool.name} />
      </button>
          )
        })}
    </div>
  )
}

export default Toolbar