import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

const SelectGeneralComponent = () => {

    return (
        <Grid>
            <FormControl sx={{ m: 2, width: 300 }}>
                <InputLabel>Category</InputLabel>
                <Select
                    id="demo-multiple-chip"
                    multiple
                    value={""}
                    onChange={() => { }}
                    input={<OutlinedInput />}
                // renderValue={(selected) => (
                //     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                //         {selected.map((value) => (
                //             <Chip key={value} label={value} />
                //         ))}
                //     </Box>
                // )}
                >
                    {/* {categories.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                        >
                            {category}
                        </MenuItem>
                    ))} */}
                </Select>
            </FormControl>
        </Grid>
    );
}

export default SelectGeneralComponent;