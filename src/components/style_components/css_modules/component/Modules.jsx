
import style from "../assets/two.module.css"
import { Text } from './Text'
export const Modules = () => {
    // console.log(style)
  return (
    <div>
        <h1 className={style.heading}>CSS Modules</h1>
        <Text/>
    </div>
  )
}
