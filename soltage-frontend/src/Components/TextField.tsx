import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import "./Buttons/Buttons.scss"

export default function TextField() {
  return (
    <>
      <FormControl className='material-field'>
        <OutlinedInput placeholder="" />
      </FormControl>
    </>

  )
}
