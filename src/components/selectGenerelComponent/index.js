import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, MenuItem } from '@mui/material';
import { useFormik } from 'formik';

const ALL = "Всички";
const SelectGeneralComponent = ({ data, selectName }) => {
    const formik = useFormik({
        initialValues: {
            dataValue: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Grid>
            <FormControl size="small" sx={{ m: 2, width: 300 }}>
                <InputLabel>{selectName}</InputLabel>
                <Select
                    label="Country"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    name={"dataValue"}
                    value={formik?.values?.dataValue}
                >
                    <MenuItem value={ALL}>
                        {ALL}
                    </MenuItem>
                    {data && data.map((dataMenuItem) => (
                        <MenuItem key={dataMenuItem} value={dataMenuItem}>
                            {dataMenuItem}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}

export default SelectGeneralComponent;